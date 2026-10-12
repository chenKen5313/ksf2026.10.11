"""Bundle the built viewer and all original images into one shareable HTML file."""
from base64 import b64encode
from pathlib import Path
import json
import re

root = Path(__file__).resolve().parents[1]
assets = root / 'dist' / 'assets'
css = next(assets.glob('*.css')).read_text(encoding='utf-8')
js = next(assets.glob('*.js')).read_text(encoding='utf-8')

image_root = root / 'public' / 'images'
image_uris = {}
for file in image_root.rglob('*'):
    if file.suffix.lower() not in ('.jpg', '.png'):
        continue
    name = file.relative_to(image_root).as_posix()
    media_type = 'image/jpeg' if file.suffix.lower() == '.jpg' else 'image/png'
    uri = f"data:{media_type};base64,{b64encode(file.read_bytes()).decode()}"
    if name.startswith('food/'):
        image_uris[name.removeprefix('food/')] = uri
    else:
        css = css.replace(f'/images/{name}', uri)
        js = js.replace(f'/images/{name}', uri)

# Restaurant image paths are constructed dynamically, so resolve them through
# the embedded image table in the portable edition.
js = js.replace('`/images/food/${', '`data:food/${')
js = js.replace('`data:food/${photo.file}`', 'embeddedFood[photo.file]')
# Production minification renames variables; rewrite the template generically.
js = re.sub(r'`data:food/\$\{([^}]+)\}`', r'embeddedFood[\1]', js)
js = 'const embeddedFood=' + json.dumps(image_uris) + ';\n' + js

if '/images/' in css or '/images/' in js:
    raise RuntimeError('An image was not embedded')

html = ("<!doctype html><html lang=\"zh-CN\"><head><meta charset=\"UTF-8\">"
        "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">"
        "<title>贵州五日行程｜旅途地图</title>"
        f"<style>{css}</style></head><body><div id=\"root\"></div>"
        f"<script type=\"module\">{js}</script></body></html>")

target = root / 'outputs' / 'Travel-Atlas-行程单.html'
target.parent.mkdir(exist_ok=True)
target.write_text(html, encoding='utf-8')
print(f'{target} ({target.stat().st_size:,} bytes)')
