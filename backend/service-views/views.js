// service-views/views.js

// 重設計數
let viewCount = 0;

// 呼叫該方法為計數加一
const increaseViewCount = () => {
  viewCount++;
};

// 取得當前計數
const getViewCount = () => {
  return viewCount;
};

// 將方法匯出
module.exports = {
  increaseViewCount,
  getViewCount,
};
