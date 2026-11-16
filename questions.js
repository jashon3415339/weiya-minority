// ================================================================
//  少數決大逃殺 — 題庫
//  新增題目：複製一整段 { ... }, 貼在最後一題後面，改文字即可。
//  每題一定要有 zh / en / vi 三種語言的「題目」和「三個選項」。
//  注意：每段 { } 後面要有逗號；文字要用英文雙引號 " " 包起來。
// ================================================================
window.QUESTIONS = [
  { zh: "吃火鍋先下？", en: "Hot pot: what goes in first?", vi: "Ăn lẩu, bỏ gì vào trước?",
    o: { zh: ["肉", "菜", "餃類"], en: ["Meat", "Veggies", "Dumplings"], vi: ["Thịt", "Rau", "Sủi cảo, viên"] } },

  { zh: "早上起床第一件事？", en: "First thing after waking up?", vi: "Việc đầu tiên khi thức dậy?",
    o: { zh: ["看手機", "上廁所", "賴床"], en: ["Check phone", "Bathroom", "Stay in bed"], vi: ["Xem điện thoại", "Đi vệ sinh", "Nằm nướng"] } },

  { zh: "珍奶的珍珠？", en: "Pearls in your bubble tea?", vi: "Trân châu trong trà sữa?",
    o: { zh: ["多一點", "正常", "不要"], en: ["Extra", "Normal", "None"], vi: ["Thêm nhiều", "Bình thường", "Không lấy"] } },

  { zh: "襪子穿法？", en: "Putting on socks?", vi: "Mang tất chân nào trước?",
    o: { zh: ["先左腳", "先右腳", "看心情"], en: ["Left foot first", "Right foot first", "Depends on mood"], vi: ["Chân trái trước", "Chân phải trước", "Tùy hứng"] } },

  { zh: "下雨天比較想？", en: "On a rainy day, you'd rather…?", vi: "Trời mưa thì thích làm gì?",
    o: { zh: ["睡覺", "吃東西", "滑手機"], en: ["Sleep", "Eat", "Scroll phone"], vi: ["Ngủ", "Ăn uống", "Lướt điện thoại"] } },

  { zh: "便當最後吃？", en: "Lunch box: what do you eat last?", vi: "Ăn cơm hộp, để gì ăn cuối?",
    o: { zh: ["主菜", "白飯", "配菜"], en: ["Main dish", "Rice", "Side dishes"], vi: ["Món chính", "Cơm trắng", "Món phụ"] } },

  { zh: "洗澡先洗？", en: "In the shower, what first?", vi: "Khi tắm, rửa chỗ nào trước?",
    o: { zh: ["頭", "臉", "身體"], en: ["Hair", "Face", "Body"], vi: ["Gội đầu", "Rửa mặt", "Tắm người"] } },

  { zh: "選超能力？", en: "Pick a superpower?", vi: "Chọn siêu năng lực?",
    o: { zh: ["瞬間移動", "隱形", "讀心術"], en: ["Teleport", "Invisibility", "Mind reading"], vi: ["Dịch chuyển tức thời", "Tàng hình", "Đọc suy nghĩ"] } },

  { zh: "粽子派系？", en: "Zongzi (rice dumpling) team?", vi: "Phe bánh ú (bánh tét Đài Loan)?",
    o: { zh: ["北部粽", "南部粽", "都不吃"], en: ["Northern style", "Southern style", "Neither"], vi: ["Kiểu miền Bắc", "Kiểu miền Nam", "Không ăn"] } },

  { zh: "中樂透第一件事？", en: "Win the lottery — first thing?", vi: "Trúng số, việc đầu tiên?",
    o: { zh: ["辭職", "買房", "裝沒事繼續上班"], en: ["Quit my job", "Buy a house", "Act normal, keep working"], vi: ["Nghỉ việc", "Mua nhà", "Giả vờ như không, đi làm tiếp"] } },

  { zh: "鳳梨披薩？", en: "Pineapple pizza?", vi: "Pizza dứa?",
    o: { zh: ["可以", "不行", "沒吃過"], en: ["Yes", "No way", "Never tried"], vi: ["Được", "Không được", "Chưa ăn bao giờ"] } },

  { zh: "放假最想？", en: "On a day off, you most want to…?", vi: "Ngày nghỉ muốn làm gì nhất?",
    o: { zh: ["出國", "在家耍廢", "補眠"], en: ["Travel abroad", "Laze at home", "Catch up on sleep"], vi: ["Đi nước ngoài", "Ở nhà lười biếng", "Ngủ bù"] } },

  { zh: "吃薯條沾？", en: "Dip your fries in…?", vi: "Khoai tây chiên chấm gì?",
    o: { zh: ["番茄醬", "冰淇淋", "什麼都不沾"], en: ["Ketchup", "Ice cream", "Nothing"], vi: ["Tương cà", "Kem", "Không chấm gì"] } },

  { zh: "手機電量剩多少會焦慮？", en: "Phone battery: when do you panic?", vi: "Pin điện thoại còn bao nhiêu thì bắt đầu lo?",
    o: { zh: ["50%", "20%", "5%"], en: ["50%", "20%", "5%"], vi: ["50%", "20%", "5%"] } },

  { zh: "老闆突然走過來，你會？", en: "The boss suddenly walks over. You…?", vi: "Sếp bất ngờ đi tới, bạn sẽ?",
    o: { zh: ["假裝很忙", "打招呼", "繼續做自己的事"], en: ["Pretend to be busy", "Say hi", "Keep doing my thing"], vi: ["Giả vờ bận rộn", "Chào hỏi", "Cứ làm việc của mình"] } },
];
