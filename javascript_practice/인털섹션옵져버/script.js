// script.js
const COUNT = 30;     // 처음에 스크롤 생기도록 넉넉히
let itemIndex = 0;

const list = document.querySelector(".list");
const end = document.querySelector(".end");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    // 아이템 묶음 추가
    for (let i = itemIndex; i < itemIndex + COUNT; i++) {
      const item = document.createElement("p");
      item.textContent = i;
      item.classList.add("item"); // className += 대신 classList.add
      list.appendChild(item);
    }
    itemIndex += COUNT;
  });
}, {
  root: null,              // 뷰포트 기준
  rootMargin: "120px 0px", // 약간 미리 로드(부드럽게)
  threshold: 0             // 1px만 보여도 트리거
});


observer.observe(end);


(function seed() {
  const seedEntries = [{ isIntersecting: true, target: end }];
  observer.callback ? observer.callback(seedEntries, observer) : null;
})();
