import type { AtlasData, Activity, DayNo, Place, Status } from './types';
export const uid = () => crypto.randomUUID();
const activity = (id: string, day: DayNo, title: string, order: number, notes = '', variant?: 'A' | 'B' | 'both', placeId?: string, status: Status = 'pending'): Activity => ({ id, day, title, order, notes, variant, placeId, status, start: '', end: '', duration: '', transport: '', budget: 0, done: false });
const place = (id: string, name: string, city: string, category: Place['category'], description: string, source = ''): Place => ({ id, name, city, category, description, address: '', lng: null, lat: null, source: { status: 'pending', source, updatedAt: '' } });
export const seed: AtlasData = {
  trip: { id: 'guizhou-five-days', title: '贵州五日旅行', startDate: '', budget: 0, notes: '旅行日期未设置；车次、酒店、开放时间与费用以实际查询为准。' },
  days: [
    { id: 'day-1', day: 1, title: '夜抵贵阳', city: '贵阳', mode: '夜间抵达' },
    { id: 'day-2', day: 2, title: '前往兴义 · 万峰林', city: '贵阳 → 兴义', mode: '跨城市交通' },
    { id: 'day-3', day: 3, title: '兴义市区慢游', city: '兴义', mode: '城市探索' },
    { id: 'day-4', day: 4, title: '市区休闲或峡谷', city: '兴义', mode: '双方案', variant: 'A' },
    { id: 'day-5', day: 5, title: '返回贵阳 · 观山湖', city: '兴义 → 贵阳', mode: '跨城市交通' }
  ],
  places: [
    place('p-guiyang', '贵阳市', '贵阳', '其他', '本次旅行抵达与返程城市；具体高铁站待确认。'),
    place('p-xingyi', '兴义市区', '兴义', '其他', 'Day 3 与 Day 4 的城市探索范围，具体地点由你添加。'),
    place('p-wanfenglin', '万峰林', '兴义', '景点', '峰林田园景观。具体入口、开放时间、门票及交通需出发前核实。', 'https://www.guizhou.gov.cn/'),
    place('p-malinghe', '马岭河峡谷', '兴义', '景点', 'Day 4 可选项目。是否前往、开放情况、门票和路线待确认。', 'https://www.guizhou.gov.cn/'),
    place('p-guanshanhu', '观山湖区', '贵阳', '其他', 'Day 5 在贵阳的主要活动区域，具体地点待选择。')
  ],
  activities: [
    activity('a-1-1', 1, '乘高铁抵达贵阳', 1, '晚间抵达；具体高铁站、车次与抵达时间待确认。'),
    activity('a-1-2', 1, '前往高铁站附近住宿并办理入住', 2, '待确认高铁站后再选择住宿。'),
    activity('a-1-3', 1, '附近晚餐与休息', 3, '按实际抵达时间安排，不额外安排景点。'),
    activity('a-2-1', 2, '从贵阳前往兴义', 1, '交通方式、班次、出发时间和耗时待查询。'),
    activity('a-2-2', 2, '前往万峰林附近住宿', 2, '跨城抵达后到住宿地点的接驳路线待查询。'),
    activity('a-2-3', 2, '视抵达时间游览万峰林周边', 3, '仅在时间合适时安排；景点信息待确认。', undefined, 'p-wanfenglin'),
    activity('a-3-1', 3, '兴义市区自由探索', 1, '在市区散步，按兴趣选择景点、特色美食和休闲活动。', undefined, 'p-xingyi'),
    activity('a-3-2', 3, '尝试兴义特色美食', 2, '餐厅与就餐时间由你选择。'),
    activity('a-4-a1', 4, '兴义市区休闲路线', 1, '方案 A：自由安排城市漫游、美食与休息。', 'A', 'p-xingyi'),
    activity('a-4-b1', 4, '兴义市区活动', 1, '方案 B：预留峡谷行程前后的市区时间。', 'B', 'p-xingyi'),
    activity('a-4-b2', 4, '马岭河峡谷（可选）', 2, '出发前核实开放、门票、交通与天气。', 'B', 'p-malinghe'),
    activity('a-5-1', 5, '从兴义返回贵阳', 1, '交通方式、班次、时间和耗时待确认。'),
    activity('a-5-2', 5, '观山湖区休闲、用餐或购物', 2, '按实际返抵时间自由调整。', undefined, 'p-guanshanhu')
  ],
  accommodations: [
    { id: 'h-1', day: 1, name: '高铁站附近住宿（待选）', address: '', checkIn: '', checkOut: '', booking: '待预订', notes: '高铁站尚未确认，不能默认贵阳北站。', status: 'pending' },
    { id: 'h-2', day: 2, name: '万峰林附近酒店或民宿（待选）', address: '', checkIn: '', checkOut: '', booking: '待预订', notes: '从跨城到达点到住宿的接驳路线待查询。', status: 'pending' },
    { id: 'h-3', day: 3, name: '兴义住宿（待选）', address: '', checkIn: '', checkOut: '', booking: '待预订', notes: '', status: 'pending' },
    { id: 'h-5', day: 5, name: '贵阳住宿（待确认）', address: '', checkIn: '', checkOut: '', booking: '待确认', notes: '是否留宿、最终离开贵阳的交通待确认。', status: 'pending' }
  ],
  transportations: [
    { id: 't-1', day: 1, mode: '高铁', from: '', to: '贵阳（车站待确认）', number: '', depart: '', arrive: '', cost: 0, booking: '待确认', notes: '晚间到达；不要默认贵阳北站。', status: 'pending' },
    { id: 't-2', day: 2, mode: '待确认', from: '贵阳', to: '兴义', number: '', depart: '', arrive: '', cost: 0, booking: '待确认', notes: '跨城市交通及到万峰林住宿的接驳均待查询。', status: 'pending' },
    { id: 't-5', day: 5, mode: '待确认', from: '兴义', to: '贵阳', number: '', depart: '', arrive: '', cost: 0, booking: '待确认', notes: '返抵后在观山湖区活动；后续离开贵阳的交通待确认。', status: 'pending' }
  ],
  restaurants: [],
  dishes: [
    { id: 'dish-1', name: '酸汤鱼', city: '贵州', description: '酸味鲜明，可先询问酸度和辣度，再按口味调整。', spicy: 2, sour: 4, source: { status: 'pending' } },
    { id: 'dish-2', name: '丝娃娃', city: '贵阳', description: '蔬菜卷食，蘸水口味可单独确认。', spicy: 1, sour: 2, source: { status: 'pending' } },
    { id: 'dish-3', name: '兴义羊肉粉', city: '兴义', description: '出发前再核实具体店铺与营业时间。', spicy: 2, sour: 0, source: { status: 'pending' } }
  ],
  expenses: [],
  packing: [
    { id: 'bag-1', category: '证件', name: '身份证', packed: false },
    { id: 'bag-2', category: '衣物', name: '换洗衣物', packed: false },
    { id: 'bag-3', category: '电子产品', name: '手机充电器', packed: false },
    { id: 'bag-4', category: '洗漱用品', name: '个人洗漱用品', packed: false }
  ],
  notes: []
};
