let products = [

  // ===== 食飲品 =====
  { id: 1, name: "巧克力餅乾", price: 65, category: "食飲品", emoji: "🍪", desc: "濃郁巧克力風味" },
  { id: 2, name: "洋芋片", price: 55, category: "食飲品", emoji: "🥔", desc: "酥脆鹹香口感" },
  { id: 3, name: "可樂", price: 35, category: "食飲品", emoji: "🥤", desc: "冰涼碳酸飲料" },
  { id: 4, name: "綠茶", price: 30, category: "食飲品", emoji: "🍵", desc: "清爽無糖綠茶" },
  { id: 5, name: "珍珠奶茶", price: 75, category: "食飲品", emoji: "🧋", desc: "台灣經典飲品" },
  { id: 6, name: "冷凍水餃", price: 120, category: "食飲品", emoji: "🥟", desc: "家庭必備冷凍食品" },
  { id: 7, name: "冷凍披薩", price: 180, category: "食飲品", emoji: "🍕", desc: "快速方便料理" },
  { id: 8, name: "冰淇淋", price: 95, category: "食飲品", emoji: "🍨", desc: "香甜冰涼口感" },
  { id: 9, name: "泡麵", price: 45, category: "食飲品", emoji: "🍜", desc: "宵夜好選擇" },
  { id: 10, name: "牛奶", price: 42, category: "食飲品", emoji: "🥛", desc: "高鈣鮮乳" },
  { id: 11, name: "咖啡包", price: 150, category: "食飲品", emoji: "☕", desc: "即溶黑咖啡" },
  { id: 12, name: "能量飲料", price: 55, category: "食飲品", emoji: "⚡", desc: "補充精神活力" },
  { id: 13, name: "果汁", price: 50, category: "食飲品", emoji: "🧃", desc: "新鮮水果風味" },
  { id: 14, name: "棉花糖", price: 40, category: "食飲品", emoji: "🍬", desc: "香甜Q彈" },
  { id: 15, name: "軟糖", price: 35, category: "食飲品", emoji: "🍭", desc: "水果口味軟糖" },
  { id: 16, name: "海苔", price: 60, category: "食飲品", emoji: "🍘", desc: "休閒零食" },
  { id: 17, name: "堅果包", price: 90, category: "食飲品", emoji: "🥜", desc: "健康零嘴" },
  { id: 18, name: "冷凍薯條", price: 130, category: "食飲品", emoji: "🍟", desc: "氣炸鍋適用" },
  { id: 19, name: "起司條", price: 85, category: "食飲品", emoji: "🧀", desc: "濃郁起司風味" },
  { id: 20, name: "氣泡水", price: 40, category: "食飲品", emoji: "🫧", desc: "無糖清爽口感" },

  // ===== 日生活用品 =====
  { id: 21, name: "衛生紙", price: 199, category: "日生活用品", emoji: "🧻", desc: "家庭常備用品" },
  { id: 22, name: "牙刷", price: 80, category: "日生活用品", emoji: "🪥", desc: "軟毛牙刷" },
  { id: 23, name: "洗髮精", price: 220, category: "日生活用品", emoji: "🧴", desc: "清爽去油" },
  { id: 24, name: "沐浴乳", price: 240, category: "日生活用品", emoji: "🧼", desc: "保濕配方" },
  { id: 25, name: "毛巾", price: 120, category: "日生活用品", emoji: "🧺", desc: "純棉材質" },
  { id: 26, name: "拖鞋", price: 199, category: "日生活用品", emoji: "🩴", desc: "舒適室內拖" },
  { id: 27, name: "垃圾桶", price: 350, category: "日生活用品", emoji: "🗑️", desc: "居家收納" },
  { id: 28, name: "掃把", price: 180, category: "日生活用品", emoji: "🧹", desc: "清潔工具" },
  { id: 29, name: "洗衣精", price: 260, category: "日生活用品", emoji: "🫧", desc: "香氛洗衣精" },
  { id: 30, name: "保溫杯", price: 399, category: "日生活用品", emoji: "🥤", desc: "不鏽鋼材質" },
  { id: 31, name: "枕頭", price: 580, category: "日生活用品", emoji: "🛏️", desc: "記憶枕" },
  { id: 32, name: "洗衣籃", price: 320, category: "日生活用品", emoji: "🧺", desc: "大容量設計" },
  { id: 33, name: "雨傘", price: 250, category: "日生活用品", emoji: "☂️", desc: "防風折疊傘" },
  { id: 34, name: "時鐘", price: 290, category: "日生活用品", emoji: "⏰", desc: "桌上型時鐘" },
  { id: 35, name: "收納盒", price: 180, category: "日生活用品", emoji: "📦", desc: "整理居家空間" },
  { id: 36, name: "香氛蠟燭", price: 220, category: "日生活用品", emoji: "🕯️", desc: "舒壓香氣" },
  { id: 37, name: "鏡子", price: 160, category: "日生活用品", emoji: "🪞", desc: "桌上化妝鏡" },
  { id: 38, name: "洗碗精", price: 90, category: "日生活用品", emoji: "🧽", desc: "強力去油" },
  { id: 39, name: "衣架", price: 110, category: "日生活用品", emoji: "👕", desc: "防滑衣架" },
  { id: 40, name: "除濕盒", price: 75, category: "日生活用品", emoji: "💧", desc: "居家防潮" },

  // ===== 電子用品 =====
  { id: 41, name: "藍牙耳機", price: 1590, category: "電子用品", emoji: "🎧", desc: "無線藍牙耳機" },
  { id: 42, name: "機械鍵盤", price: 2490, category: "電子用品", emoji: "⌨️", desc: "RGB背光鍵盤" },
  { id: 43, name: "滑鼠", price: 890, category: "電子用品", emoji: "🖱️", desc: "人體工學設計" },
  { id: 44, name: "行動電源", price: 990, category: "電子用品", emoji: "🔋", desc: "10000mAh容量" },
  { id: 45, name: "充電器", price: 490, category: "電子用品", emoji: "🔌", desc: "快速充電" },
  { id: 46, name: "延長線", price: 350, category: "電子用品", emoji: "🔌", desc: "多孔插座" },
  { id: 47, name: "電風扇", price: 1390, category: "電子用品", emoji: "🌀", desc: "靜音循環扇" },
  { id: 48, name: "吹風機", price: 980, category: "電子用品", emoji: "💨", desc: "大風量設計" },
  { id: 49, name: "檯燈", price: 550, category: "電子用品", emoji: "💡", desc: "LED護眼燈" },
  { id: 50, name: "平板支架", price: 260, category: "電子用品", emoji: "📱", desc: "可調整角度" },
  { id: 51, name: "藍牙喇叭", price: 1280, category: "電子用品", emoji: "🔊", desc: "高音質播放" },
  { id: 52, name: "USB隨身碟", price: 320, category: "電子用品", emoji: "💾", desc: "64GB容量" },
  { id: 53, name: "網路攝影機", price: 890, category: "電子用品", emoji: "📷", desc: "高畫質視訊" },
  { id: 54, name: "路由器", price: 1690, category: "電子用品", emoji: "📡", desc: "高速WiFi" },
  { id: 55, name: "智慧手錶", price: 3990, category: "電子用品", emoji: "⌚", desc: "健康監測功能" },
  { id: 56, name: "電子計算機", price: 180, category: "電子用品", emoji: "🧮", desc: "學生必備" },
  { id: 57, name: "遊戲手把", price: 1390, category: "電子用品", emoji: "🎮", desc: "無線控制器" },
  { id: 58, name: "小夜燈", price: 290, category: "電子用品", emoji: "🌙", desc: "暖色柔光" },
  { id: 59, name: "充電線", price: 150, category: "電子用品", emoji: "🔌", desc: "Type-C 快充線" },
  { id: 60, name: "桌面音響", price: 1890, category: "電子用品", emoji: "🎵", desc: "立體聲輸出" }

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentCategory = "全部";
let coupon = JSON.parse(localStorage.getItem("easybuy_coupon")) || null;


// ===== 商品規格 / 份數選擇 =====
// 價格代表「一組該規格」的價格，購買數量代表購買幾組。
const PACKAGE_OPTION_MAP = {
  // 食飲品：參考量販/連鎖通路常見販售方式，飲料、零食、冷凍食品、沖泡品多以多入組販售。
  1: [
    { id: "box1", label: "1盒", price: 65, packCount: 1 },
    { id: "box3", label: "3盒", price: 185, packCount: 3 },
    { id: "box6", label: "6盒", price: 355, packCount: 6 }
  ],
  2: [
    { id: "pack2", label: "2包", price: 105, packCount: 2 },
    { id: "pack6", label: "6包", price: 300, packCount: 6 },
    { id: "pack12", label: "12包", price: 570, packCount: 12 }
  ],
  3: [
    { id: "bottle2", label: "2瓶", price: 68, packCount: 2 },
    { id: "bottle6", label: "6瓶", price: 190, packCount: 6 },
    { id: "bottle12", label: "12瓶", price: 360, packCount: 12 },
    { id: "bottle24", label: "24瓶", price: 690, packCount: 24 }
  ],
  4: [
    { id: "bottle2", label: "2瓶", price: 58, packCount: 2 },
    { id: "bottle6", label: "6瓶", price: 168, packCount: 6 },
    { id: "bottle12", label: "12瓶", price: 320, packCount: 12 },
    { id: "bottle24", label: "24瓶", price: 610, packCount: 24 }
  ],
  6: [
    { id: "bag1", label: "1包", price: 120, packCount: 1 },
    { id: "bag2", label: "2包", price: 230, packCount: 2 },
    { id: "bag4", label: "4包", price: 440, packCount: 4 }
  ],
  7: [
    { id: "piece2", label: "2片", price: 340, packCount: 2 },
    { id: "piece4", label: "4片", price: 650, packCount: 4 },
    { id: "piece6", label: "6片", price: 930, packCount: 6 }
  ],
  8: [
    { id: "pack2", label: "2入", price: 180, packCount: 2 },
    { id: "pack6", label: "6入", price: 510, packCount: 6 },
    { id: "pack12", label: "12入", price: 960, packCount: 12 }
  ],
  9: [
    { id: "pack5", label: "5包", price: 215, packCount: 5 },
    { id: "pack12", label: "12包", price: 500, packCount: 12 },
    { id: "pack24", label: "24包", price: 960, packCount: 24 }
  ],
  10: [
    { id: "bottle2", label: "2瓶", price: 80, packCount: 2 },
    { id: "bottle6", label: "6瓶", price: 230, packCount: 6 },
    { id: "bottle12", label: "12瓶", price: 438, packCount: 12 }
  ],
  11: [
    { id: "stick15", label: "15包", price: 150, packCount: 15 },
    { id: "stick30", label: "30包", price: 285, packCount: 30 },
    { id: "stick45", label: "45包", price: 420, packCount: 45 }
  ],
  12: [
    { id: "bottle2", label: "2瓶", price: 106, packCount: 2 },
    { id: "bottle6", label: "6瓶", price: 300, packCount: 6 },
    { id: "bottle24", label: "24瓶", price: 1120, packCount: 24 }
  ],
  13: [
    { id: "bottle2", label: "2瓶", price: 96, packCount: 2 },
    { id: "bottle6", label: "6瓶", price: 278, packCount: 6 },
    { id: "bottle12", label: "12瓶", price: 528, packCount: 12 }
  ],
  14: [
    { id: "bag1", label: "1包", price: 40, packCount: 1 },
    { id: "bag3", label: "3包", price: 112, packCount: 3 },
    { id: "bag6", label: "6包", price: 216, packCount: 6 }
  ],
  15: [
    { id: "bag1", label: "1包", price: 35, packCount: 1 },
    { id: "bag3", label: "3包", price: 98, packCount: 3 },
    { id: "bag6", label: "6包", price: 188, packCount: 6 }
  ],
  16: [
    { id: "bag1", label: "1包", price: 60, packCount: 1 },
    { id: "bag3", label: "3包", price: 170, packCount: 3 },
    { id: "bag6", label: "6包", price: 330, packCount: 6 }
  ],
  17: [
    { id: "bag1", label: "1包", price: 90, packCount: 1 },
    { id: "bag3", label: "3包", price: 255, packCount: 3 },
    { id: "bag6", label: "6包", price: 500, packCount: 6 }
  ],
  18: [
    { id: "bag1", label: "1包", price: 130, packCount: 1 },
    { id: "bag2", label: "2包", price: 250, packCount: 2 },
    { id: "bag4", label: "4包", price: 480, packCount: 4 }
  ],
  19: [
    { id: "bag1", label: "1包", price: 85, packCount: 1 },
    { id: "bag2", label: "2包", price: 160, packCount: 2 },
    { id: "bag4", label: "4包", price: 310, packCount: 4 }
  ],
  20: [
    { id: "bottle6", label: "6瓶", price: 220, packCount: 6 },
    { id: "bottle12", label: "12瓶", price: 420, packCount: 12 },
    { id: "bottle24", label: "24瓶", price: 800, packCount: 24 }
  ],

  // 日生活用品：消耗型用品保留組合購買；體積大或個人使用品維持單件。
  21: [
    { id: "bundle1", label: "1串", price: 199, packCount: 1 },
    { id: "bundle2", label: "2串", price: 388, packCount: 2 },
    { id: "bundle6", label: "6串", price: 1120, packCount: 6 }
  ],
  22: [
    { id: "pack2", label: "2支", price: 150, packCount: 2 },
    { id: "pack4", label: "4支", price: 280, packCount: 4 },
    { id: "pack8", label: "8支", price: 520, packCount: 8 }
  ],
  23: [
    { id: "bottle1", label: "1瓶", price: 220, packCount: 1 },
    { id: "bottle2", label: "2瓶", price: 420, packCount: 2 },
    { id: "bottle6", label: "6瓶", price: 1200, packCount: 6 }
  ],
  24: [
    { id: "bottle1", label: "1瓶", price: 240, packCount: 1 },
    { id: "bottle2", label: "2瓶", price: 460, packCount: 2 },
    { id: "bottle6", label: "6瓶", price: 1320, packCount: 6 }
  ],
  25: [
    { id: "piece1", label: "1條", price: 120, packCount: 1 },
    { id: "piece2", label: "2條", price: 230, packCount: 2 },
    { id: "piece4", label: "4條", price: 440, packCount: 4 }
  ],
  29: [
    { id: "bottle1", label: "1瓶", price: 260, packCount: 1 },
    { id: "bottle2", label: "2瓶", price: 500, packCount: 2 },
    { id: "bottle4", label: "4瓶", price: 960, packCount: 4 }
  ],
  35: [
    { id: "pack1", label: "1入", price: 180, packCount: 1 },
    { id: "pack3", label: "3入", price: 510, packCount: 3 },
    { id: "pack6", label: "6入", price: 960, packCount: 6 }
  ],
  36: [
    { id: "pack1", label: "1入", price: 220, packCount: 1 },
    { id: "pack3", label: "3入", price: 630, packCount: 3 },
    { id: "pack6", label: "6入", price: 1200, packCount: 6 }
  ],
  38: [
    { id: "bottle1", label: "1瓶", price: 90, packCount: 1 },
    { id: "bottle2", label: "2瓶", price: 170, packCount: 2 },
    { id: "bottle6", label: "6瓶", price: 490, packCount: 6 }
  ],
  39: [
    { id: "pack10", label: "10入", price: 110, packCount: 10 },
    { id: "pack20", label: "20入", price: 208, packCount: 20 },
    { id: "pack60", label: "60入", price: 590, packCount: 60 }
  ],
  40: [
    { id: "pack3", label: "3盒", price: 210, packCount: 3 },
    { id: "pack6", label: "6盒", price: 400, packCount: 6 },
    { id: "pack12", label: "12盒", price: 760, packCount: 12 }
  ]
};

const POINT_COUPON_REWARDS = [
  { code:"POINT30", cost:100, discount:30, text:"折抵 NT$30", note:"適合小額購物" },
  { code:"POINT80", cost:250, discount:80, text:"折抵 NT$80", note:"一般訂單常用" },
  { code:"POINT150", cost:450, discount:150, text:"折抵 NT$150", note:"適合補貨採買" },
  { code:"POINT300", cost:800, discount:300, text:"折抵 NT$300", note:"高額訂單最划算" }
];

function attachPackageOptionsToProducts(){
  products = products.map(product => {
    const mapOptions = PACKAGE_OPTION_MAP[Number(product.id)];
    const backendOptions = Array.isArray(product.packageOptions) && product.packageOptions.length > 0 ? product.packageOptions : null;
    const rawOptions = backendOptions || mapOptions || [{ id:"single", label:"單件", price:Number(product.price) || 0, packCount:1 }];

    const packageOptions = rawOptions.map(option => ({
      id: String(option.id || "single"),
      label: String(option.label || "單件"),
      price: Number(option.price) || Number(product.price) || 0,
      packCount: Number(option.packCount) || 1
    }));

    return { ...product, packageOptions };
  });
}

function getPackageOptions(product){
  if(!product) return [];
  if(!Array.isArray(product.packageOptions) || product.packageOptions.length === 0){
    product.packageOptions = [{ id:"single", label:"單件", price:Number(product.price) || 0, packCount:1 }];
  }
  return product.packageOptions;
}

function getDefaultPackageOption(product){
  return getPackageOptions(product)[0] || { id:"single", label:"單件", price:Number(product?.price) || 0, packCount:1 };
}

function getPackageOption(product, optionId){
  const options = getPackageOptions(product);
  return options.find(option => String(option.id) === String(optionId)) || getDefaultPackageOption(product);
}

function hasPackageChoice(product){
  const options = getPackageOptions(product);
  return options.length > 1 || (options[0] && options[0].label !== "單件");
}

function getCartKey(id, optionId){
  return `${id}__${optionId || "single"}`;
}

function getCartKeyFromItem(item){
  if(item.cartKey) return item.cartKey;
  return getCartKey(item.id, item.optionId || "single");
}

function getCartItemTitle(item){
  if(item.optionLabel && item.optionLabel !== "單件"){
    return `${item.name}（${item.optionLabel}）`;
  }
  return item.name;
}

function getQuantityUnit(item){
  return item.optionLabel && item.optionLabel !== "單件" ? "組" : "件";
}

function ensureCartData(){
  let changed = false;
  cart = cart.map(item => {
    const product = products.find(p => String(p.id) === String(item.id));
    if(!product){
      return { ...item, cartKey: getCartKeyFromItem(item) };
    }

    const option = getPackageOption(product, item.optionId || "single");
    const fixed = {
      ...item,
      name: product.name || item.name,
      price: option.price,
      optionId: option.id,
      optionLabel: option.label,
      packageCount: option.packCount,
      cartKey: getCartKey(product.id, option.id)
    };

    if(JSON.stringify(fixed) !== JSON.stringify(item)) changed = true;
    return fixed;
  });

  if(changed) saveCart();
}

function renderPackageSelector(product, target){
  if(!hasPackageChoice(product)) return "";

  const options = getPackageOptions(product);
  const selectId = `${target}PackageOption_${product.id}`;

  return `
    <label class="package-select">
      <span>份數 / 規格</span>
      <select id="${selectId}" onchange="updateProductPrice(${product.id}, this.value, '${target}')">
        ${options.map(option => `<option value="${option.id}">${option.label}｜NT$${option.price}</option>`).join("")}
      </select>
    </label>
  `;
}

function getPackageSummaryText(product){
  if(!hasPackageChoice(product)) return "";
  return getPackageOptions(product).map(option => option.label).join(" / ");
}

function getSelectedPackageOptionId(id, target){
  const select = document.getElementById(`${target}PackageOption_${id}`);
  if(select) return select.value;

  const product = products.find(p => String(p.id) === String(id));
  return getDefaultPackageOption(product).id;
}

function updateProductPrice(id, optionId, target){
  const product = products.find(p => String(p.id) === String(id));
  const option = getPackageOption(product, optionId);
  const priceBox = document.getElementById(`${target}Price_${id}`);
  if(priceBox) priceBox.innerHTML = `NT$${option.price}`;
}

function getDisplayPrice(product){
  const option = getDefaultPackageOption(product);
  return option.price || Number(product.price) || 0;
}

function getCardPriceText(product){
  const suffix = hasPackageChoice(product) ? " 起" : "";
  return `NT$${getDisplayPrice(product)}${suffix}`;
}

function renderCardPackageHint(product){
  // 商品卡片維持簡潔：規格選擇只放在詳情視窗內。
  return "";
}

function renderDetailPackageTip(product){
  return "";
}

function makeCartItemFromOrderItem(item){
  const product = products.find(p => String(p.id) === String(item.id));
  if(!product){
    return { ...item, optionId:"single", optionLabel:"單件", cartKey:getCartKey(item.id, "single") };
  }

  const options = getPackageOptions(product);
  let option = options.find(o => Number(o.price) === Number(item.price));
  if(!option && item.name){
    option = options.find(o => item.name.includes(`（${o.label}）`) || item.name.includes(o.label));
  }
  if(!option) option = getDefaultPackageOption(product);

  return {
    id: product.id,
    name: product.name,
    price: option.price,
    category: product.category,
    emoji: product.emoji,
    desc: product.desc,
    quantity: Number(item.quantity) || 1,
    optionId: option.id,
    optionLabel: option.label,
    packageCount: option.packCount,
    cartKey: getCartKey(product.id, option.id)
  };
}

attachPackageOptionsToProducts();
ensureCartData();

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getProductList(){
  const keyword = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
  const sort = document.getElementById("sortSelect")?.value || "default";

  let list = currentCategory === "全部" ? [...products] : products.filter(p => p.category === currentCategory);

  if(keyword !== ""){
    list = list.filter(p =>
      p.name.toLowerCase().includes(keyword) ||
      p.desc.toLowerCase().includes(keyword) ||
      p.category.toLowerCase().includes(keyword)
    );
  }

  if(sort === "low") list.sort((a,b) => getDisplayPrice(a) - getDisplayPrice(b));
  if(sort === "high") list.sort((a,b) => getDisplayPrice(b) - getDisplayPrice(a));

  return list;
}


function getAverageRating(productId){
  const reviews = getReviews(productId);
  if(reviews.length === 0){
    return Number((4 + (productId % 9) / 10).toFixed(1));
  }
  const avg = reviews.reduce((sum, r) => sum + Number(r.stars || 5), 0) / reviews.length;
  return Number(avg.toFixed(1));
}

function getRatingStars(avg){
  const full = Math.round(avg);
  return "★".repeat(full) + "☆".repeat(5-full);
}

function renderProducts(){
  const grid = document.getElementById("productGrid");
  if(!grid) return;

  const list = getProductList();

  if(list.length === 0){
    grid.innerHTML = `<div class="empty-result">找不到符合的商品</div>`;
    return;
  }

  grid.innerHTML = "";

  list.forEach(product => {
    const hotTag = product.id % 7 === 0 ? `<span class="tag hot">熱門</span>` : "";
    const newTag = product.id % 11 === 0 ? `<span class="tag new">新品</span>` : "";
    const stock = getStock(product.id);
    const packageNote = renderCardPackageHint(product);
    const quickAction = `
      <button class="add-btn" onclick="handleCardAddToCart(${product.id})" ${stock <= 0 ? "disabled" : ""}>
        ${stock <= 0 ? "已售完" : "加入購物車"}
      </button>
    `;

    grid.innerHTML += `
      <div class="product-card fade-card">
        <div class="tag-row">${hotTag}${newTag}</div>
        <div class="product-img" onclick="showProductDetail(${product.id})">${product.emoji}</div>
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <div class="rating">${getRatingStars(getAverageRating(product.id))} <span>${getAverageRating(product.id)}</span></div>
        <div class="stock">庫存：${stock} ${getStockUnit(product)}</div>
        <div class="price" id="cardPrice_${product.id}">${getCardPriceText(product)}</div>
        ${packageNote}
        <button class="detail-btn" onclick="showProductDetail(${product.id})">查看詳情</button>
        ${quickAction}
      </div>
    `;
  });
}

function filterProducts(category, btn){
  currentCategory = category;

  document.querySelectorAll(".categories button").forEach(b => b.classList.remove("active"));
  if(btn) btn.classList.add("active");

  renderProducts();
}

function getStock(id){
  const product = products.find(p => String(p.id) === String(id));
  if(product && product.stock !== undefined && product.stock !== null && !Number.isNaN(Number(product.stock))){
    return Number(product.stock);
  }
  return 8 + (Number(id) * 3) % 21;
}

function getStockUnit(product){
  return hasPackageChoice(product) ? "組" : "件";
}

function handleCardAddToCart(id){
  const product = products.find(p => String(p.id) === String(id));
  if(!product) return;

  // 商品卡片的「加入購物車」作為快速購買：
  // 沒有規格可直接加入；有規格則開啟簡化版選規格視窗，不進完整詳情。
  if(hasPackageChoice(product)){
    showQuickAddModal(id);
    return;
  }

  addToCart(id, getDefaultPackageOption(product).id);
}

function addToCart(id, optionId){
  const product = products.find(p => String(p.id) === String(id));
  if(!product) return;

  const option = getPackageOption(product, optionId);
  const key = getCartKey(product.id, option.id);
  const stock = getStock(id);
  const exist = cart.find(p => getCartKeyFromItem(p) === key);

  if(exist){
    if(exist.quantity >= stock){
      alert("此商品已達可購買庫存上限");
      return;
    }
    exist.quantity++;
  }else{
    cart.push({
      ...product,
      price: option.price,
      quantity: 1,
      optionId: option.id,
      optionLabel: option.label,
      packageCount: option.packCount,
      cartKey: key
    });
  }

  saveCart();
  renderCart();
  renderOrderCart();
  animateCartFly(product.emoji);
  toast(`${product.name}${option.label !== "單件" ? `（${option.label}）` : ""} 已加入購物車`);
}

function findCartItem(key){
  return cart.find(p => getCartKeyFromItem(p) === String(key)) || cart.find(p => String(p.id) === String(key));
}

function increaseQty(key){
  const item = findCartItem(key);
  if(!item) return;

  if(item.quantity >= getStock(item.id)){
    alert("已達庫存上限");
    return;
  }

  item.quantity++;
  saveCart();
  renderCart();
  renderOrderCart();
}

function decreaseQty(key){
  const item = findCartItem(key);
  if(!item) return;

  item.quantity--;

  if(item.quantity <= 0){
    const itemKey = getCartKeyFromItem(item);
    cart = cart.filter(p => getCartKeyFromItem(p) !== itemKey);
  }

  saveCart();
  renderCart();
  renderOrderCart();
}

function removeItem(key){
  cart = cart.filter(p => getCartKeyFromItem(p) !== String(key));
  saveCart();
  renderCart();
  renderOrderCart();
}

function clearCart(){
  if(cart.length > 0 && !confirm("確定要清空購物車嗎？")) return;

  cart = [];
  coupon = null;
  localStorage.removeItem("easybuy_coupon");
  saveCart();
  renderCart();
  renderOrderCart();
}

function getSubtotal(){
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getDiscount(){
  const subtotal = getSubtotal();
  if(!coupon) return 0;

  if(coupon.code === "FOOD50") return Math.min(50, subtotal);
  if(coupon.code === "VIP100") return Math.min(100, subtotal);
  if(coupon.code === "EASYBUY10") return Math.floor(subtotal * 0.1);

  if(coupon.code === "BRONZE30") return Math.min(30, subtotal);
  if(coupon.code === "SILVER80") return Math.min(80, subtotal);
  if(coupon.code === "GOLD150") return Math.min(150, subtotal);
  if(coupon.code === "PLATINUM200") return Math.min(200, subtotal);
  if(coupon.code === "DIAMOND300") return Math.min(300, subtotal);
  if(coupon.code === "CHECKIN50") return Math.min(50, subtotal);

  const pointReward = POINT_COUPON_REWARDS.find(r => r.code === coupon.code);
  if(pointReward) return Math.min(pointReward.discount, subtotal);

  return 0;
}

function getTotal(){
  return Math.max(0, getSubtotal() - getDiscount());
}


function getShippingFee(){
  const method = document.querySelector('input[name="shippingMethod"]:checked')?.value || "store";
  if(getSubtotal() >= 999) return 0;
  if(method === "home") return 100;
  if(method === "fast") return 150;
  return 60;
}

function getOrderFinalTotal(){
  return getTotal() + getShippingFee();
}

function applyCoupon(){
  alert("優惠券請到填寫訂單頁面選擇使用");
}

function renderCart(){
  ensureCartData();

  const cartList = document.getElementById("cartList");
  const total = document.getElementById("totalPrice");
  const discountInfo = document.getElementById("discountInfo");
  const shippingInfo = document.getElementById("shippingInfo");

  if(!cartList || !total) return;

  if(cart.length === 0){
    cartList.innerHTML = "目前購物車是空的";
    total.innerHTML = "總金額：NT$0";
    if(discountInfo) discountInfo.innerHTML = "";
    if(shippingInfo) shippingInfo.innerHTML = "";
    return;
  }

  cartList.innerHTML = "";

  cart.forEach(item => {
    const key = getCartKeyFromItem(item);
    const unit = getQuantityUnit(item);
    cartList.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.emoji} ${getCartItemTitle(item)}</strong><br>
          <span>NT$${item.price} × ${item.quantity} ${unit} = NT$${item.price * item.quantity}</span>
        </div>
        <div class="qty-controls">
          <button onclick="decreaseQty('${key}')">−</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQty('${key}')">＋</button>
          <button class="remove-btn" onclick="removeItem('${key}')">刪除</button>
        </div>
      </div>
    `;
  });

  total.innerHTML = `總金額：NT$${getTotal()}`;

  if(discountInfo){
    const subtotal = getSubtotal();
    const discount = getDiscount();

    if(discount > 0){
      discountInfo.innerHTML = `商品小計：NT$${subtotal}<br>優惠折抵：-NT$${discount}（${coupon.code}）`;
    }else{
      discountInfo.innerHTML = `商品小計：NT$${subtotal}`;
    }
  }

  if(shippingInfo){
    const need = 999 - getSubtotal();
    if(need > 0){
      shippingInfo.innerHTML = `再消費 NT$${need} 即可免運`;
    }else{
      shippingInfo.innerHTML = `已達免運門檻`;
    }
  }
}

function renderOrderCart(){
  ensureCartData();

  const orderCartList = document.getElementById("orderCartList");
  const orderTotalPrice = document.getElementById("orderTotalPrice");
  const orderShippingInfo = document.getElementById("orderShippingInfo");

  if(!orderCartList || !orderTotalPrice) return;

  if(cart.length === 0){
    orderCartList.innerHTML = "目前沒有商品";
    orderTotalPrice.innerHTML = "總金額：NT$0";
    if(orderShippingInfo) orderShippingInfo.innerHTML = "";
    renderAvailableCoupons();
    renderFavoritesPage();
    return;
  }

  let html = "";

  cart.forEach(item => {
    const unit = getQuantityUnit(item);
    html += `
      <div class="order-item">
        <strong>${item.emoji} ${getCartItemTitle(item)}</strong><br>
        NT$${item.price} × ${item.quantity} ${unit} = NT$${item.price * item.quantity}
      </div>
    `;
  });

  const discount = getDiscount();
  const shipping = getShippingFee();

  if(discount > 0){
    html += `<div class="discount-info">優惠券 ${coupon.code} 折抵 NT$${discount}</div>`;
  }

  if(orderShippingInfo){
    orderShippingInfo.innerHTML = `運費：NT$${shipping}${getSubtotal() >= 999 ? "（滿額免運）" : ""}`;
  }

  orderCartList.innerHTML = html;
  orderTotalPrice.innerHTML = `總金額：NT$${getOrderFinalTotal()}`;
  renderAvailableCoupons();
}

function createOrderNo(){
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth()+1).padStart(2,"0");
  const d = String(date.getDate()).padStart(2,"0");
  const rand = Math.floor(Math.random()*9000)+1000;
  return `EB${y}${m}${d}${rand}`;
}

async function submitOrder(){
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const message = document.getElementById("message");

  if(localStorage.getItem("isLogin") !== "true"){
    message.innerHTML = "請先登入會員才能送出訂單";
    setTimeout(() => window.location.href = "member_login.html", 700);
    return;
  }

  if(cart.length === 0){
    message.innerHTML = "請先加入商品";
    return;
  }

  if(name === "" || phone === "" || address === ""){
    message.innerHTML = "請完整填寫資料";
    return;
  }

  try{
    const res = await fetch("/api/orders/create/", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        member: localStorage.getItem("loginUser") || "",
        name,
        phone,
        address,
        subtotal: getSubtotal(),
        discount: getDiscount(),
        coupon: coupon ? coupon.code : "",
        shippingFee: getShippingFee(),
        total: getOrderFinalTotal(),
        shippingMethod: getSelectedShippingMethod(),
        items: cart
      })
    });
    const data = await res.json();

    if(!data.ok){
      message.innerHTML = data.error || "訂單送出失敗";
      return;
    }

    const orderData = data.order;
    localStorage.setItem("easybuy_order", JSON.stringify(orderData));
    const orders = JSON.parse(localStorage.getItem("easybuy_orders")) || [];
    orders.push(orderData);
    localStorage.setItem("easybuy_orders", JSON.stringify(orders));
    updateSalesFromOrder(orderData);

    if(coupon && coupon.memberCoupon){
      const memberCoupons = getMemberCoupons(orderData.member);
      const targetCoupon = memberCoupons.find(c => c.code === coupon.code && !c.used);
      if(targetCoupon){
        targetCoupon.used = true;
        targetCoupon.usedAt = new Date().toLocaleString();
        targetCoupon.usedOrder = orderData.orderNo;
        saveMemberCoupons(orderData.member, memberCoupons);
      }
    }

    const earnedPoints = Number(data.earnedPoints ?? Math.floor(orderData.total / 10));
    if(data.memberPoints !== undefined){
      setMemberPointBalance(orderData.member, Number(data.memberPoints));
    }else{
      addMemberPoints(orderData.member, earnedPoints);
    }

    message.innerHTML = `
      <strong>訂單已送出！</strong><br>
      訂單編號：${orderData.orderNo}<br>
      感謝 ${name} 的購買<br>
      總金額：NT${orderData.total}<br>
      本次獲得會員點數：${earnedPoints} 點
    `;

    cart = [];
    coupon = null;
    localStorage.removeItem("easybuy_coupon");
    saveCart();
    renderOrderCart();
  }catch(err){
    message.innerHTML = "後端連線失敗，請確認 Django 伺服器是否已啟動";
  }
}

async function searchOrder(){
  const phone = document.getElementById("searchPhone").value.trim();
  const result = document.getElementById("searchResult");

  if(phone === ""){
    result.innerHTML = "請輸入電話";
    return;
  }

  try{
    const res = await fetch(`/api/orders/search/?phone=${encodeURIComponent(phone)}`);
    const data = await res.json();
    if(!data.ok || data.orders.length === 0){
      result.innerHTML = "查無此電話訂單";
      return;
    }
    window.backendOrders = window.backendOrders || {};
    data.orders.forEach(o => window.backendOrders[o.orderNo] = o);
    result.innerHTML = data.orders.map(order => renderOrderBlock(order)).join("<hr>");
  }catch(err){
    result.innerHTML = "後端連線失敗，請確認 Django 伺服器是否已啟動";
  }
}

function renderOrderBlock(order){
  const reviewHint = getReviewHint(order);
  let itemsText = "";

  order.items.forEach(item => {
    const reviewed = hasOrderReview(order.orderNo, item.id);
    const reviewButton = canReviewOrder(order)
      ? reviewed
        ? `<span class="reviewed-tag">已評價</span>`
        : `<button class="review-order-btn" onclick="addReviewFromOrder('${order.orderNo}', ${item.id}, '${escapeForJs(item.name || "商品")}')">評價商品</button>`
      : "";

    itemsText += `
      <div class="order-product-line">
        <span>${item.emoji || ""} ${item.name} × ${item.quantity}</span>
        ${reviewButton}
      </div>
    `;
  });

  return `
    <strong>訂單查詢成功</strong><br><br>
    訂單編號：${order.orderNo || "未記錄"}<br>
    訂單狀態：${getOrderStatus(order)}<br>
    會員帳號：${order.member || "未記錄"}<br>
    收件人：${order.name}<br>
    電話：${order.phone}<br>
    地址：${order.address}<br>
    建立時間：${order.createdAt || "未記錄"}<br><br>
    商品內容：<br>
    <div class="order-products">${itemsText}</div>
    ${reviewHint ? `<div class="review-note">${reviewHint}</div>` : ""}
    小計：NT${order.subtotal || order.total}<br>
    優惠：NT${order.discount || 0}<br>
    總金額：NT${order.total}<br><br>
    <button onclick="buyAgain('${order.orderNo}')">再次購買</button>
    <button onclick="cancelOrder('${order.orderNo}')">取消訂單</button>
  `;
}

async function showMyOrders(){
  const result = document.getElementById("myOrdersResult");
  if(!result) return;

  if(localStorage.getItem("isLogin") !== "true"){
    result.innerHTML = "請先登入會員才能查看自己的訂單";
    return;
  }

  const user = localStorage.getItem("loginUser");

  try{
    const res = await fetch(`/api/orders/my/?username=${encodeURIComponent(user)}`);
    const data = await res.json();
    if(!data.ok || data.orders.length === 0){
      result.innerHTML = "目前沒有會員訂單紀錄";
      return;
    }
    window.backendOrders = window.backendOrders || {};
    data.orders.forEach(o => window.backendOrders[o.orderNo] = o);
    result.innerHTML = data.orders.map(order => renderOrderBlock(order)).join("<hr>");
  }catch(err){
    result.innerHTML = "後端連線失敗，請確認 Django 伺服器是否已啟動";
  }
}

function showQuickAddModal(id){
  const product = products.find(p => String(p.id) === String(id));
  const modal = document.getElementById("productModal");
  const detail = document.getElementById("productDetail");

  if(!product || !modal || !detail) return;

  detail.innerHTML = `
    <div class="quick-add-modal">
      <div class="detail-emoji quick-emoji">${product.emoji}</div>
      <h2>快速加入購物車</h2>
      <h3>${product.name}</h3>
      <p class="quick-desc">${product.desc}</p>
      <p class="price" id="quickPrice_${product.id}">NT$${getDisplayPrice(product)}</p>
      ${renderPackageSelector(product, "quick")}
      ${hasPackageChoice(product) ? `<div class="package-tip quick-tip">先選擇購買規格，再加入購物車。</div>` : ""}
      <button class="add-btn" onclick="addToCart(${product.id}, getSelectedPackageOptionId(${product.id}, 'quick')); closeProductDetail();">確認加入購物車</button>
      <button class="detail-btn" onclick="showProductDetail(${product.id})">查看完整詳情</button>
    </div>
  `;

  modal.classList.add("show");

  setTimeout(() => {
    const select = document.getElementById(`quickPackageOption_${product.id}`);
    if(select) select.focus();
  }, 80);
}

function showProductDetail(id){
  const product = products.find(p => String(p.id) === String(id));
  const modal = document.getElementById("productModal");
  const detail = document.getElementById("productDetail");

  if(!product || !modal || !detail) return;

  addRecentView(id);

  const isFav = isFavorite(id);

  detail.innerHTML = `
    <div class="detail-emoji">${product.emoji}</div>
    <h2>${product.name}</h2>
    <p>分類：${product.category}</p>
    <p>${product.desc}</p>
    <p class="rating">${getRatingStars(getAverageRating(product.id))} ${getAverageRating(product.id)} / 5</p>
    <p>庫存：${getStock(id)} ${getStockUnit(product)}</p>
    <p class="price" id="detailPrice_${product.id}">NT$${getDisplayPrice(product)}</p>
    ${renderPackageSelector(product, "detail")}
    ${renderDetailPackageTip(product)}
    <div class="review-list">${renderReviewList(product.id)}</div>
    <button class="add-btn" onclick="addToCart(${product.id}, getSelectedPackageOptionId(${product.id}, 'detail'))">加入購物車</button>
    <button class="member-link-btn" onclick="toggleFavorite(${product.id})">
      ${isFav ? "取消收藏" : "加入收藏"}
    </button>
  `;

  modal.classList.add("show");
}

function closeProductDetail(){
  const modal = document.getElementById("productModal");
  if(modal) modal.classList.remove("show");
}

function getFavorites(){
  return JSON.parse(localStorage.getItem("easybuy_favorites")) || [];
}

function saveFavorites(favs){
  localStorage.setItem("easybuy_favorites", JSON.stringify(favs));
}

function isFavorite(id){
  return getFavorites()
    .map(f => typeof f === "object" ? String(f.id) : String(f))
    .includes(String(id));
}

function toggleFavorite(id){
  let favs = getFavorites()
    .map(f => typeof f === "object" ? String(f.id) : String(f));

  const sid = String(id);

  if(favs.includes(sid)){
    favs = favs.filter(f => f !== sid);
    alert("已取消收藏");
  }else{
    favs.push(sid);
    alert("已加入收藏");
  }

  saveFavorites(favs);

  const modal = document.getElementById("productModal");
  if(modal){
    showProductDetail(id);
  }

  updateMemberPage();
  renderFavoritesPage();
}

function getMembers(){
  return JSON.parse(localStorage.getItem("easybuy_members")) || [];
}

function saveMembers(members){
  localStorage.setItem("easybuy_members", JSON.stringify(members));
}

function upsertLocalMember(memberData, password){
  if(!memberData || !memberData.username) return;

  const members = getMembers();
  let member = members.find(m => m.username === memberData.username);

  if(member){
    member.name = memberData.name || member.name;
    member.createdAt = memberData.createdAt || member.createdAt;
    if(memberData.points !== undefined) member.points = Number(memberData.points) || 0;
    if(password) member.password = password;
  }else{
    member = {
      username: memberData.username,
      password: password || "",
      name: memberData.name || memberData.username,
      points: Number(memberData.points) || 0,
      createdAt: memberData.createdAt || new Date().toLocaleString()
    };
    members.push(member);
  }

  saveMembers(members);
}

function getMemberPointBalance(username){
  const member = getMembers().find(m => m.username === username);
  return Number(member?.points || 0);
}

function setMemberPointBalance(username, points){
  if(!username) return;
  const members = getMembers();
  let member = members.find(m => m.username === username);
  if(!member){
    member = { username, password:"", name:username, points:0, createdAt:new Date().toLocaleString() };
    members.push(member);
  }
  member.points = Math.max(0, Number(points) || 0);
  saveMembers(members);
}

async function syncMemberInfo(username){
  if(!username) return null;
  try{
    const res = await fetch(`/api/members/info/?username=${encodeURIComponent(username)}`);
    const data = await res.json();
    if(data.ok && data.member){
      upsertLocalMember(data.member);
      return data.member;
    }
  }catch(err){
    console.warn("會員資料同步失敗，暫時使用本機資料");
  }
  return null;
}

async function registerMember(){
  const username = document.getElementById("registerUser")?.value.trim();
  const password = document.getElementById("registerPassword")?.value.trim();
  const name = document.getElementById("registerName")?.value.trim();
  const status = document.getElementById("memberStatus");

  if(username === "" || password === "" || name === ""){
    if(status) status.innerHTML = "請完整輸入帳號、密碼與姓名";
    return;
  }

  if(password.length < 4){
    if(status) status.innerHTML = "密碼至少需要 4 個字元";
    return;
  }

  try{
    const res = await fetch("/api/members/register/", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({username, password, name})
    });
    const data = await res.json();
    if(!data.ok){
      if(status) status.innerHTML = data.error || "註冊失敗";
      return;
    }

    upsertLocalMember(data.member, password);

    alert("註冊成功，請登入會員！");
    window.location.href = "member_login.html";
  }catch(err){
    if(status) status.innerHTML = "後端連線失敗，請確認 Django 伺服器是否已啟動";
  }
}

async function memberLogin(){
  const username = document.getElementById("memberLoginUser")?.value.trim();
  const password = document.getElementById("memberLoginPassword")?.value.trim();
  const status = document.getElementById("memberStatus");

  if(username === "" || password === ""){
    if(status) status.innerHTML = "請輸入會員帳號與密碼";
    return;
  }

  try{
    const res = await fetch("/api/members/login/", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({username, password})
    });
    const data = await res.json();
    if(!data.ok){
      if(status) status.innerHTML = data.error || "帳號或密碼錯誤";
      return;
    }

    upsertLocalMember(data.member, password);

    localStorage.setItem("isLogin", "true");
    localStorage.setItem("loginUser", username);

    alert("登入成功！");
    window.location.href = "member.html";
  }catch(err){
    if(status) status.innerHTML = "後端連線失敗，請確認 Django 伺服器是否已啟動";
  }
}

function logout(){
  localStorage.removeItem("isLogin");
  localStorage.removeItem("loginUser");
  updateNavbar();

  alert("已登出會員");
  window.location.href = "member_login.html";
}

function getMemberLevel(totalSpent){
  if(totalSpent >= 3000) return "VIP 會員";
  if(totalSpent >= 1000) return "銀級會員";
  return "一般會員";
}

function addMemberPoints(username, points){
  if(!username) return 0;
  const current = getMemberPointBalance(username);
  const next = Math.max(0, current + Number(points || 0));
  setMemberPointBalance(username, next);
  return next;
}

async function addMemberPointsWithBackend(username, points, reason){
  const next = addMemberPoints(username, points);
  try{
    const res = await fetch("/api/members/add-points/", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({username, points, reason})
    });
    const data = await res.json();
    if(data.ok && data.member){
      setMemberPointBalance(username, Number(data.member.points));
      return Number(data.member.points);
    }
  }catch(err){
    console.warn("點數同步失敗，暫時使用本機點數");
  }
  return next;
}


function getMemberExp(username){
  const orders = JSON.parse(localStorage.getItem("easybuy_orders")) || [];
  return orders
    .filter(order => order.member === username)
    .reduce((sum, order) => sum + Number(order.total || 0), 0);
}

function getLevelByExp(exp){
  if(exp >= 5000){
    return { name:"鑽石級", next:null, min:5000, coupon:"DIAMOND300", discount:300 };
  }
  if(exp >= 3000){
    return { name:"白金級", next:5000, min:3000, coupon:"PLATINUM200", discount:200 };
  }
  if(exp >= 1500){
    return { name:"黃金級", next:3000, min:1500, coupon:"GOLD150", discount:150 };
  }
  if(exp >= 500){
    return { name:"白銀級", next:1500, min:500, coupon:"SILVER80", discount:80 };
  }
  return { name:"青銅級", next:500, min:0, coupon:"BRONZE30", discount:30 };
}

function getAvailableLevelCoupons(exp){
  const levels = [
    { name:"青銅級", need:0, code:"BRONZE30", discount:30, text:"折抵 NT$30" },
    { name:"白銀級", need:500, code:"SILVER80", discount:80, text:"折抵 NT$80" },
    { name:"黃金級", need:1500, code:"GOLD150", discount:150, text:"折抵 NT$150" },
    { name:"白金級", need:3000, code:"PLATINUM200", discount:200, text:"折抵 NT$200" },
    { name:"鑽石級", need:5000, code:"DIAMOND300", discount:300, text:"折抵 NT$300" }
  ];

  return levels.map(level => ({
    ...level,
    unlocked: exp >= level.need
  }));
}

function getMemberCoupons(username){
  const all = JSON.parse(localStorage.getItem("easybuy_member_coupons")) || {};
  return all[username] || [];
}

function saveMemberCoupons(username, coupons){
  const all = JSON.parse(localStorage.getItem("easybuy_member_coupons")) || {};
  all[username] = coupons;
  localStorage.setItem("easybuy_member_coupons", JSON.stringify(all));
}

function claimLevelCoupon(code){
  if(localStorage.getItem("isLogin") !== "true"){
    alert("請先登入會員");
    return;
  }

  const username = localStorage.getItem("loginUser");
  const exp = getMemberExp(username);
  const available = getAvailableLevelCoupons(exp);
  const target = available.find(c => c.code === code);

  if(!target || !target.unlocked){
    alert("目前等級不足，無法領取此優惠券");
    return;
  }

  let coupons = getMemberCoupons(username);

  if(coupons.find(c => c.code === code)){
    alert("你已經領取過這張優惠券");
    return;
  }

  coupons.push({
    code: target.code,
    level: target.name,
    discount: target.discount,
    text: target.text,
    claimedAt: new Date().toLocaleString(),
    used: false
  });

  saveMemberCoupons(username, coupons);
  alert("優惠券領取成功！");
  updateMemberPage();
}

function renderMemberCoupons(username){
  const couponList = document.getElementById("memberCouponList");
  if(!couponList) return;

  const coupons = getMemberCoupons(username);

  if(coupons.length === 0){
    couponList.innerHTML = "目前沒有優惠券";
    return;
  }

  couponList.innerHTML = coupons.map(coupon => `
    <div class="coupon-card ${coupon.used ? "used" : ""}">
      <strong>${coupon.code}</strong>
      <span>${coupon.text}</span>
      <small>來源：${coupon.level}｜${coupon.claimedAt}</small>
      <small>${coupon.used ? "狀態：已使用" : "狀態：未使用"}</small>
    </div>
  `).join("");
}

function renderLevelCouponArea(username){
  const area = document.getElementById("levelCouponArea");
  if(!area) return;

  const exp = getMemberExp(username);
  const owned = getMemberCoupons(username);
  const coupons = getAvailableLevelCoupons(exp);

  area.innerHTML = coupons.map(c => {
    const already = owned.find(o => o.code === c.code);
    return `
      <div class="coupon-card ${c.unlocked ? "" : "locked"}">
        <strong>${c.name}｜${c.code}</strong>
        <span>${c.text}</span>
        <small>需求經驗值：${c.need} EXP</small>
        <button onclick="claimLevelCoupon('${c.code}')" ${!c.unlocked || already ? "disabled" : ""}>
          ${already ? "已領取" : c.unlocked ? "領取優惠券" : "等級不足"}
        </button>
      </div>
    `;
  }).join("");
}

function applyMemberCoupon(code){
  const username = localStorage.getItem("loginUser");
  const coupons = getMemberCoupons(username);
  const found = coupons.find(c => c.code === code && !c.used);

  if(!found){
    alert("找不到可使用的會員優惠券");
    return;
  }

  coupon = { code: found.code, memberCoupon:true };
  localStorage.setItem("easybuy_coupon", JSON.stringify(coupon));
  renderCart();
  renderOrderCart();
  renderAvailableCoupons();
}



function renderMemberPointSummary(username){
  const box = document.getElementById("memberPointSummary");
  if(!box) return;

  const balance = getMemberPointBalance(username);
  box.innerHTML = `
    <div class="point-balance-card">
      <div>
        <span class="point-label">目前可用點數</span>
        <strong>${balance}</strong>
      </div>
      <small>消費 NT$10 可獲得 1 點；每日登入與簽到也能增加點數。</small>
    </div>
  `;
}

function renderPointCouponArea(username){
  const area = document.getElementById("pointCouponArea");
  if(!area) return;

  const balance = getMemberPointBalance(username);
  area.innerHTML = POINT_COUPON_REWARDS.map(reward => {
    const enough = balance >= reward.cost;
    return `
      <div class="coupon-card point-reward-card ${enough ? "" : "locked"}">
        <strong>${reward.code}</strong>
        <span>${reward.text}</span>
        <small>需要點數：${reward.cost} 點｜${reward.note}</small>
        <button onclick="redeemPointCoupon('${reward.code}')" ${enough ? "" : "disabled"}>
          ${enough ? "兌換優惠券" : `還差 ${reward.cost - balance} 點`}
        </button>
      </div>
    `;
  }).join("");
}

async function redeemPointCoupon(code){
  if(localStorage.getItem("isLogin") !== "true"){
    alert("請先登入會員");
    return;
  }

  const username = localStorage.getItem("loginUser");
  const reward = POINT_COUPON_REWARDS.find(r => r.code === code);
  if(!reward) return;

  const balance = getMemberPointBalance(username);
  if(balance < reward.cost){
    alert(`會員點數不足，還差 ${reward.cost - balance} 點`);
    return;
  }

  let couponData = {
    code: reward.code,
    level: "點數兌換",
    discount: reward.discount,
    text: reward.text,
    cost: reward.cost,
    claimedAt: new Date().toLocaleString(),
    used: false
  };

  try{
    const res = await fetch("/api/members/redeem-points/", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({username, rewardCode:code})
    });
    const data = await res.json();
    if(!data.ok){
      alert(data.error || "兌換失敗");
      return;
    }
    if(data.member) setMemberPointBalance(username, Number(data.member.points));
    if(data.coupon) couponData = data.coupon;
  }catch(err){
    // 後端沒有啟動時仍可在前端展示功能，但實際專案啟動 Django 後會由後端扣點。
    setMemberPointBalance(username, balance - reward.cost);
  }

  const coupons = getMemberCoupons(username);
  coupons.push(couponData);
  saveMemberCoupons(username, coupons);

  alert(`${reward.code} 兌換成功！`);
  updateMemberPage();
  renderAvailableCoupons();
}

function updateMemberPage(){
  const status = document.getElementById("memberStatus");
  const info = document.getElementById("memberInfo");
  const stats = document.getElementById("memberStats");

  if(!status && !info && !stats) return;

  if(localStorage.getItem("isLogin") !== "true"){
    if(status) status.innerHTML = "尚未登入";
    if(info) info.innerHTML = "登入後會顯示會員資料";
    if(stats) stats.innerHTML = "";
    return;
  }

  const loginUser = localStorage.getItem("loginUser") || "";
  const member = getMembers().find(m => m.username === loginUser);
  const orders = JSON.parse(localStorage.getItem("easybuy_orders")) || [];
  const myOrders = orders.filter(order => order.member === loginUser);
  const totalSpent = myOrders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const exp = getMemberExp(loginUser);
  const levelInfo = getLevelByExp(exp);
  const nextText = levelInfo.next ? `距離下一級還差 ${levelInfo.next - exp} EXP` : "已達最高等級";
  const checkinCount = Number(localStorage.getItem("checkinCount_" + loginUser) || 0);
  const favs = getFavorites()
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

  if(status) status.innerHTML = `目前已登入：${loginUser}`;

  if(info && member){
    info.innerHTML = `
      會員帳號：${member.username}<br>
      會員姓名：${member.name}<br>
      註冊時間：${member.createdAt}
    `;
  }

  if(stats){
    stats.innerHTML = `
      <div class="stats-grid">
        <div><strong>${levelInfo.name}</strong><br>會員等級</div>
        <div><strong>${exp}</strong><br>目前經驗值<br><small>NT$1 = 1 EXP</small></div>
        <div><strong>${getMemberPointBalance(loginUser)}</strong><br>會員點數<br><small>可兌換優惠券</small></div>
        <div><strong>${myOrders.length}</strong><br>累積訂單</div>
        <div><strong>${checkinCount}</strong><br>累積簽到</div>
      </div>
      <div class="level-progress">
        <div>${nextText}</div>
        <div class="progress-bar"><span style="width:${levelInfo.next ? Math.min(100, Math.floor((exp-levelInfo.min)/(levelInfo.next-levelInfo.min)*100)) : 100}%"></span></div>
      </div>
      <h3>收藏商品</h3>
      <div class="favorite-list">
        ${favs.length === 0 ? "目前沒有收藏商品" : favs.map(p => `${p.emoji} ${p.name}`).join("<br>")}
      </div>
    `;
  }

  const badgeArea = document.getElementById("badgeArea");
  if(badgeArea){
    const badges = getBadges(levelInfo.name, myOrders.length, checkinCount);
    badgeArea.innerHTML = `<h3>會員勳章</h3>` + badges.map(b => `<span class="badge">${b}</span>`).join("");
  }

  renderAvatar();

  renderMemberPointSummary(loginUser);
  renderPointCouponArea(loginUser);
  renderMemberCoupons(loginUser);
  renderLevelCouponArea(loginUser);
}


function toggleCouponList(){
  const dropdown = document.getElementById("couponDropdown");
  if(!dropdown) return;

  dropdown.classList.toggle("show");
  renderAvailableCoupons();
}

function cancelCoupon(){
  coupon = null;
  localStorage.removeItem("easybuy_coupon");
  renderCart();
  renderOrderCart();
  renderAvailableCoupons();
}

function renderAvailableCoupons(){
  const list = document.getElementById("availableCouponList");
  const selected = document.getElementById("selectedCouponText");

  if(!list && !selected) return;

  if(selected){
    selected.innerHTML = coupon ? `目前使用：${coupon.code}` : "目前未使用優惠券";
  }

  if(!list) return;

  if(localStorage.getItem("isLogin") !== "true"){
    list.innerHTML = `
      <div class="coupon-empty">
        請先登入會員，才能查看優惠券。
        <br>
        <a href="member_login.html">前往登入</a>
      </div>
    `;
    return;
  }

  const username = localStorage.getItem("loginUser");
  const coupons = getMemberCoupons(username).filter(c => !c.used);

  if(coupons.length === 0){
    list.innerHTML = `
      <div class="coupon-empty">
        目前沒有可使用的優惠券。<br>
        可到會員中心依照會員等級領取。
      </div>
    `;
    return;
  }

  list.innerHTML = `
    ${coupons.map(c => `
      <div class="coupon-option ${coupon && coupon.code === c.code ? "selected" : ""}" onclick="applyMemberCoupon('${c.code}')">
        <div>
          <strong>${c.code}</strong>
          <span>${c.text}</span>
          <small>來源：${c.level}</small>
        </div>
        <button type="button">使用</button>
      </div>
    `).join("")}
    <button class="cancel-coupon-btn" type="button" onclick="cancelCoupon()">不使用優惠券</button>
  `;
}


// ===== 第一批：輪播、排行榜、最近瀏覽、滿額免運、運費 =====
let bannerIndex = 0;
const banners = [
  {title:"EASYBUY 年中慶", text:"滿 NT$999 免運，熱門商品限時優惠"},
  {title:"新會員優惠", text:"加入會員即可累積 EXP，提升等級領優惠券"},
  {title:"生活市集精選", text:"食飲品、日用品、電子用品一次買齊"}
];

function renderBanner(){
  const box = document.getElementById("bannerContent");
  if(!box) return;
  const b = banners[bannerIndex];
  box.innerHTML = `<h2>${b.title}</h2><p>${b.text}</p>`;
}

function nextBanner(){
  bannerIndex = (bannerIndex + 1) % banners.length;
  renderBanner();
}

function prevBanner(){
  bannerIndex = (bannerIndex - 1 + banners.length) % banners.length;
  renderBanner();
}

setInterval(nextBanner, 4000);

function getSales(){
  return JSON.parse(localStorage.getItem("easybuy_sales")) || {};
}

function saveSales(sales){
  localStorage.setItem("easybuy_sales", JSON.stringify(sales));
}

function updateSalesFromOrder(order){
  const sales = getSales();
  order.items.forEach(item => {
    sales[item.id] = (sales[item.id] || 0) + item.quantity;
  });
  saveSales(sales);
  renderRanking();
}

function renderRanking(){
  const box = document.getElementById("rankingList");
  if(!box) return;

  const sales = getSales();
  const list = products
    .map(p => ({...p, sold:sales[p.id] || 0}))
    .sort((a,b) => b.sold - a.sold)
    .slice(0,5);

  if(list.every(p => p.sold === 0)){
    box.innerHTML = "目前還沒有銷售資料";
    return;
  }

  box.innerHTML = list.map((p,i) => `
    <div class="rank-item">
      <strong>TOP ${i+1}</strong> ${p.emoji} ${p.name}
      <span>已售 ${p.sold}</span>
    </div>
  `).join("");
}

function getRecentViews(){
  return JSON.parse(localStorage.getItem("easybuy_recent_views")) || [];
}

function addRecentView(id){
  let list = getRecentViews();
  list = list.filter(x => x !== id);
  list.unshift(id);
  list = list.slice(0,5);
  localStorage.setItem("easybuy_recent_views", JSON.stringify(list));
  renderRecentViews();
}

function renderRecentViews(){
  const box = document.getElementById("recentList");
  if(!box) return;

  const list = getRecentViews()
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

  if(list.length === 0){
    box.innerHTML = "目前沒有瀏覽紀錄";
    return;
  }

  box.innerHTML = list.map(p => `
    <div class="recent-item" onclick="showProductDetail(${p.id})">
      ${p.emoji} ${p.name}
    </div>
  `).join("");
}

// ===== 第二批：每日獎勵、簽到、頭像、EXP條、勳章 =====
function todayKey(){
  return new Date().toISOString().slice(0,10);
}

function getLoginUser(){
  return localStorage.getItem("loginUser") || "";
}

function addExpToMember(username, exp){
  // 這裡保留舊函式名稱，但現在用途是增加會員點數。
  return addMemberPoints(username, exp);
}

async function dailyReward(){
  const user = getLoginUser();
  if(!user){ alert("請先登入"); return; }

  const key = "dailyReward_" + user;
  if(localStorage.getItem(key) === todayKey()){
    alert("今天已經領過每日登入獎勵");
    return;
  }

  localStorage.setItem(key, todayKey());
  await addMemberPointsWithBackend(user, 20, "每日登入獎勵");
  alert("領取成功：+20 會員點數");
  updateMemberPage();
}

async function checkIn(){
  const user = getLoginUser();
  if(!user){ alert("請先登入"); return; }

  const key = "checkin_" + user;
  const countKey = "checkinCount_" + user;

  if(localStorage.getItem(key) === todayKey()){
    document.getElementById("checkinStatus").innerHTML = "今天已經簽到過";
    return;
  }

  const count = Number(localStorage.getItem(countKey) || 0) + 1;
  localStorage.setItem(key, todayKey());
  localStorage.setItem(countKey, count);
  await addMemberPointsWithBackend(user, 30, "會員簽到");

  document.getElementById("checkinStatus").innerHTML = `簽到成功！累積簽到 ${count} 天，會員點數 +30`;

  if(count % 3 === 0){
    let coupons = getMemberCoupons(user);
    const code = "CHECKIN50";
    coupons.push({
      code,
      level:"簽到獎勵",
      discount:50,
      text:"折抵 NT$50",
      claimedAt:new Date().toLocaleString(),
      used:false
    });
    saveMemberCoupons(user, coupons);
    alert("連續簽到獎勵：獲得 CHECKIN50 優惠券");
  }

  updateMemberPage();
}

function uploadAvatar(event){
  const file = event.target.files[0];
  const user = getLoginUser();
  if(!file || !user) return;

  const reader = new FileReader();
  reader.onload = function(e){
    localStorage.setItem("avatar_" + user, e.target.result);
    renderAvatar();
  };
  reader.readAsDataURL(file);
}

function renderAvatar(){
  const box = document.getElementById("memberAvatar");
  if(!box) return;

  const user = getLoginUser();
  const data = localStorage.getItem("avatar_" + user);

  if(data){
    box.innerHTML = `<img src="${data}" alt="avatar">`;
  }else{
    box.innerHTML = "🙂";
  }
}

function getBadges(levelName, ordersCount, checkinCount){
  const badges = ["新手買家"];
  if(ordersCount >= 1) badges.push("首次下單");
  if(ordersCount >= 3) badges.push("回購達人");
  if(checkinCount >= 3) badges.push("簽到達人");
  if(["黃金級","白金級","鑽石級"].includes(levelName)) badges.push("高級會員");
  if(levelName === "鑽石級") badges.push("鑽石傳說");
  return badges;
}


function renderReviewList(productId){
  const reviews = getReviews(productId);
  if(reviews.length === 0){
    return `<div class="review-empty">目前尚無評價。只有完成訂單後，才能留下商品評價。</div>`;
  }

  return `
    <h3>商品評價</h3>
    ${reviews.slice(-3).reverse().map(r => `
      <div class="review-item">
        <strong>${r.user}</strong>
        <span>${getRatingStars(r.stars)} ${r.stars}/5</span>
        <p>${r.text}</p>
        <small>${r.createdAt || ""}</small>
      </div>
    `).join("")}
  `;
}

function animateCartFly(emoji){
  const fly = document.createElement("div");
  fly.className = "cart-fly";
  fly.textContent = emoji || "🛒";
  document.body.appendChild(fly);

  setTimeout(() => fly.classList.add("move"), 10);
  setTimeout(() => fly.remove(), 900);
}

function renderFavoritesPage(){
  const grid = document.getElementById("favoriteGrid");
  if(!grid) return;

  const favIds = getFavorites()
    .map(f => typeof f === "object" ? String(f.id) : String(f))
    .filter(Boolean);

  const favs = favIds
    .map(id => products.find(p => String(p.id) === String(id)))
    .filter(Boolean);

  if(favIds.length === 0){
    grid.innerHTML = `<div class="empty-result">目前沒有收藏商品</div>`;
    return;
  }

  if(favs.length === 0){
    grid.innerHTML = `<div class="empty-result">已有收藏紀錄，但商品資料尚未載入，請重新整理頁面。</div>`;
    return;
  }

  grid.innerHTML = favs.map(product => {
    const packageNote = renderCardPackageHint(product);
    const actionButton = `<button class="add-btn" onclick="handleCardAddToCart(${product.id})">加入購物車</button>`;

    return `
    <div class="product-card fade-card">
      <div class="product-img" onclick="showProductDetail(${product.id})">${product.emoji || "🛒"}</div>
      <h3>${product.name}</h3>
      <p>${product.desc || ""}</p>
      <div class="rating">${getRatingStars(getAverageRating(product.id))} <span>${getAverageRating(product.id)}</span></div>
      <div class="price" id="favoritePrice_${product.id}">${getCardPriceText(product)}</div>
      ${packageNote}
      ${actionButton}
      <button class="detail-btn" onclick="showProductDetail(${product.id})">查看詳情</button>
      <button class="remove-fav-btn" onclick="toggleFavorite(${product.id})">移除收藏</button>
    </div>
  `;
  }).join("");
}

function protectMemberPage(){
  const fileName = window.location.pathname.split("/").pop();

  if(fileName === "member.html" && localStorage.getItem("isLogin") !== "true"){
    alert("請先登入會員！");
    window.location.href = "member_login.html";
  }
}

function updateNavbar(){
  const nav = document.getElementById("memberNav");
  if(!nav) return;

  const isLogin = localStorage.getItem("isLogin") === "true";
  const loginUser = localStorage.getItem("loginUser") || "";

  if(isLogin){
    nav.innerHTML = `
      <a href="member.html">${loginUser}</a>
      <a href="#" onclick="logout()">登出</a>
    `;
  }else{
    nav.innerHTML = `
      <a href="#" onclick="goMemberCenter()">會員中心</a>
      <a href="member_login.html">登入</a>
    `;
  }
}

function goMemberCenter(){
  if(localStorage.getItem("isLogin") === "true"){
    window.location.href = "member.html";
  }else{
    alert("尚未登入，請先登入會員！");
    window.location.href = "member_login.html";
  }
}

function toast(text){
  let box = document.getElementById("toastBox");
  if(!box){
    box = document.createElement("div");
    box.id = "toastBox";
    document.body.appendChild(box);
  }

  box.textContent = text;
  box.classList.add("show");

  setTimeout(() => box.classList.remove("show"), 1400);
}


// ===== 第三批：訂單追蹤、取消、再次購買、評價 =====
function getOrderStatus(order){
  if(order.cancelled) return "已取消";
  return order.status || "處理中";
}

async function cancelOrder(orderNo){
  try{
    const res = await fetch("/api/orders/cancel/", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({orderNo})
    });
    const data = await res.json();

    if(!data.ok){
      alert(data.error || "此訂單無法取消");
      return;
    }

    alert("訂單已取消");
    if(document.getElementById("myOrdersResult")) showMyOrders();
    if(document.getElementById("searchPhone") && document.getElementById("searchPhone").value.trim() !== "") searchOrder();
  }catch(err){
    alert("後端連線失敗，請確認 Django 伺服器是否已啟動");
  }
}

function buyAgain(orderNo){
  window.backendOrders = window.backendOrders || {};
  const localOrders = JSON.parse(localStorage.getItem("easybuy_orders")) || [];
  const o = window.backendOrders[orderNo] || localOrders.find(x => x.orderNo === orderNo);
  if(!o) return;
  cart = o.items.map(item => makeCartItemFromOrderItem(item));
  saveCart();
  renderCart();
  alert("商品已重新加入購物車");
  window.location.href = "index.html";
}

function escapeForJs(text){
  return String(text || "")
    .replaceAll("\\", "\\\\")
    .replaceAll("'", "\\'")
    .replaceAll("\n", " ");
}
function findOrderByNo(orderNo){
  window.backendOrders = window.backendOrders || {};
  const localOrders = JSON.parse(localStorage.getItem("easybuy_orders")) || [];
  return window.backendOrders[orderNo] || localOrders.find(order => order.orderNo === orderNo);
}

function isOrderOwner(order){
  const loginUser = localStorage.getItem("loginUser") || "";
  return localStorage.getItem("isLogin") === "true" && loginUser !== "" && order.member === loginUser;
}

function isOrderCompleted(order){
  const status = getOrderStatus(order);
  return status === "已送達" || status === "已完成";
}

function canReviewOrder(order){
  return Boolean(order && !order.cancelled && isOrderOwner(order) && isOrderCompleted(order));
}

function getReviewHint(order){
  if(!order) return "";
  if(order.cancelled) return "已取消的訂單不可評價。";
  if(!isOrderOwner(order)) return "只有購買此訂單的會員可以評價商品。";
  if(!isOrderCompleted(order)) return "訂單完成（狀態為已送達）後，才可以評價商品。";
  return "";
}

function hasOrderReview(orderNo, productId){
  const reviews = getReviews(productId);
  return reviews.some(review => review.orderNo === orderNo);
}

function addReviewFromOrder(orderNo, productId, itemName){
  const order = findOrderByNo(orderNo);

  if(!canReviewOrder(order)){
    alert(getReviewHint(order) || "此訂單目前不能評價");
    return;
  }

  const purchased = (order.items || []).some(item => String(item.id) === String(productId));
  if(!purchased){
    alert("此商品不在該筆訂單中，無法評價");
    return;
  }

  if(hasOrderReview(orderNo, productId)){
    alert("這筆訂單中的此商品已經評價過");
    return;
  }

  const starInput = prompt("請輸入評分 1~5 分");
  if(starInput === null) return;

  const stars = Math.max(1, Math.min(5, Number(starInput) || 5));
  const text = prompt(`請輸入「${itemName || "商品"}」的商品評價`);
  if(!text) return;

  const reviews = JSON.parse(localStorage.getItem("easybuy_reviews")) || {};
  if(!reviews[productId]) reviews[productId] = [];

  reviews[productId].push({
    user: localStorage.getItem("loginUser") || "會員",
    text,
    stars,
    orderNo,
    createdAt: new Date().toLocaleString()
  });

  localStorage.setItem("easybuy_reviews", JSON.stringify(reviews));
  alert("評價成功");
  renderProducts();
  if(document.getElementById("myOrdersResult")) showMyOrders();
  if(document.getElementById("searchPhone") && document.getElementById("searchPhone").value.trim() !== "") searchOrder();
}

function addReview(productId){
  alert("請到會員中心或訂單查詢中，於完成訂單後再評價商品。");
}

function getReviews(productId){
  const reviews=JSON.parse(localStorage.getItem("easybuy_reviews"))||{};
  return reviews[productId]||[];
}


function getSelectedShippingMethod(){
  const checked = document.querySelector('input[name="shippingMethod"]:checked');
  return checked ? checked.value : "store";
}

async function loadProductsFromBackend(){
  try{
    const res = await fetch("/api/products/");
    const data = await res.json();
    if(data.ok && Array.isArray(data.products) && data.products.length > 0){
      products = data.products;
      attachPackageOptionsToProducts();
      ensureCartData();
    }
  }catch(err){
    console.warn("商品 API 讀取失敗，暫時使用前端內建商品資料");
  }
}

async function easybuyInit(){
  await loadProductsFromBackend();
  attachPackageOptionsToProducts();
  ensureCartData();
  protectMemberPage();
  renderProducts();
  renderCart();
  renderOrderCart();
  renderAvailableCoupons();
  updateNavbar();
  if(localStorage.getItem("isLogin") === "true"){
    await syncMemberInfo(localStorage.getItem("loginUser") || "");
  }
  updateMemberPage();
}

easybuyInit();
