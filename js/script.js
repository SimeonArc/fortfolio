// 사이드바 클릭 이벤트
const aside = document.querySelector(".aside");
const menuItems = document.querySelectorAll(".imgbox");
let menuState = 0; // 0: 기본, 1: 텍스트만, 2: 완전 축소

// 스크롤 따라다니는 건 position: fixed 로 이미 처리됨

// 클릭 시 메뉴 토글
aside.addEventListener("click", () => {
  menuState = (menuState + 1) % 3;

  aside.classList.remove("text-only", "collapsed");
  if (menuState === 1) {
    aside.classList.add("text-only");
  } else if (menuState === 2) {
    aside.classList.add("collapsed");
  }
});

// 클릭 시 해당 섹션으로 스크롤 이동
menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation(); // 사이드 전체 클릭 방지
    const targetId = item.getAttribute("data-target");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
//슬라이딩 베너
const track = document.querySelector(".sliding-track");
const clone = track.innerHTML;
track.innerHTML += clone; // 텍스트를 반복시켜서 무한 루프 효과

// 탭 전환
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const tabName = tab.dataset.tab;
    document.querySelectorAll(".video-cards").forEach((cards) => {
      cards.classList.remove("active");
    });
    document.getElementById(tabName).classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 🎯 [1] 커리어 배너 탭 동작
  const careerItems = document.querySelectorAll(".career-left li");
  const careerRight = document.querySelector(".career-right");
  const textBox = document.querySelector(".text-box");

  const textData = {
    education:
      "📚 계명대학교 미생물학과 중퇴 (📅 2012 - 2017) \n📚 원광디지털대학교 전통공연예술학과 졸업 (📅 2017 - 2019)",
    experience: "💼 꿈꾸는씨어터 공연기획자, 영상감독(2019-2024)\n🛠",
    certification:
      "📜 문화예술교육사 2급 (2021)\n🔹 한국문화예술교육진흥원 (2021)",
  };

  careerItems.forEach((item) => {
    item.addEventListener("click", function () {
      careerItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");

      const type = item.getAttribute("data-type");
      if (textData[type]) {
        textBox.textContent = textData[type];
        careerRight.style.display = "block";
        careerRight.style.opacity = "1";
      }
    });
  });

  // 🎯 [2] edit-banner 탭 클릭 시 섹션 전환
  const motionTab = document.querySelector(".motion-tab");
  const recTab = document.querySelector(".rec-tab");
  const codeTab = document.querySelector(".code-tab");

  const section2 = document.getElementById("section-2");
  const section3 = document.getElementById("section-3");
  const section4 = document.getElementById("section-4");

  function hideAllSections() {
    section2.classList.add("hidden");
    section3.classList.add("hidden");
    section4.classList.add("hidden");
  }

  motionTab.addEventListener("click", () => {
    hideAllSections();
    section2.classList.remove("hidden");
  });

  recTab.addEventListener("click", () => {
    hideAllSections();
    section3.classList.remove("hidden");
  });

  codeTab.addEventListener("click", () => {
    hideAllSections();
    section4.classList.remove("hidden");
  });

  // 🎯 [3] 비디오 카드 클릭 시 모달 표시
  const thumbnails = document.querySelectorAll(".thumbnail-wrap");
  const modal = document.getElementById("videoModal");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDesc = modal.querySelector(".modal-desc");
  const closeBtn = modal.querySelector(".close-btn");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", (e) => {
      e.preventDefault();

      const title = thumb.querySelector("h4").textContent;
      const desc = thumb.querySelector("p").textContent;

      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
