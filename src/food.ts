import type { DayNo } from './types';

export type FoodPhoto = { file: string; label: string };
export type FoodSpot = {
  id: string; name: string; area: string; days: DayNo[]; meal: string;
  rating: string; price: number; hours: string; address: string;
  dishes: string[]; note: string; photos: FoodPhoto[];
};
export const foodGroups = [
  { id: 'arrival', title: 'Day 1 · 贵阳抵达晚餐', description: '先办理入住，再按抵达时间安排这一餐。', days: [1] as DayNo[] },
  { id: 'wanfenglin', title: 'Day 2 · 万峰林附近', description: '抵达兴义、住下后，在万峰林附近吃一顿。', days: [2] as DayNo[] },
  { id: 'xingyi', title: 'Day 3–4 · 兴义美食备选', description: '早餐、正餐各有选择，按当天路线挑一家即可。', days: [3, 4] as DayNo[] },
  { id: 'guanshanhu', title: 'Day 5 · 贵阳观山湖', description: '返回贵阳后，留给观山湖附近的一碗牛肉粉。', days: [5] as DayNo[] },
];
export const foodSpots: FoodSpot[] = [
  { id: 'arrival', name: '楼脚酸汤牛肉（恒大中央广场店）', area: '贵阳 · 合肥路', days: [1], meal: '抵达后的晚餐', rating: '4.8', price: 50, hours: '10:30–22:00', address: '贵阳观山湖区世纪城街道合肥路恒大中央广场 A2 栋105号', dishes: ['酸汤牛肉'], note: '抵达贵阳后的一顿酸汤牛肉。店址在观山湖区合肥路，从实际到达的高铁站安排接驳。', photos: [{ file: '658d30b3d71bef03bacc318b15e01bfe.jpg', label: '店铺信息' }] },
  { id: 'wanfenglin', name: '韦记布依特色酸笋鱼（万峰林店）', area: '兴义 · 万峰林', days: [2], meal: '万峰林附近正餐', rating: '4.8', price: 41, hours: '09:30–22:30', address: '兴义市万峰林街道纳禄村七组10号，乡愁集市路口', dishes: ['特色酸笋鱼', '酸笋牛肉'], note: '入住万峰林附近后可选的一餐，想吃酸笋锅可以选这家。', photos: [{ file: '0826d37f6d5e4c58771c593698f43186.jpg', label: '店铺信息' }, { file: '2e62b7a2b36ac6f87bd2608a08acc027.jpg', label: '菜品实拍与评价' }] },
  { id: 'xingyi', name: '贵丰牛魔王靓汤坊（金水路三街店）', area: '兴义 · 桔丰路', days: [3, 4], meal: '牛肉正餐', rating: '4.1', price: 51, hours: '10:00–21:00', address: '兴义市桔丰路中段', dishes: ['干锅牛肉', '牛肉汤锅'], note: '市区活动期间的正餐备选，想吃铜锅牛肉可以选这家。', photos: [{ file: 'dc0d38a05b255babd117bff11b82e95e.jpg', label: '店铺信息' }, { file: '78e5571a57e7ada948b0c8a8873a3f63.jpg', label: '菜品实拍 1' }, { file: 'f072d4b6fab7076bbbff5efcd3eb9064.jpg', label: '菜品实拍 2' }] },
  { id: 'xingyi', name: '江氏糯香园·贞丰糯米饭（碧云路店）', area: '兴义 · 碧云路', days: [3, 4], meal: '早餐或轻便一餐', rating: '4.0', price: 14, hours: '07:00–20:00', address: '兴义市碧云路公园首府 A6-3-1-10号', dishes: ['糯米饭', '三合汤', '辣鸡粉'], note: '可作市区慢游前的早餐，也可以尝试三合汤或辣鸡粉。', photos: [{ file: 'db93ecd8918e2af0ce67feae28cfacd1.jpg', label: '店铺信息' }, { file: '3380f69ea010f1d9ddaa1d2a65398f12.jpg', label: '菜品、店面与评价' }] },
  { id: 'xingyi', name: '古镇排骨', area: '兴义 · 福昆线', days: [3, 4], meal: '排骨火锅备选', rating: '4.9', price: 53, hours: '09:00–21:00', address: '兴义市福昆线金果果幼儿园东侧约100米', dishes: ['腊排骨火锅', '猪脚'], note: '按当天路线安排一顿排骨火锅，店址在福昆线附近。', photos: [{ file: 'e43ea3527d2710cbf88eedc3192a3b4d.jpg', label: '店铺信息' }, { file: 'eb87fb811aa08cfb125cb4b13ff17dc3.jpg', label: '排骨锅实拍与评价' }] },
  { id: 'guanshanhu', name: '冉林禾土黄牛肉粉（会展城店）', area: '贵阳 · 观山湖会展城', days: [5], meal: '返抵贵阳后的简餐', rating: '4.7', price: 20, hours: '06:00–23:30', address: '贵阳观山湖区长岭北路中天会展城 A5组团-1栋负1层6号', dishes: ['原汤牛肉粉', '原汤吊龙粉', '现烫鲜牛肉粉'], note: '对应返抵贵阳后的观山湖行程，可选原汤或现烫牛肉粉。', photos: [{ file: 'b54b59c3b8eb63d493556406c47c4962.jpg', label: '店铺信息' }, { file: 'c044e25e54c3e14c2421fa0a325b0e39.jpg', label: '牛肉粉实拍与评价' }] },
];
