
// 자바스크립트 -모달이미지 수정
// 1. 프로젝트 상세 데이터
const projectData = {
  res_1: {
    title: "기업형 반응형 웹사이트1",
    tags: ["Media Query", "HTML5", "CSS3"],
    edu: "Design responsive website production.",
    img: "./img/work01.jpg",
  },
  res_2: {
    title: "기업형 반응형 웹사이트2",
    tags: ["Media Query", "HTML5", "CSS3"],
    edu: "'Design responsive website production",
    img: "./img/work2.jpg",
  },
  res_3: {
    title: "기업형 반응형 웹사이트3",
    tags: ["Media Query", "HTML5", "CSS3"],
    edu: "'Fluid Grid(유동형 그리드)'의 원리를 설명하기 위해 제작된 정석적인 반응형 웹사이트입니다.",
    img: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Responsive+Project+01",
  },
  pc_1: {
    title: "Admin Dashboard UI",
    tags: ["Data Table", "Charts"],
    edu: "Design responsive website production",
    img: "./img/work3.jpg",
  },
  pc_2: {
    title: "공공기관 웹 접근성 사이트",
    tags: ["W3C", "Accessibility"],
    edu: "스크린 리더기와 키보드 내비게이션 등 웹 표준 및 접근성 준수 과정을 위한 모범 사례입니다.",
    img: "./img/work4.jpg",
  },
  pc_3: {
    title: "One-Page Interaction Site",
    tags: ["jQuery", "ScrollMagic"],
    edu: "PC 환경에서 시선을 사로잡는 비주얼 인터렉션 구현 중심의 포트폴리오입니다.",
    img: "https://via.placeholder.com/800x600/ffc107/ffffff?text=PC+Web+Project+03",
  },
  ux_1: {
    title: "Delivery App Design",
    tags: ["Figma", "User Flow"],
    edu: "사용자 여정 지도(User Journey Map)를 그려 페인포인트를 해결하는 과정 중심의 UX 디자인입니다.",
    img: "https://via.placeholder.com/800x600/198754/ffffff?text=Figma+Design+01",
  },
  ux_2: {
    title: "Travel Guide Prototype",
    tags: ["Interactive", "Prototype"],
    edu: "피그마의 고급 프로토타이핑 기능을 사용하여 실제 앱과 유사한 구동 방식을 구현했습니다.",
    img: "https://via.placeholder.com/800x600/20c997/ffffff?text=Figma+Design+02",
  },
  ux_3: {
    title: "Design System Library",
    tags: ["Variant", "Auto Layout"],
    edu: "협업 효율을 극대화하는 컴포넌트 구조화 및 디자인 시스템 교육을 위해 설계되었습니다.",
    img: "https://via.placeholder.com/800x600/0dcaf0/ffffff?text=Figma+Design+03",
  },
  etc_1: {
    title: "Visual Graphic Gallery",
    tags: ["Banner", "Book Cover"],
    edu: "포토샵 그래픽 디자인 결과물입니다.",
    img: "https://via.placeholder.com/800x600/adb5bd/ffffff?text=Graphics+Gallery",
  },
  etc_2: {
    title: "Visual Graphic Gallery",
    tags: ["Banner", "Book Cover"],
    edu: "일러스트 그래픽 디자인 결과물입니다.",
    img: "https://via.placeholder.com/800x600/adb5bd/ffffff?text=Graphics+Gallery",
  },
  etc_3: {
    title: "Visual Graphic Gallery",
    tags: ["Banner", "Book Cover"],
    edu: "포토샵 그래픽 디자인 결과물입니다.",
    img: "https://via.placeholder.com/800x600/adb5bd/ffffff?text=Graphics+Gallery",
  },
  etc_4: {
    title: "Visual Graphic Gallery",
    tags: ["Banner", "Book Cover"],
    edu: "일러스트 그래픽 디자인 결과물입니다.",
    img: "https://via.placeholder.com/800x600/adb5bd/ffffff?text=Graphics+Gallery",
  },
};




// 4. 모달 로직
const modal = document.getElementById("modalContainer");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.onclick = function () {
    const d = projectData[this.getAttribute("data-id")];
    if (d) {
      modalBody.innerHTML = `
                <div>${d.tags
                  .map((t) => `<span class="tag">#${t}</span>`)
                  .join("")}</div>
                <h2 style="margin:15px 0; font-size:2rem;">${d.title}</h2>
                <div class="edu-note"><strong>💡 Instructor's Point:</strong> ${
                  d.edu
                }</div>
                <img src="${d.img}" alt="work">
            `;
      modal.style.display = "block";
      setTimeout(() => modal.classList.add("active"), 10);
      fullpage_api.setAllowScrolling(false);
    }
  };
});

window.onclick = (e) => {
  if (e.target == modal || e.target.classList.contains("close-btn")) {
    modal.classList.remove("active");
    setTimeout(() => (modal.style.display = "none"), 400);
    fullpage_api.setAllowScrolling(true);
  }
};








