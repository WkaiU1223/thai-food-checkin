/* =========================================================
   資料區：這裡放所有偶像/CP 與餐廳資料。
   以後新增/修改店家，只需要編輯這個檔案，不用碰 index.html。

   idols：左側選單會顯示的偶像/CP。
     - id：自己取一個英文代號（不能重複），restaurants 要用這個 id 對應
     - name：顯示名稱
     - color：這位偶像/CP 的代表色（地圖圖釘顏色），用 #xxxxxx 格式

   restaurants：每一筆是一個打卡點。
     - id：不能重複的數字，新增時用下一個號碼就好
     - name / city：店名 / 城市
     - lat / lng：座標。在 Google 地圖上對著店家點右鍵 →
                  選「這是哪裡」或看網址列，就會看到經緯度數字
     - idolIds：這間店是誰去過的，可以填一個或多個，
                對應上面 idols 裡的 id
     - emoji：卡片上顯示的小圖示，隨意換
     - desc：簡短介紹
     - visitTime：到訪時間或場合
     - source：情報來源連結（IG限動截圖網址、Vlog連結、討論串等）
                ⚠️ 務必填有根據的來源，不要憑印象亂填

   目前下面是「示範假資料」，正式使用前請整批換成
   你自己查證過的真實情報。
   ========================================================= */

const idols = [
  { id: "momo",   name: "MOMO",           color: "#e8a33d" },
  { id: "cp_a",   name: "示範 CP・甲乙戀", color: "#c1440e" },
  { id: "idol_b", name: "示範藝人 B",      color: "#0d4f45" },
];

const restaurants = [
  {
    id: 1,
    name: "示範店家：Jay Fai 街頭米其林一星",
    city: "曼谷",
    lat: 13.7524, lng: 100.5019,
    idolIds: ["momo"],
    emoji: "🍳",
    desc: "示範資料：據傳曾在限動出現的街邊熱炒名店，以蟹肉蛋捲聞名，通常需要排隊或提前訂位。",
    visitTime: "2024 年某次泰國行（示範）",
    source: "https://www.google.com/search?q=Jay+Fai",
  },
  {
    id: 2,
    name: "示範店家：Thipsamai 老字號泰式炒河粉",
    city: "曼谷",
    lat: 13.7522, lng: 100.5016,
    idolIds: ["momo", "cp_a"],
    emoji: "🍜",
    desc: "示範資料：曼谷經典泰式炒河粉創始店之一，招牌是包蛋皮的古早味 Pad Thai。",
    visitTime: "示範時間",
    source: "https://www.google.com/search?q=Thipsamai",
  },
  {
    id: 3,
    name: "示範店家：Chatuchak 週末市集小吃區",
    city: "曼谷",
    lat: 13.7998, lng: 100.5501,
    idolIds: ["idol_b"],
    emoji: "🥭",
    desc: "示範資料：假日限定超大型市集，適合放進『順路巡禮』路線，芒果糯米飯攤位密集。",
    visitTime: "示範時間",
    source: "https://www.google.com/search?q=Chatuchak+Weekend+Market",
  },
  {
    id: 4,
    name: "示範店家：Warorot Market 清邁在地市場",
    city: "清邁",
    lat: 18.7883, lng: 98.9931,
    idolIds: ["momo", "idol_b"],
    emoji: "🌶️",
    desc: "示範資料：清邁在地人愛去的傳統市場，可以感受非觀光區的日常泰北美食。",
    visitTime: "示範時間",
    source: "https://www.google.com/search?q=Warorot+Market",
  },
  {
    id: 5,
    name: "示範店家：Nimman 區質感咖啡廳",
    city: "清邁",
    lat: 18.7961, lng: 98.9682,
    idolIds: ["cp_a"],
    emoji: "☕",
    desc: "示範資料：清邁文青區的人氣咖啡廳，適合安排成半天悠閒行程的中繼點。",
    visitTime: "示範時間",
    source: "https://www.google.com/search?q=Nimman+cafe+Chiang+Mai",
  },
  {
    id: 6,
    name: "示範店家：Phuket Old Town 街邊小吃",
    city: "普吉島",
    lat: 7.8853, lng: 98.3903,
    idolIds: ["momo"],
    emoji: "🦐",
    desc: "示範資料：普吉舊城區葡萄牙風建築街，週日夜市有大量海鮮與甜點攤位。",
    visitTime: "示範時間",
    source: "https://www.google.com/search?q=Phuket+Old+Town",
  },
];
