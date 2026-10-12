import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Utensils, X } from 'lucide-react';
import { foodGroups, foodSpots, type FoodSpot } from './food';
import type { DayNo } from './types';

export default function FoodSection({ day }: { day: 'all' | DayNo }) {
  const [gallery, setGallery] = useState<{ spot: FoodSpot; index: number } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (gallery && dialog.current && !dialog.current.open) dialog.current.showModal(); }, [gallery]);
  const closeGallery = () => { dialog.current?.close(); setGallery(null); };
  const groups = foodGroups.filter(group => day === 'all' || group.days.includes(day));

  return <section id="food" className="food-section" aria-labelledby="food-heading">
    <div className="section-heading"><div><span className="overline">沿着行程，顺路吃好</span><h2 id="food-heading">对应行程的美食推荐</h2></div><span className="section-side-note">6 家店 · 你的店铺截图与实拍</span></div>
    <p className="food-source">以下信息来自你提供的大众点评截图。评分、人均与营业时间为截图记录，到店时以店铺实际信息为准。点图片可查看完整原图。</p>
    {groups.map(group => <div className="food-group" id={`food-day-${group.days[0]}`} key={group.id}>
      <div className="food-group-heading"><Utensils size={20}/><div><h3>{group.title}</h3><p>{group.description}</p></div></div>
      <div className="food-grid">{foodSpots.filter(spot => spot.id === group.id).map(spot => <article className="food-card" key={spot.name}>
        <div className="food-card-copy">
        <div className="food-card-header"><span className="food-area">{spot.area}</span><span className="food-price">约 ¥{spot.price}<small> / 人</small></span></div>
        <h4>{spot.name}</h4><div className="food-meal"><span>{spot.meal}</span><span>截图评分 <strong>{spot.rating}</strong></span></div>
        <div className="food-dishes">{spot.dishes.map(dish => <span key={dish}>{dish}</span>)}</div>
        <p className="food-note">{spot.note}</p>
        <div className="food-address"><MapPin size={15}/><span>{spot.address}</span></div><p className="food-hours">截图营业时间：{spot.hours}</p>
        </div>
        <div className="food-photos">{spot.photos.map((photo, index) => <button key={photo.file} onClick={() => setGallery({ spot, index })} aria-label={`放大查看${spot.name}的${photo.label}`}><img src={`/images/food/${photo.file}`} alt={`${spot.name} · ${photo.label}`} loading="lazy"/><span>{photo.label} <span aria-hidden="true">↗</span></span></button>)}</div>
      </article>)}</div>
    </div>)}
    {gallery && <dialog className="food-gallery" ref={dialog} onClose={() => setGallery(null)} onClick={event => { if (event.target === event.currentTarget) closeGallery(); }} aria-label={`${gallery.spot.name}图片查看器`}>
      <div className="gallery-header"><div><strong>{gallery.spot.name}</strong><span>{gallery.spot.photos[gallery.index].label} · {gallery.index + 1} / {gallery.spot.photos.length}</span></div><button onClick={closeGallery} aria-label="关闭图片"><X size={22}/></button></div>
      <img className="gallery-image" src={`/images/food/${gallery.spot.photos[gallery.index].file}`} alt={`${gallery.spot.name} · ${gallery.spot.photos[gallery.index].label}`}/>
      {gallery.spot.photos.length > 1 && <div className="gallery-nav"><button disabled={gallery.index === 0} onClick={() => setGallery({ ...gallery, index: gallery.index - 1 })}><ChevronLeft size={18}/> 上一张</button><button disabled={gallery.index === gallery.spot.photos.length - 1} onClick={() => setGallery({ ...gallery, index: gallery.index + 1 })}>下一张 <ChevronRight size={18}/></button></div>}
    </dialog>}
  </section>;
}
