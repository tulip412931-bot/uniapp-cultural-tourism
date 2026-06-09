// 一江津彩 · 文旅平台 mock 数据（按设计图 1:1 重写，纯前端无后端）

export const hikingRoutes = [
  {
    id: 'h1',
    title: '四面山精华徒步线',
    cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=70',
    distance: '12公里',
    duration: '5小时',
    difficulty: '中等',
    elevation: '560m',
    rating: 4.9,
    joined: '1.2万人参与过',
    location: '重庆市江津区四面山镇',
    price: 39,
    originalPrice: 69,
    tags: ['有补给点', '专业向导', '装备租赁', '保险赠送'],
    desc: '四面山精华徒步线是江津最受欢迎的徒步路线之一，全程12公里，穿越原始森林、瀑布群、高山湖泊等多个自然景观，是体验四面山自然风光的绝佳选择。',
    intro: [
      '四面山精华徒步线是江津最受欢迎的徒步路线之一，全程12公里，穿越原始森林、瀑布群、高山湖泊等多个自然景观，是体验四面山自然风光的绝佳选择。',
      '线路难度中等，适合有一定徒步经验的爱好者，全程有清晰的指示标识，沿途设有3个补给点，提供饮用水和简单食品。',
      '最佳徒步季节为春秋两季，夏季要注意防蚊防晒，冬季需注意保暖防滑。建议穿着防滑徒步鞋，携带登山杖和足够的饮用水。'
    ],
    schedule: [
      { time: '08:00', title: '起点集合', desc: '四面山景区门口集合，领队讲解注意事项，发放物资' },
      { time: '10:30', title: '望乡台瀑布', desc: '到达第一处景点，休息拍照，停留30分钟' },
      { time: '12:30', title: '土地岩补给点', desc: '午餐休息，可在补给点购买简餐，停留1小时' },
      { time: '15:00', title: '洪海湖', desc: '到达高山湖泊景区，可乘船游览，停留40分钟' },
      { time: '17:00', title: '终点散队', desc: '到达大洪湖出口，活动结束，可自行返程或乘坐景区交通车' }
    ],
    includes: ['专业领队服务费', '户外旅游意外险', '徒步装备使用（登山杖、护膝）', '饮用水和应急药品'],
    excludes: ['四面山景区门票（需自行购买）', '往返交通费用', '午餐及个人消费'],
    reviews: [
      {
        user: '张先生', avatar: 'https://i.pravatar.cc/100?img=12', rating: 5, date: '2023.10.15',
        content: '非常棒的徒步体验，领队很专业，路线规划得很好，沿途风景很美，补给点也很方便。下次还会再来！',
        images: [
          'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&q=70',
          'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=300&q=70',
          'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=300&q=70'
        ]
      },
      {
        user: '李女士', avatar: 'https://i.pravatar.cc/100?img=23', rating: 4, date: '2023.09.23',
        content: '景色超美，路线难度适中，很适合周末放松。向导很贴心，会提醒注意事项，还帮我们拍了很多照片。唯一不足的是周末人有点多，建议错峰出行。',
        images: []
      }
    ]
  },
  {
    id: 'h2',
    title: '中山古镇古道徒步',
    cover: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=70',
    distance: '6公里',
    duration: '3小时',
    difficulty: '难度适中',
    rating: 4.8,
    location: '中山古镇',
    price: 39,
    tags: ['难度适中', '古迹众多', '有补给点'],
    desc: '穿越江津中山古镇千年茶马古道，体验古镇风情与川黔交界的山水之美。',
    intro: [
      '中山古镇古道徒步路线穿越千年茶马古道，沿途古迹众多，可以欣赏到保存完好的明清古建筑。',
      '路线难度适中，沿途有多个补给点，适合家庭出游和初级徒步者。',
      '建议游玩时间3小时，全程6公里，有完善的指示标识系统。'
    ],
    schedule: [
      { time: '09:00', title: '古镇集合', desc: '中山古镇游客中心集合' },
      { time: '10:00', title: '茶马古道', desc: '徒步古道，参观古建筑' },
      { time: '12:00', title: '终点休息', desc: '古镇老街用餐休息' }
    ],
    includes: ['领队服务', '保险'],
    excludes: ['餐饮', '门票'],
    reviews: []
  },
  {
    id: 'h3',
    title: '塘河古镇环线徒步',
    cover: 'https://images.unsplash.com/photo-1545569310-ab0fb6efeec7?w=800&q=70',
    distance: '4公里',
    duration: '2小时',
    difficulty: '难度简单',
    rating: 4.7,
    location: '塘河镇',
    price: 29,
    tags: ['难度简单', '亲子友好', '水乡风光'],
    desc: '塘河古镇水乡风光环线徒步，平缓的步道适合全家出游。',
    intro: ['塘河古镇是江津著名的水乡古镇，环线徒步可饱览古镇与塘河两岸风光。'],
    schedule: [
      { time: '09:30', title: '塘河码头', desc: '集合出发' },
      { time: '11:30', title: '终点回程', desc: '古镇老街集合返程' }
    ],
    includes: ['领队服务'],
    excludes: ['餐饮'],
    reviews: []
  },
  {
    id: 'h4',
    title: '黑石山森林公园徒步',
    cover: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=70',
    distance: '8公里',
    duration: '4小时',
    difficulty: '难度稍难',
    rating: 4.9,
    location: '白沙镇',
    price: 49,
    tags: ['难度稍难', '森林氧吧', '奇石景观'],
    desc: '黑石山森林公园全程8公里，奇石与百年古树交相辉映。',
    intro: ['黑石山森林公园是江津白沙镇国家级森林公园，徒步线路全程8公里，需穿越多处奇石景观。'],
    schedule: [
      { time: '08:00', title: '入口集合', desc: '森林公园南门集合' },
      { time: '12:00', title: '终点散队', desc: '北门集合返程' }
    ],
    includes: ['领队服务', '装备租赁'],
    excludes: ['餐饮', '门票'],
    reviews: []
  }
]

export const tickets = [
  {
    id: 't1',
    title: '四面山景区',
    cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=70',
    price: 90,
    originalPrice: 110,
    studentPrice: 45,
    studentOriginal: 55,
    level: '5A景区',
    rating: 4.8,
    sold: 32000,
    reviews: 999,
    location: '重庆市江津区四面山镇',
    distance: '距市中心约120公里',
    openTime: '08:00-18:00（16:00停止入园）',
    tags: ['山水景观', '避暑胜地', '亲子游玩', '自驾游'],
    desc: '四面山景区是国家5A级旅游景区，位于重庆市江津区，距重庆主城区130公里，面积213平方公里，景区共有八大景区、128个景点，其中以望乡台瀑布、土地岩、洪海湖最为著名。',
    intro: [
      '四面山景区是国家5A级旅游景区，位于重庆市江津区，距重庆主城区130公里，面积213平方公里，景区共有八大景区、128个景点，其中以望乡台瀑布、土地岩、洪海湖最为著名。',
      '景区内海拔高度为560-1709.4米，年平均气温13.7℃，夏季平均气温22-25℃，是绝佳的避暑胜地。森林覆盖率达96%，负氧离子含量每立方厘米最高可达2.9万个，有"天然氧吧"的美誉。',
      '四面山景区先后获得了"国家级风景名胜区"、"国家生态旅游示范区"、"中国森林氧吧"、"中国最美十大森林公园"等荣誉称号。'
    ],
    ticketInfo: [
      { type: '成人票', price: 90, originalPrice: 110, tips: '随买随用 | 无需换票 | 支持退款' },
      { type: '学生票', price: 45, originalPrice: 55, tips: '需携带学生证 | 随买随用 | 支持退款' },
      { type: '老人/儿童票', price: 0, free: true, tips: '65岁以上/1.2米以下 | 需携带有效证件' }
    ],
    strategy: [
      { icon: '⏱', title: '建议游玩时长', desc: '建议游玩1-2天，景区较大，建议合理规划路线' },
      { icon: '🚗', title: '交通方式', desc: '建议自驾，景区内有多个停车场，也可在江津城区乘坐直达旅游大巴' },
      { icon: '🗺', title: '推荐路线', desc: '望乡台瀑布 → 土地岩 → 洪海湖 → 珍珠湖 → 大窝铺原始森林' },
      { icon: '💡', title: '小贴士', desc: '景区内温差较大，建议携带外套；夏季蚊虫较多，做好防蚊措施；部分景点需步行较远，穿着舒适的运动鞋' }
    ],
    reviews: [
      {
        user: '王女士', avatar: 'https://i.pravatar.cc/100?img=44', rating: 5, date: '2023.08.12',
        content: '夏天来四面山真的太舒服了，平均气温只有23度，完全不用开空调。望乡台瀑布特别壮观，空气也特别好，是避暑的好地方。景区服务也很好，工作人员都很热情。',
        images: [
          'https://images.unsplash.com/photo-1545569310-ab0fb6efeec7?w=300&q=70',
          'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=300&q=70',
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&q=70'
        ]
      },
      {
        user: '刘先生', avatar: 'https://i.pravatar.cc/100?img=55', rating: 4, date: '2023.10.05',
        content: '国庆期间来的，人有点多，但是景色确实很棒，特别喜欢洪海湖，可以坐船游览，两岸的风景很美。景区很大，建议早点进去，多个景点之间距离有点远。整体来说很值得一去。',
        images: []
      }
    ]
  },
  {
    id: 't2',
    title: '中山古镇',
    cover: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=70',
    price: 30,
    originalPrice: 30,
    level: '4A景区',
    rating: 4.7,
    sold: 12000,
    reviews: 520,
    location: '江津区中山古镇',
    distance: '距市中心约90公里',
    openTime: '08:30-17:30',
    tags: ['4A景区', '历史古镇'],
    desc: '中山古镇是江津著名的历史文化古镇，保存有大量明清古建筑，是体验川黔交界传统文化的好去处。',
    intro: ['中山古镇是江津著名的历史文化古镇，保存有大量明清古建筑。'],
    ticketInfo: [
      { type: '成人票', price: 30, originalPrice: 30, tips: '随买随用 | 无需换票' },
      { type: '学生票', price: 15, tips: '需携带学生证' }
    ],
    strategy: [],
    extraTags: ['随买随用 | 无需换票'],
    reviews: []
  },
  {
    id: 't3',
    title: '塘河古镇',
    cover: 'https://images.unsplash.com/photo-1545569310-ab0fb6efeec7?w=800&q=70',
    price: 0,
    free: true,
    level: '3A景区',
    rating: 4.6,
    sold: 8000,
    reviews: 380,
    location: '江津区塘河镇',
    distance: '距市中心约75公里',
    openTime: '全天开放',
    tags: ['3A景区', '免费开放'],
    extraTags: ['免费入园 | 文化古镇'],
    desc: '塘河古镇水乡风情浓郁，免费开放，是周末休闲的好选择。',
    intro: ['塘河古镇水乡风情浓郁，免费开放。'],
    ticketInfo: [],
    strategy: [],
    reviews: []
  },
  {
    id: 't4',
    title: '黑石山风景区',
    cover: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=70',
    price: 20,
    level: '3A景区',
    rating: 4.8,
    sold: 6500,
    reviews: 290,
    location: '江津区白沙镇',
    distance: '距市中心约95公里',
    openTime: '08:00-17:30',
    tags: ['3A景区', '自然风光'],
    extraTags: ['提前1小时预订'],
    desc: '黑石山风景区奇石遍布，森林茂密，是江津白沙镇的代表性景区。',
    intro: ['黑石山风景区奇石遍布，森林茂密。'],
    ticketInfo: [
      { type: '成人票', price: 20, tips: '提前1小时预订' }
    ],
    strategy: [],
    reviews: []
  },
  {
    id: 't5',
    title: '聂荣臻元帅故居',
    cover: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=70',
    price: 0,
    free: true,
    level: '红色教育',
    rating: 4.9,
    sold: 5400,
    reviews: 320,
    location: '江津区吴滩镇',
    distance: '距市中心约45公里',
    openTime: '09:00-17:00',
    tags: ['红色教育', '免费开放'],
    extraTags: ['凭身份证入园'],
    desc: '聂荣臻元帅故居是国家级爱国主义教育基地，免费开放。',
    intro: ['聂荣臻元帅故居是国家级爱国主义教育基地。'],
    ticketInfo: [],
    strategy: [],
    reviews: []
  }
]

export const hotels = [
  {
    id: 'o1',
    title: '四面山大酒店',
    cover: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=70',
    price: 328,
    rating: 4.6,
    star: 4,
    type: '四星酒店',
    badge: '住客推荐',
    location: '景区核心区',
    distance: '距望乡台瀑布800m',
    tags: ['WiFi', '免费停车', '餐厅', '山景房'],
    desc: '四面山景区门口的四星级酒店，山景房视野绝佳，餐厅提供本地特色川菜。',
    facilities: ['免费WiFi', '早餐服务', '免费停车', '无边泳池', '温泉泡池', '书吧茶室', '娱乐设施', '管家服务']
  },
  {
    id: 'o2',
    title: '云栖山居 · 观景民宿',
    cover: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=70',
    price: 588,
    originalPrice: 788,
    rating: 4.9,
    type: '特色民宿',
    badge: '网红民宿',
    location: '洪海湖畔',
    distance: '距湖边200m',
    tags: ['观景阳台', '下午茶', '拍照圣地'],
    desc: '洪海湖畔的网红民宿，落地窗即是湖景，下午茶与拍照打卡的理想选择。',
    facilities: ['免费WiFi', '观景阳台', '下午茶服务']
  },
  {
    id: 'o3',
    title: '山里人家 · 田园农家乐',
    cover: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=70',
    price: 168,
    rating: 4.5,
    type: '农家乐',
    location: '四面山脚',
    distance: '距景区入口1.5km',
    tags: ['果蔬采摘', '农家菜', '篝火晚会'],
    desc: '地道的乡野农家乐，自种果蔬，原汁原味本地农家菜，夜晚篝火晚会其乐融融。',
    facilities: ['免费WiFi', '果蔬采摘', '篝火晚会']
  },
  {
    id: 'o4',
    title: '四面山温泉度假酒店',
    cover: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=70',
    price: 888,
    originalPrice: 1110,
    rating: 4.8,
    star: 5,
    type: '五星度假',
    badge: '限时8折',
    location: '景区南门',
    distance: '温泉度假区',
    tags: ['温泉', '游泳池', 'SPA', '自助餐'],
    desc: '五星级温泉度假酒店，含温泉、SPA、游泳池及自助餐，适合度假休闲。',
    facilities: ['免费WiFi', '温泉', '游泳池', 'SPA', '健身房']
  },
  {
    id: 'o5',
    title: '四面山森居民宿',
    cover: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=70',
    price: 588,
    originalPrice: 788,
    rating: 4.9,
    type: '精品民宿',
    badge: '金宿级',
    favorites: '2.8万人收藏',
    location: '江津区四面山镇洪海村23号',
    distance: '距景区入口2.3公里',
    tags: ['免费WiFi', '提供早餐', '免费停车', '无边泳池', '温泉泡池'],
    desc: '森居民宿位于四面山景区核心位置，依山而建，被原始森林环绕，是一家集住宿、餐饮、休闲、度假于一体的高端精品民宿。民宿共有12间客房，每间客房都有独立的观景阳台，可直面山林美景。',
    intro: [
      '森居民宿位于四面山景区核心位置，依山而建，被原始森林环绕，是一家集住宿、餐饮、休闲、度假于一体的高端精品民宿。',
      '民宿配套有无边泳池、温泉泡池、书吧、茶室、餐厅、儿童游乐区等设施，提供24小时管家服务，可安排接送机、景区导游、特色体验活动等定制服务。',
      '民宿餐厅提供四面山特色美食，餐厅可提前预订四面山笋鸡、泉水豆花、野生菌等当地特色菜品。入住客人可免费享受欢迎水果、下午茶、夜床服务等权益。'
    ],
    facilities: ['免费WiFi', '早餐服务', '免费停车', '无边泳池', '温泉泡池', '书吧茶室', '娱乐设施', '管家服务'],
    rooms: [
      {
        name: '山景大床房',
        size: '35㎡',
        bed: '1张1.8米大床',
        capacity: '2人入住',
        cover: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=70',
        price: 588,
        tags: ['观景阳台', '智能马桶'],
        breakfast: '含双早 免费取消'
      },
      {
        name: '湖景双床房',
        size: '40㎡',
        bed: '2张1.2米床',
        capacity: '2人入住',
        cover: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=70',
        price: 688,
        tags: ['湖景阳台', '迷你吧台'],
        breakfast: '含双早 免费取消'
      },
      {
        name: '豪华观景套房',
        size: '65㎡',
        bed: '1张2米大床',
        capacity: '4人入住',
        cover: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=70',
        price: 1288,
        tags: ['私人入口', '独立客厅'],
        breakfast: '含四早 免费接送'
      }
    ],
    ratings: { hygiene: 4.9, environment: 5.0, service: 4.9, facility: 4.8 },
    totalReviews: 998,
    reviews: [
      {
        user: '陈女士', avatar: 'https://i.pravatar.cc/100?img=18', rating: 5, date: '2023.09.30',
        content: '这是我住过的最棒的民宿之一！环境真的太美了，被森林包围，早上被鸟叫声叫醒，空气特别清新。房间设计很高级，阳台看出去的景色超级棒。管家服务特别贴心，免费下午茶+晚上甜品，早餐也很丰盛。强烈推荐！',
        images: [
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&q=70',
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&q=70',
          'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=300&q=70'
        ]
      }
    ]
  }
]

export const cultural = [
  {
    id: 'c1',
    title: '江津玫瑰牌米花糖礼盒装 传统手工糕点',
    shortTitle: '江津玫瑰牌米花糖礼盒装 传统手工糕点 重庆特产伴手礼',
    cover: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=70',
      'https://images.unsplash.com/photo-1610018556010-6a11691bc905?w=800&q=70',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=70',
      'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=70'
    ],
    price: 39.9,
    originalPrice: 59.9,
    discount: '6.7折',
    rating: 4.8,
    sold: '2.3万',
    reviews: 5680,
    tags: ['热销爆款', '包邮'],
    promo: '新用户首单立减5元',
    badge: '新品',
    category: '非遗手作',
    spec: '礼盒装 500g × 2盒',
    shipping: '快递 免运费 · 重庆发货',
    guarantee: ['正品保证', '极速退款'],
    desc: '江津玫瑰牌米花糖，源自重庆江津的传统名特产，始创于1910年，至今已有百年历史。精选优质糯米、白砂糖、麦芽糖、玫瑰花等原料，采用传统手工艺工艺精心制作而成，口感酥脆香甜，玫瑰花香浓郁，是重庆旅游必买的特色伴手礼。',
    detail: [
      '江津玫瑰牌米花糖，源自重庆江津的传统名特产，始创于1910年，至今已有百年历史。精选优质糯米、白砂糖、麦芽糖、玫瑰花等原料，采用传统手工艺工艺精心制作而成，口感酥脆香甜，玫瑰花香浓郁，是重庆旅游必买的特色伴手礼。',
      '每一块米花糖都经过浸泡、蒸煮、晾晒、炒制、成型等十多个工序，由经验丰富的师傅手工完成。礼盒装内含500g × 2盒，精美包装，还礼自用两相宜。'
    ],
    reviews_list: [
      {
        user: '旅行者小王', avatar: 'https://i.pravatar.cc/100?img=24', rating: 5, date: '2024-01-15',
        content: '重庆旅游时购买的伴手礼，包装精致，送朋友很有面子！米花糖口感酥脆，玫瑰味很香，不会太甜，家里人都很喜欢吃，物流也很快，两天就到了！',
        spec: '礼盒装 500g × 2盒', likes: 128,
        images: [
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&q=70',
          'https://images.unsplash.com/photo-1610018556010-6a11691bc905?w=200&q=70',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&q=70'
        ]
      },
      {
        user: '美食达人老张', avatar: 'https://i.pravatar.cc/100?img=35', rating: 5, date: '2024-01-10',
        content: '老字号品牌值得信赖！从小吃到大的味道，现在外地也能买到了，太开心了。玫瑰花的香味很自然，不像有些产品是香精调的。物流也很快。',
        spec: '简装 250g × 1盒', likes: 96, images: []
      }
    ]
  },
  {
    id: 'c2',
    title: '几江牌江津老白干 52度纯粮酿造 2瓶礼盒装',
    shortTitle: '几江牌江津老白干 52度纯粮酿造',
    cover: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=70',
    images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=70'],
    price: 128,
    originalPrice: 168,
    rating: 4.9,
    sold: '1.8万',
    tags: ['礼盒'],
    category: '特色食品',
    spec: '52度 500ml × 2瓶',
    desc: '几江牌江津老白干，传统纯粮酿造，52度浓香型白酒。',
    detail: ['几江牌江津老白干是江津传统名酒之一，采用纯粮酿造工艺。'],
    reviews_list: []
  },
  {
    id: 'c3',
    title: '非遗夏布手工笔记本 创意古风风记事本',
    shortTitle: '非遗夏布手工笔记本',
    cover: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=70',
    images: ['https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=70'],
    price: 68,
    originalPrice: 98,
    rating: 4.7,
    sold: 8600,
    tags: ['非遗手作'],
    category: '非遗手作',
    spec: 'A5 / 100页',
    desc: '采用江津非遗夏布工艺制作，封面手工夏布，内页道林纸。',
    detail: ['采用江津非遗夏布工艺制作。'],
    reviews_list: []
  },
  {
    id: 'c4',
    title: '四面山风景冰箱贴套装 旅游纪念品 3个装',
    shortTitle: '四面山风景冰箱贴套装',
    cover: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=70',
    images: ['https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=70'],
    price: 29.9,
    originalPrice: 49.9,
    rating: 4.9,
    sold: '3.2万',
    tags: ['创意文具'],
    category: '创意文具',
    spec: '3个装',
    desc: '四面山风景图案高清冰箱贴，3款一套，旅游纪念佳品。',
    detail: ['四面山风景图案冰箱贴。'],
    reviews_list: []
  },
  {
    id: 'c5',
    title: '江津富硒绿茶礼盒装 2023新茶 250g',
    shortTitle: '江津富硒绿茶礼盒装',
    cover: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=70',
    images: ['https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=70'],
    price: 168,
    originalPrice: 198,
    rating: 4.8,
    sold: 1200,
    tags: ['新品'],
    category: '特色食品',
    spec: '250g 礼盒装',
    desc: '江津富硒土壤种植绿茶，富含硒元素，2023新茶。',
    detail: ['江津富硒土壤种植绿茶。'],
    reviews_list: []
  },
  {
    id: 'c6',
    title: '非遗木雕挂件 四面山风景 纯手工雕刻',
    shortTitle: '非遗木雕挂件',
    cover: 'https://images.unsplash.com/photo-1610018556010-6a11691bc905?w=800&q=70',
    images: ['https://images.unsplash.com/photo-1610018556010-6a11691bc905?w=800&q=70'],
    price: 198,
    originalPrice: 258,
    rating: 4.9,
    sold: 860,
    tags: ['新品', '非遗'],
    category: '非遗手作',
    spec: '单件挂件',
    desc: '江津非遗木雕传承人手工雕刻，四面山风景主题挂件。',
    detail: ['江津非遗木雕传承人手工雕刻。'],
    reviews_list: []
  }
]

export const guides = [
  {
    id: 'g1',
    title: '2024四面山最新游玩攻略合集',
    cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=70',
    badge: '编辑精选',
    author: '山野旅行家',
    avatar: 'https://i.pravatar.cc/100?img=12',
    authorDesc: '资深户外达人',
    verified: true,
    date: '2024-01-20',
    views: '3.2万',
    likes: '1.8万',
    favorites: '1.8万',
    tags: ['自然风光', '深度游', '徒步', '美食'],
    summary: '12篇精选攻略 · 带你玩转四面山',
    intro: '四面山位于重庆市江津区，是国家5A级旅游景区，以"千瀑之乡、爱情天梯、原始森林"而闻名。本攻略涵盖最佳游玩时间、交通指南、住宿推荐、美食打卡和实用贴士，助你轻松玩转四面山。',
    catalog: [
      '最佳游玩时间与交通指南',
      '两天一夜经典路线规划',
      '必打卡景点详解',
      '住宿推荐与美食攻略',
      '实用贴士与注意事项'
    ],
    bestTime: { title: '最佳游玩时间与交通指南',
      desc: '四面山四季皆宜，但最佳游玩季节为春季（3-5月）和秋季（9-11月）。春季山花烂漫，瀑布水量充沛；秋季层林尽染，景色丹艳。',
      transport: [
        { title: '自驾', desc: '重庆主城出发约2小时，导航"四面山风景区"，景区内有停车场。' },
        { title: '公共交通', desc: '重庆菜园坝汽车站乘坐至江津的大巴，再转乘至四面山的旅游大巴。' }
      ]
    },
    daySchedule: [
      {
        day: 'Day 1',
        title: '2024.01 重庆出发',
        items: [
          { time: '08:00', title: '重庆出发', desc: '自驾或乘车前往四面山，沿途欣赏沿途田园风光' },
          { time: '10:30', title: '望乡台瀑布', desc: '打卡"亚洲第一高瀑"，落差152米，气势磅礴' },
          { time: '12:30', title: '午餐', desc: '景区内享用农家菜，推荐：酸菜鱼、豆花饭' },
          { time: '14:00-17:00', title: '土地岩 + 洪海湖', desc: '下午游览土地岩绝壁画卷，乘船游览洪海湖景区' }
        ]
      },
      {
        day: 'Day 2',
        title: '2024.01 朝日清明',
        items: [
          { time: '08:00', title: '观日出', desc: '在洪海湖边或者望乡台欣赏四面山日出云海' },
          { time: '09:30', title: '水口寺瀑布', desc: '探访"水秀洞"飞瀑奇观' },
          { time: '17:00', title: '返程', desc: '品尝当地特色泉水豆花，购买伴手礼后返回重庆' }
        ]
      }
    ],
    musts: [
      {
        title: '望乡台瀑布', cover: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=70',
        tag: '必去', time: '建议2小时',
        desc: '高152米，宽37米，被誉为"亚洲第一高瀑"，最佳观赏时间为上午，阳光照射时可见彩虹横跨瀑布。'
      },
      {
        title: '洪海湖', cover: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=70',
        tag: '推荐', time: '建议2小时',
        desc: '湖面如镜，四周青山环绕，可乘船游览，湖中有大小岛屿，是摄影爱好者的天堂。'
      }
    ],
    accommodation: {
      title: '住宿推荐',
      hotel: { name: '四面山大酒店', rating: 4.6, desc: '景区内核心位置，距望乡台瀑布步行10分钟', price: 328 }
    },
    foods: [
      { name: '江津酸菜鱼', icon: '🐟' },
      { name: '泉水豆花', icon: '🥣' },
      { name: '老白干', icon: '🥃' }
    ],
    tips: {
      title: '实用贴士与注意事项',
      list: [
        { title: '门票信息', desc: '门票（3-11月）¥90/人，淡季（12-2月）¥60/人，建议提前网上购票' },
        { title: '穿着建议', desc: '穿着防滑徒步鞋，山区温差较大请准备一件薄外套' },
        { title: '必备物品', desc: '防晒霜、驱蚊水、雨具、充电宝、宽檐帽子（部分区域信号较弱）' },
        { title: '安全提醒', desc: '雨天注意山区路滑，不要靠近瀑布边缘，景区内禁止吸烟' }
      ]
    },
    related: [
      { id: 'g2', title: '四面山徒步全攻略：5条经典路线推荐', cover: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=300&q=70', author: '户外探险者', views: '2.8万', likes: '8800' }
    ]
  },
  {
    id: 'g2',
    title: '四面山深度游玩攻略：两天一夜解锁秘境之美',
    cover: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=70',
    author: '山野旅行家',
    avatar: 'https://i.pravatar.cc/100?img=12',
    verified: true,
    rank: 1, hot: '3.2万',
    tags: ['自然风光', '深度游'],
    summary: '涵盖最佳路线、住宿推荐、美食打卡和实用贴士，助你轻松玩转四面山。',
    views: '3.2万', likes: '2.8万',
    catalog: [], bestTime: null, daySchedule: [], musts: [],
    accommodation: null, foods: [], tips: null, related: []
  },
  {
    id: 'g3',
    title: '四面山徒步全攻略：5条经典路线推荐',
    cover: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=70',
    author: '户外探险者',
    avatar: 'https://i.pravatar.cc/100?img=23',
    rank: 2, hot: '2.8万',
    tags: ['徒步探险', '户外运动'],
    summary: '从入门到进阶，精选5条徒步路线，适合不同体能水平的户外爱好者。',
    views: '2.8万', likes: '2.3万',
    catalog: [], bestTime: null, daySchedule: [], musts: [],
    accommodation: null, foods: [], tips: null, related: []
  },
  {
    id: 'g4',
    title: '四面山摄影指南：10个最佳机位分享',
    cover: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=70',
    author: '光影捕手',
    avatar: 'https://i.pravatar.cc/100?img=35',
    rank: 3, hot: '2.1万',
    tags: ['摄影', '美图打卡'],
    summary: '精选10个四面山最佳摄影机位，附详细拍摄建议。',
    views: '2.1万', likes: '1.9万',
    catalog: [], bestTime: null, daySchedule: [], musts: [],
    accommodation: null, foods: [], tips: null, related: []
  },
  {
    id: 'g5',
    title: '江津美食地图：不可错过的地道风味',
    cover: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=70',
    author: '美食猎人',
    avatar: 'https://i.pravatar.cc/100?img=45',
    verified: true,
    tags: ['美食探店', '地方特色'],
    summary: '从酸菜鱼到米花糖，带你吃遍江津最地道的美食，附详细店铺推荐。',
    views: '1.9万', likes: '1.6万',
    catalog: [], bestTime: null, daySchedule: [], musts: [],
    accommodation: null, foods: [], tips: null, related: []
  }
]

export const themeGuides = [
  { id: 1, title: '摄影攻略', count: '12篇', color: '#3B82F6', icon: '📷' },
  { id: 2, title: '亲子出游', count: '8篇', color: '#10B981', icon: '👨‍👩‍👧' },
  { id: 3, title: '自驾路线', count: '15篇', color: '#F59E0B', icon: '🚗' },
  { id: 4, title: '民宿体验', count: '10篇', color: '#A855F7', icon: '🌙' }
]

export const experts = [
  { id: 1, name: '山野旅行家', avatar: 'https://i.pravatar.cc/100?img=12', count: '128篇攻略', followed: false },
  { id: 2, name: '美食猎人', avatar: 'https://i.pravatar.cc/100?img=45', count: '96篇攻略', followed: false },
  { id: 3, name: '光影捕手', avatar: 'https://i.pravatar.cc/100?img=35', count: '72篇攻略', followed: false }
]

export function findById (list, id) {
  return list.find(item => item.id === id) || null
}
