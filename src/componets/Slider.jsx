import React from "react";

function Slider() {
  const cards = document.querySelectorAll(".card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;
  let interval;

  function showCard(index) {
    cards.forEach((card) => {
      card.style.transform = `translateX(-${index * 100}%)`;
    });
  }

  function showNextCard() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    showCard(currentIndex);
  }

  function showPrevCard() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - 1;
    }
    showCard(currentIndex);
  }

  prevBtn.addEventListener("click", () => {
    clearInterval(interval); // Hentikan otomatisasi ketika tombol diklik
    showPrevCard();
  });

  nextBtn.addEventListener("click", () => {
    clearInterval(interval); // Hentikan otomatisasi ketika tombol diklik
    showNextCard();
  });

  // Fungsi untuk menggeser kartu secara otomatis setiap 3 detik
  function autoSlide() {
    interval = setInterval(() => {
      showNextCard();
    }, 3000); // Ganti kartu setiap 3 detik (3000 milidetik)
  }

  autoSlide(); // Mulai otomatisasi saat halaman dimuat

  return (
    <>
      <div class="slider">
        <div class="card" data-card="1">
          <img src="assets/img/skill/adobephotoshop-color.svg" alt="Image 1" />
          <p>Adobe Photoshop</p>
        </div>
        <div class="card" data-card="2">
          <img
            src="assets/img/skill/adobeillustrator-color.svg"
            alt="Image 2"
          />
          <p>Adobe Illustrator</p>
        </div>
        <div class="card" data-card="3">
          <img src="assets/img/skill/coreldraw_icon_132464.svg" alt="Image 3" />
          <p>CorelDraw</p>
        </div>
        <div class="card" data-card="4">
          <img src="assets/img/skill/canva-color.svg" alt="Image 4" />
          <p>Canva</p>
        </div>
        <div class="card" data-card="5">
          <img src="assets/img/skill/figma-color.svg" alt="Image 5" />
          <p>Figma</p>
        </div>
        <div class="card" data-card="6">
          <img src="assets/img/skill/blender-color.svg" alt="Image 6" />
          <p>Blender</p>
        </div>
        <div class="card" data-card="7">
          <img src="assets/img/skill/html5-color.svg" alt="Image 7" />
          <p>HTML</p>
        </div>
        <div class="card" data-card="8">
          <img src="assets/img/skill/css3-color.svg" alt="Image 8" />
          <p>CSS</p>
        </div>
        <div class="card" data-card="9">
          <img src="assets/img/skill/javascript-color.svg" alt="Image 9" />
          <p>JavaScript</p>
        </div>
        <div class="card" data-card="10">
          <img src="assets/img/skill/react-color.svg" alt="Image 10" />
          <p>React JS</p>
        </div>
        <div class="card" data-card="11">
          <img src="assets/img/skill/tailwindcss-color.svg" alt="Image 11" />
          <p>Tailwind CSS</p>
        </div>
        <div class="card" data-card="12">
          <img src="assets/img/skill/bootstrap-color.svg" alt="Image 12" />
          <p>Bootstrap</p>
        </div>
        <div class="card" data-card="13">
          <img src="assets/img/skill/elixir-color.svg" alt="Image 13" />
          <p>Elixir</p>
        </div>
        <div class="card" data-card="14">
          <img
            src="assets/img/skill/phoenixframework-color.svg"
            alt="Image 14"
          />
          <p>Phoenix Framework</p>
        </div>
        <div class="card" data-card="15">
          <img src="assets/img/skill/astro-color.svg" alt="Image 15" />
          <p>Astro</p>
        </div>
      </div>

      <div class="slider-button">
        <button class="sbutton" id="prevBtn">
          <i class="ri-arrow-left-s-line"></i>
        </button>
        <button class="sbutton" id="nextBtn">
          <i class="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </>
  );
}

export default Slider;
