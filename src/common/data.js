// Centralized mock data for all 5 modules. No backend.

export const hikingRoutes = [
  {
    id: 'h1',
    title: '黄山西海大峡谷',
    cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=70',
    distance: '12.8km',
    duration: '6小时',
    difficulty: '中级',
    elevation: '1280m',
    rating: 4.8,
    location: '安徽 · 黄山',
    desc: '云海翻涌、奇松怪石的经典路线，沿途风光极富层次感，适合体力中等以上的徒步爱好者。',
    highlights: ['西海大峡谷一环', '步仙桥', '排云亭日落', '飞来石'],
    tips: ['建议穿登山鞋', '准备 2L 饮用水', '注意防晒和保暖', '雨雪天气请勿前往']
  },
  {
    id: 'h2',
    title: '武功山高山草甸',
    cover: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=70',
    distance: '20km',
    duration: '2天',
    difficulty: '高级',
    elevation: '1918m',
    rating: 4.9,
    location: '江西 · 萍乡',
    desc: '十万亩高山草甸，落日银河帐篷营地，户外圣地之一。',
    highlights: ['金顶日出', '帐篷营地', '银河星空', '云中草原'],
    tips: ['露营需提前预约营位', '山顶风大注意保暖', '垃圾请打包带下山']
  },
  {
    id: 'h3',
    title: '雨崩村神瀑环线',
    cover: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=70',
    distance: '36km',
    duration: '3天',
    difficulty: '高级',
    elevation: '3700m',
    rating: 4.9,
    location: '云南 · 德钦',
    desc: '梅里雪山脚下的世外桃源，神瀑、冰湖、神湖三条线路串联。',
    highlights: ['雨崩神瀑', '冰湖', '神湖', '梅里日照金山'],
    tips: ['注意高反', '提前一周到达高原适应', '请尊重当地宗教文化']
  },
  {
    id: 'h4',
    title: '香港麦理浩径二段',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70',
    distance: '13.5km',
    duration: '5小时',
    difficulty: '中级',
    elevation: '314m',
    rating: 4.7,
    location: '香港 · 西贡',
    desc: '亚洲十大徒步路线之一，沿海岸线穿越浪茄湾、西湾、大浪湾。',
    highlights: ['西湾沙滩', '浪茄湾', '蚺蛇尖远眺'],
    tips: ['出发前补充足够水', '注意涨潮时间', '建议早班车出发']
  },
  {
    id: 'h5',
    title: '莫干山竹海',
    cover: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=70',
    distance: '8km',
    duration: '4小时',
    difficulty: '初级',
    elevation: '719m',
    rating: 4.6,
    location: '浙江 · 德清',
    desc: '万亩竹海间的轻徒步线路，适合家庭和初学者。',
    highlights: ['剑池飞瀑', '芦花荡', '荫山街'],
    tips: ['路线平缓，老少皆宜', '雨季注意路滑']
  }
]

export const tickets = [
  {
    id: 't1',
    title: '黄山风景区',
    cover: 'https://images.unsplash.com/photo-1545569310-ab0fb6efeec7?w=600&q=70',
    price: 190,
    originalPrice: 230,
    level: '5A',
    rating: 4.8,
    sold: 12834,
    location: '安徽 · 黄山市',
    tags: ['免预约', '随时退', '极速出票'],
    desc: '黄山以奇松、怪石、云海、温泉、冬雪闻名于世，被誉为「天下第一奇山」。',
    openTime: '06:00 - 17:30',
    notice: ['门票当日有效', '身高1.2米以下儿童免票', '60岁以上老人凭证件半价']
  },
  {
    id: 't2',
    title: '九寨沟风景区',
    cover: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=70',
    price: 169,
    originalPrice: 220,
    level: '5A',
    rating: 4.9,
    sold: 9821,
    location: '四川 · 阿坝',
    tags: ['含观光车', '电子票'],
    desc: '人间瑶池，五彩斑斓的海子和瀑布令人流连忘返。',
    openTime: '07:30 - 17:00',
    notice: ['需实名预约', '高原地区注意保暖', '禁止携带宠物']
  },
  {
    id: 't3',
    title: '故宫博物院',
    cover: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=70',
    price: 60,
    originalPrice: 60,
    level: '5A',
    rating: 4.9,
    sold: 28192,
    location: '北京 · 东城区',
    tags: ['热门', '需预约'],
    desc: '世界五大宫之首，明清两代的皇家宫殿，世界文化遗产。',
    openTime: '08:30 - 17:00',
    notice: ['周一闭馆（法定节假日除外）', '需提前7天预约', '禁止携带打火机']
  },
  {
    id: 't4',
    title: '丽江古城 + 玉龙雪山',
    cover: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=70',
    price: 248,
    originalPrice: 320,
    level: '5A',
    rating: 4.7,
    sold: 6712,
    location: '云南 · 丽江',
    tags: ['一票通玩', '含索道'],
    desc: '雪山与古城联票，体验纳西风情和高原奇观。',
    openTime: '08:00 - 18:00',
    notice: ['玉龙雪山请准备氧气瓶', '古城维护费已含']
  },
  {
    id: 't5',
    title: '上海迪士尼乐园',
    cover: 'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?w=600&q=70',
    price: 475,
    originalPrice: 599,
    level: '主题乐园',
    rating: 4.8,
    sold: 35201,
    location: '上海 · 浦东',
    tags: ['一日通行', '快速通行可选'],
    desc: '中国大陆首座迪士尼主题乐园，6大主题园区奇妙体验。',
    openTime: '08:30 - 20:30',
    notice: ['身高1m以下儿童免票', '禁止携带食物入园']
  }
]

export const hotels = [
  {
    id: 'o1',
    title: '黄山悦榕庄',
    cover: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=70',
    price: 2680,
    rating: 4.9,
    type: '度假酒店',
    location: '黄山风景区南门',
    tags: ['含早餐', '免费泊车', '游泳池', '行李寄存'],
    desc: '隐藏于黄山脚下的山林之间，私汤别墅+米其林餐厅，奢享东方静谧。',
    facilities: ['免费 WiFi', '室内泳池', 'SPA', '健身房', '24h前台']
  },
  {
    id: 'o2',
    title: '莫干山溪谷民宿',
    cover: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=70',
    price: 880,
    rating: 4.8,
    type: '精品民宿',
    location: '莫干山镇',
    tags: ['含早餐', '宠物友好', '观景露台'],
    desc: '溪边独栋民宿，落地窗即是竹海，适合度假与团建。',
    facilities: ['免费 WiFi', '篝火晚会', '自助厨房', '亲子设施']
  },
  {
    id: 'o3',
    title: '大理洱海星空帐篷酒店',
    cover: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=70',
    price: 1280,
    rating: 4.7,
    type: '特色酒店',
    location: '大理 · 双廊',
    tags: ['观海', '日出', '透明天窗'],
    desc: '面朝洱海，夜观星空，是网红打卡的浪漫住宿。',
    facilities: ['免费 WiFi', '观海泳池', '电瓶车出租']
  },
  {
    id: 'o4',
    title: '九寨沟智选假日酒店',
    cover: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=70',
    price: 568,
    rating: 4.6,
    type: '商务酒店',
    location: '九寨沟沟口',
    tags: ['免费班车', '24小时热水', '含早'],
    desc: '景区门口便利之选，洁净卫生，性价比高。',
    facilities: ['免费 WiFi', '商务中心', '行李寄存']
  },
  {
    id: 'o5',
    title: '香港半岛酒店',
    cover: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=70',
    price: 4980,
    rating: 4.9,
    type: '奢华酒店',
    location: '香港 · 尖沙咀',
    tags: ['维多利亚港景', '米其林餐厅', '管家服务'],
    desc: '殖民地时代经典建筑，下午茶闻名全球。',
    facilities: ['室内泳池', 'SPA', '健身房', '会议室']
  }
]

export const cultural = [
  {
    id: 'c1',
    title: '故宫文创 · 千里江山图丝巾',
    cover: 'https://images.unsplash.com/photo-1610018556010-6a11691bc905?w=600&q=70',
    price: 268,
    originalPrice: 320,
    sold: 5234,
    rating: 4.9,
    tags: ['博物馆联名', '真丝'],
    desc: '取材于宋代王希孟《千里江山图》，100% 桑蚕丝制作。',
    spec: ['90cm × 90cm', '真丝双绉', '附礼盒包装']
  },
  {
    id: 'c2',
    title: '苏州博物馆 · 唐寅折扇',
    cover: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&q=70',
    price: 158,
    originalPrice: 198,
    sold: 2718,
    rating: 4.8,
    tags: ['手工竹艺', '可定制'],
    desc: '苏州工匠精制竹骨折扇，再现唐寅山水。',
    spec: ['长 33cm', '湘妃竹骨', '宣纸扇面']
  },
  {
    id: 'c3',
    title: '三星堆青铜面具盲盒',
    cover: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=70',
    price: 79,
    originalPrice: 99,
    sold: 18230,
    rating: 4.7,
    tags: ['潮玩', '盲盒'],
    desc: '6 款常规 + 1 款隐藏，再现古蜀文明神秘面具。',
    spec: ['8cm 高', '树脂材质', '盲盒包装']
  },
  {
    id: 'c4',
    title: '敦煌飞天 · 帆布包',
    cover: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=70',
    price: 89,
    originalPrice: 128,
    sold: 6310,
    rating: 4.6,
    tags: ['国潮', '帆布'],
    desc: '敦煌研究院联名，飞天图案印染于优质帆布。',
    spec: ['40cm × 35cm', '12 安帆布']
  },
  {
    id: 'c5',
    title: '颐和园 · 凤栖梧香薰礼盒',
    cover: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=600&q=70',
    price: 348,
    originalPrice: 428,
    sold: 1432,
    rating: 4.8,
    tags: ['香薰', '礼盒'],
    desc: '取颐和园四季花木为灵感，三款香型呈现皇家园林。',
    spec: ['200ml × 3', '黄铜烛灯', '礼袋包装']
  }
]

export const guides = [
  {
    id: 'g1',
    title: '黄山三日深度游 | 看尽云海日出',
    cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=70',
    author: '徒步的小鹿',
    avatar: 'https://i.pravatar.cc/100?img=12',
    views: 28301,
    likes: 1832,
    tags: ['深度游', '摄影'],
    summary: '三天两夜玩转黄山，含详细交通、住宿、行程安排。',
    content: [
      'Day1：合肥南站 → 黄山北站，入住汤口镇民宿，傍晚游览翡翠谷。',
      'Day2：早起索道上山，光明顶看日出，途径飞来石、西海大峡谷。',
      'Day3：莲花峰、迎客松，下午下山回程。',
      '装备建议：登山杖、防滑鞋、保暖衣、雨衣。',
      '美食推荐：徽州毛豆腐、臭鳜鱼、毛峰茶。'
    ]
  },
  {
    id: 'g2',
    title: '云南大理 8 天慢生活路线',
    cover: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=70',
    author: '风在洱海边',
    avatar: 'https://i.pravatar.cc/100?img=23',
    views: 18923,
    likes: 1421,
    tags: ['慢生活', '亲子'],
    summary: '不赶路、不打卡，8 天慢慢沉浸在大理的风花雪月。',
    content: [
      '建议路线：昆明 → 大理古城 → 双廊 → 喜洲 → 沙溪 → 丽江。',
      '住宿：洱海边海景房、沙溪古镇白族院子。',
      '美食：喜洲粑粑、酸辣鱼、乳扇。',
      '交通：建议租电瓶车环洱海，更自由。'
    ]
  },
  {
    id: 'g3',
    title: '北京 5 日宝藏路线，第一次来必看',
    cover: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=70',
    author: '故宫小猫',
    avatar: 'https://i.pravatar.cc/100?img=33',
    views: 35012,
    likes: 2932,
    tags: ['首刷', '人文'],
    summary: '故宫、长城、颐和园、胡同，5 天 4 晚体验皇城底蕴。',
    content: [
      'Day1：故宫 + 景山公园看日落。',
      'Day2：八达岭长城（建议早 8 点出发）。',
      'Day3：颐和园 + 圆明园。',
      'Day4：胡同游 + 南锣鼓巷。',
      'Day5：天坛 + 王府井购物。'
    ]
  },
  {
    id: 'g4',
    title: '香港 City Walk · 一日两面',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70',
    author: '维港夜未眠',
    avatar: 'https://i.pravatar.cc/100?img=45',
    views: 12012,
    likes: 932,
    tags: ['City Walk', '美食'],
    summary: '一天走完中环、太平山顶、尖沙咀夜景。',
    content: [
      '早：中环街市 → 半山扶梯 → PMQ。',
      '午：兰桂坊午餐。',
      '下午：山顶缆车 → 凌霄阁看维港。',
      '夜：尖沙咀星光大道看烟花。'
    ]
  },
  {
    id: 'g5',
    title: '上海周末微度假 · 古镇民宿推荐',
    cover: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=70',
    author: '魔都周末',
    avatar: 'https://i.pravatar.cc/100?img=56',
    views: 8732,
    likes: 612,
    tags: ['周末', '亲子'],
    summary: '朱家角、枫泾、七宝古镇 + 莫干山民宿，2 天 1 晚。',
    content: [
      '路线一：朱家角古镇 → 枫泾老街。',
      '路线二：莫干山民宿 + 裸心谷。',
      '路线三：迪士尼 + 浦东陆家嘴夜景。'
    ]
  }
]

export function findById (list, id) {
  return list.find(item => item.id === id) || null
}
