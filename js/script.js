const careerItems = document.querySelectorAll(".career-left li");
console.log(careerItems);
const careerRight = document.querySelector(".career-right");
const textBox = document.querySelector(".text-box");

const textData = {
  education: "📚 서울대학교 컴퓨터공학과 졸업\n📅 2009 - 2013",
  experience:
    "💼 삼성전자 SW 엔지니어 (2013-2018)\n🛠 LG전자 선임 개발자 (2018-2023)",
  certification:
    "📜 정보처리기사 (2012)\n🔹 AWS Certified Solutions Architect (2020)",
};

careerItems.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("click");

    // 기존 활성화된 탭에서 active 제거
    careerItems.forEach((el) => el.classList.remove("active"));

    // 현재 클릭된 요소에 active 추가
    this.classList.add("active");

    const type = item.getAttribute("data-type");

    if (textData[type]) {
      textBox.textContent = textData[type];

      // career-right 보이게 설정
      careerRight.style.display = "block";
      careerRight.style.opacity = "1";
    }
  });
});

// 요소 가져오기
const videoCard = document.getElementById("videoCard");
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");

// 클릭 시 모달 열기
videoCard.addEventListener("click", function () {
  videoModal.style.display = "flex";
  modalVideo.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; // 자동 재생
});

// 닫기 버튼 클릭 시 모달 닫기
closeModal.addEventListener("click", function () {
  videoModal.style.display = "none";
  modalVideo.src = ""; // 영상 정지
});

// 모달 영역 바깥 클릭 시 닫기
window.addEventListener("click", function (event) {
  if (event.target === videoModal) {
    videoModal.style.display = "none";
    modalVideo.src = ""; // 영상 정지
  }
});
