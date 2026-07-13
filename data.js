/* =========================================================
   資料區：這裡放所有偶像/CP 與餐廳資料。
   以後新增/修改店家，只需要編輯這個檔案，不用碰 index.html。

   idols：左側選單會顯示的偶像/CP。
     - id：英文代號（不能重複），restaurants 要用這個 id 對應
     - name：顯示名稱
     - color：這位偶像/CP 的代表色（地圖圖釘顏色），用 #xxxxxx 格式

   restaurants：每一筆是一個打卡點，新增時直接複製最下面的
   「複製這一整塊來新增」範本，貼上、填好資料即可。
     - id：不能重複的數字，新增時用下一個號碼就好
     - name / city：店名 / 城市
     - lat / lng：座標。在 Google 地圖上對著店家點右鍵 →
                  選「這是哪裡」，或看網址列的數字
     - idolIds：這間店是誰去過的，可以填一個或多個，
                對應上面 idols 裡的 id，例如 ["milklove"]
                或 ["milklove","namtanfilm"]
     - emoji：卡片上顯示的小圖示，隨意換，例如 🍜🍳🥭☕🦐🌶️
     - desc：簡短介紹
     - visitTime：到訪時間或場合
     - source：情報來源連結（IG限動截圖網址、Vlog連結、討論串等）
                ⚠️ 務必填有根據的來源，不要憑印象亂填

   目前 restaurants 是空的，網站打開會顯示「這個組合目前
   還沒有打卡資料」，這是正常的，新增第一筆之後就會出現。
   ========================================================= */

const idols = [
  { id: "momo",          name: "MOMO",          color: "#e8a33d" },
  { id: "namtanfilm",    name: "NamtanFilm",    color: "#0d4f45" },
  { id: "emibonnie",     name: "EmiBonnie",     color: "#b5482a" },
  { id: "viewmim",       name: "ViewMim",       color: "#2f6f4e" },
  { id: "janjingjing",   name: "JanJingjing",   color: "#a3405a" },
  { id: "junemewnich",   name: "JuneMewnich",   color: "#d98c3f" },
  { id: "kapookciize",   name: "KapookCiize",   color: "#4a6fa5" },
  { id: "pahnfond",      name: "PahnFond",      color: "#8e4585" },
  { id: "lmsy",          name: "LMSY",          color: "#b06fa0" },
  { id: "lillybelle",    name: "LillyBelle",    color: "#cf8b2f" },
  { id: "nilenamwan",    name: "NileNamwan",    color: "#3f7d6b" },
  { id: "lingorm",       name: "LingOrm",       color: "#5a9c8a" },
  { id: "lenamiu",       name: "LenaMiu",       color: "#9c2f2f" },
  { id: "oombam",        name: "OomBam",        color: "#6b8e3f" },
  { id: "ginjay",        name: "GinJay",        color: "#8fae5f" },
  { id: "applemim",      name: "AppleMim",      color: "#b0562f" },
  { id: "mewrenee",      name: "MewRenee",      color: "#35618f" },
  { id: "englot",        name: "EngLot",        color: "#d9633f" },
  { id: "freenbecky",    name: "FreenBecky",    color: "#6f4e37" },
  { id: "kaojane",       name: "KaoJane",       color: "#7a6a2f" },
];

const restaurants = [

  {
    id: 1,
    name: "Vanich House",
    city: "曼谷",
    lat: 13.734977539894306, lng: 100.51155088733033,
    idolIds: ["emibonnie"],
    emoji: "🧋",
    desc: "VLOG OF US [Part 1]",
    visitTime: "到訪時間或場合",
    source: "https://www.youtube.com/watch?v=iuZ8Ebi9Plg&t=495s",
  },

];
