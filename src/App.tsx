import { useMemo, useState } from 'react';
import { ArrowRight, Check, ChevronLeft, ChevronRight, MapPin, TrainFront } from 'lucide-react';
import { seed } from './data';
import FoodSection from './FoodSection';
import type { Activity, DayNo } from './types';

type View = 'all' | DayNo;
const days: DayNo[] = [1, 2, 3, 4, 5];
const labels = ['夜抵贵阳', '前往兴义', '兴义市区', '两种走法', '返回贵阳'];
const summaries = [
  '晚上到达，办理入住，吃点东西后好好休息。',
  '从贵阳前往兴义，住到万峰林附近。抵达得早，再去周边看看。',
  '留给兴义市区的一天：散步、吃饭、自由探索。',
  '想轻松一点就走市区线；想看峡谷再切换到备选线。',
  '返回贵阳，主要在观山湖区活动，后续交通待确认。'
];
const tips = [
  '到达的具体高铁站还没有确定。先不要按“贵阳北站”规划接驳。',
  '贵阳到兴义的交通和抵达后到万峰林住宿的接驳，都要按实际班次再确认。',
  '市区地点和餐厅可以临时决定，不必把整天排满。',
  '马岭河峡谷只是备选，出发前请核实开放情况和天气。',
  '贵阳住宿、最终离开贵阳的交通都还没有确定。'
];
const timelineOrder = (a: Activity, b: Activity) => a.order - b.order;

export default function App() {
  const data = seed;
  const [view, setView] = useState<View>('all');
  const [variant, setVariant] = useState<'A' | 'B'>('A');


  const itinerary = useMemo(() => {
    return days.map(day => ({ day, activities: data.activities.filter(a => a.day === day && (day !== 4 || !a.variant || a.variant === 'both' || a.variant === variant)).sort(timelineOrder) }));
  }, [variant]);
  const shownDays = view === 'all' ? itinerary : itinerary.filter(item => item.day === view);
  const findPlace = (activity: Activity) => data.places.find(p => p.id === activity.placeId);
  const jump = (n: DayNo) => { setView(n); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return <div className="viewer">
    <header className="site-header">
      <button className="logo" onClick={() => setView('all')} aria-label="查看全部行程"><span className="logo-mark">✦</span><span><strong>旅途地图</strong><small>TRAVEL ATLAS</small></span></button>
      <div className="header-actions"><span>贵州五日 · 贵阳 / 兴义</span><a href="#food">查看美食 ↓</a></div>
    </header>

    <main>
      <section className="intro">
        <div className="intro-copy"><span className="overline">五天 · 两座城市 · 慢慢走</span><h1>贵州五日行程</h1><p>从贵阳的夜晚出发，去兴义看峰林，也把时间留给城市里的闲逛和好吃的。</p><button className="primary-button" onClick={() => jump(1)}>从第一天开始看 <ArrowRight size={17}/></button></div>
        <div className="intro-image" role="img" aria-label="兴义万峰林上纳灰村实景照片"><div className="photo-pending"><span>兴义 · 万峰林</span><small>上纳灰村实景</small></div></div>
      </section>

      <section className="route-section" aria-label="行程路线图"><div className="section-heading"><div><span className="overline">行程一眼看懂</span><h2>路线概览</h2></div><span className="section-side-note">贵阳 → 兴义 → 贵阳</span></div><div className="route-card"><img src={`${import.meta.env.BASE_URL}images/guizhou-map.png`} alt="OpenStreetMap 静态地图，标出贵阳和兴义的位置及两城间的示意连线"/><div className="route-copy"><strong>先到贵阳，再去兴义</strong><p>Day 1 到贵阳，Day 2 前往兴义；Day 3、4 留在兴义，Day 5 返回贵阳。虚线只表示两城顺序，具体交通路线待确认。</p><div className="route-tags"><span><TrainFront size={14}/> 车站待确认</span><span><MapPin size={14}/> 接驳待确认</span></div></div></div></section>

      <section className="schedule-section"><div className="section-heading"><div><span className="overline">DAILY JOURNEY</span><h2>每天怎么走</h2></div><span className="section-side-note">点选一天，查看当天安排</span></div>
        <div className="day-picker" role="tablist" aria-label="选择行程日期"><button role="tab" aria-selected={view === 'all'} className={view === 'all' ? 'active' : ''} onClick={() => setView('all')}><small>全部</small><strong>五天行程</strong></button>{days.map(n => <button role="tab" aria-selected={view === n} className={view === n ? 'active' : ''} key={n} onClick={() => jump(n)}><small>DAY {String(n).padStart(2, '0')}</small><strong>{labels[n - 1]}</strong></button>)}</div>
        {shownDays.map(({ day, activities }) => <article className="day-section" key={day}>
          <div className="day-banner"><div className="day-number">{String(day).padStart(2, '0')}</div><div><span className="overline">DAY {day} · {data.days[day - 1]?.city}</span><h3>{data.days[day - 1]?.title}</h3><p>{summaries[day - 1]}</p></div>{day === 4 && <div className="variant-switch" aria-label="第四天路线"><button className={variant === 'A' ? 'active' : ''} onClick={() => setVariant('A')}>A 市区休闲</button><button className={variant === 'B' ? 'active' : ''} onClick={() => setVariant('B')}>B 市区＋峡谷</button></div>}</div>
          <div className="day-content"><div className="schedule-list">{activities.map((activity, index) => { const place = findPlace(activity); return <div className="schedule-item" key={activity.id}><div className="schedule-index">{String(index + 1).padStart(2, '0')}</div><div className="schedule-body"><div className="schedule-top"><h4>{activity.title}</h4>{activity.done && <span className="done-label"><Check size={13}/> 已完成</span>}</div><p>{activity.notes || '按当天实际情况灵活安排。'}</p><div className="schedule-details"><span>{activity.start ? `开始 ${activity.start}` : '时间待确认'}</span>{place && <span>{place.name}</span>}{activity.transport && <span>{activity.transport}</span>}</div></div></div>; })}</div><aside className="day-tip"><span className="tip-icon">✦</span><strong>出行提醒</strong><p>{tips[day - 1]}</p><a href={`#food-day-${day === 4 ? 3 : day}`} className="day-food-link">查看当天美食 →</a></aside></div>
        </article>)}
        {view !== 'all' && <div className="day-bottom-nav"><button onClick={() => jump(Math.max(1, view - 1) as DayNo)} disabled={view === 1}><ChevronLeft size={17}/> 上一天</button><button onClick={() => setView('all')}>查看全部五天</button><button onClick={() => jump(Math.min(5, view + 1) as DayNo)} disabled={view === 5}>下一天 <ChevronRight size={17}/></button></div>}
      </section>
      <FoodSection day={view}/>
    </main>
    <footer><span>旅途地图 · 贵州五日</span><span>未确定的车站、班次和住宿以实际预订为准。</span><span>封面照片：<a href="https://commons.wikimedia.org/wiki/File:WanFengLin-ShangNaHui2025-08.jpg" target="_blank" rel="noreferrer">名字长的让人受不了 / Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a>　地图：<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap contributors</a></span></footer>
  </div>;
}
