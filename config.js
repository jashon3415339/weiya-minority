// ================================================================
//  少數決大逃殺 — 設定檔（用記事本打開修改，存檔時選 UTF-8）
// ================================================================
window.GAME_CONFIG = {
  // ① Firebase 設定：直接從「手機賽馬」的 config.js 複製 firebase 這一整段過來貼上
  //    （同一個 Firebase 專案，不用重新建立）
  //    還沒換掉 PASTE_... 之前，遊戲會以「DEMO 單機試玩模式」執行。
  firebase: {
    apiKey: "AIzaSyAONdwzgIzxjFT0-eDIoKekToNUh4bMcC0",
    authDomain: "weiya-2026-15529.firebaseapp.com",
    databaseURL: "https://weiya-2026-15529-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "weiya-2026-15529",
    appId: "1:925908014479:web:6218bf40ad3ee80162e7fa"
  },

  // ② 主持人 Email：跟手機賽馬用同一個主持人帳號即可
  hostEmail: "host@weiya2026.com",

  // ③ 遊戲預設值（大螢幕「⚙ 設定」裡也可以臨時改）
  answerSec: 10,          // 每題作答秒數
  winnersMax: 3,          // 存活人數 ≤ 這個數字時遊戲結束
  questionOrder: "random",// "random" 隨機出題；"sequence" 照 questions.js 的順序出題

  // ④ 進階（一般不用改）
  dbRoot: "minority",     // 資料庫裡的資料夾名稱，跟其他遊戲分開
  pollMs: 1500,           // 手機多久問一次遊戲狀態（毫秒）
  leadMs: 2000,           // 按「下一題」後，留給手機收到題目的準備時間（毫秒）
  graceMs: 800,           // 倒數結束後，伺服器多等多久讓「路上的答案」抵達（毫秒）
  phoneUrl: ""            // 手機網址（留空會自動判斷；QR Code 不對時才需要填）
};
