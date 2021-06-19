const sliderInit = (classes) => {
  let position = 0;

  const slidesToShow = classes.properties.slidesToShow;
  const slidesToScroll = 1;
  const container = document.querySelector(classes.element.container);
  const track = document.querySelector(classes.element.track);
  const btnPrev = document.querySelector(classes.element.btnPrev);
  const btnNext = document.querySelector(classes.element.btnNext);
  const items = document.querySelectorAll(classes.element.items);
  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  const sliderWidth = slidesToShow * itemWidth;
  const containerWidth = itemWidth * itemsCount - sliderWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.addEventListener("click", () => {
    const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener("click", () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };
  checkBtns();
};

sliderInit({
  element: {
    container: ".certificate__block",
    track: ".slider__track",
    btnPrev: ".btn__prev",
    btnNext: ".btn__next",
    items: ".certificate",
  },
  properties: {
    slidesToShow: 3,
  },
});

// ---------------------------------------------------------------

const initModal = () => {
  const imgs = document.querySelectorAll(".certificate");
  const modal = document.querySelector(".modal");

  const activeImg = (img) => {
    let image = document.createElement("img");
    image.src = img.src;
    image.className = "hidden__img";
    modal.append(image);
  };

  imgs.forEach((img) => {
    img.addEventListener("click", () => {
      modal.classList.add("visible");
      activeImg(img);
    });
  });

  const closeModal = () => {
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      modal.classList.remove("visible");
      modal.lastChild.remove();
    });
  };
  closeModal();
};

initModal();

// ========================================

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [50.39389829634761, 30.49043290628555],
    zoom: 17,
  });
}

// ========================================

const initMap = () => {
  const map = document.querySelector(".description__map");
  const modal = document.querySelector(".modal");
  const maps = document.querySelector(".maps");
  const close = document.querySelector(".close");

  map.addEventListener("click", () => {
    modal.classList.add("visible");
    maps.classList.add("active_map");
  });

  close.addEventListener("click", () => {
    modal.classList.remove("visible");
    maps.classList.remove("active_map");
  });
};

initMap();

// ----------------------

const open = () => {
  document.getElementById("menu").classList.toggle("show");
};

document.getElementById("trigger").addEventListener("click", () => {
  open();
});
