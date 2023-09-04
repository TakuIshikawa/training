//よくある質問のアコーディオン
const faqQuastion = document.querySelectorAll('.wrapper-faqList .faqQuastion');
const faqAnser = document.querySelectorAll('.wrapper-faqList .faqAnser');
const options = {
  duration: 300,
  fill: 'forwards',
}

for (let i = 0; i < faqQuastion.length; i++) {
  const faqAnserHeight = faqAnser[i].offsetHeight;
  if (i !== 0) {
    faqAnser[i].classList.toggle('close');
    faqAnser[i].style.maxHeight = '0px';
  }
  faqQuastion[i].addEventListener('click', () => {

    faqAnser[i].classList.toggle('close');

    if (faqAnser[i].classList.contains('close')) {
      faqAnser[i].animate({ maxHeight: [`${faqAnserHeight}px`, '0px'] }, options);
    } else {
      faqAnser[i].animate({ maxHeight: ['0px', `${faqAnserHeight}px`] }, options);
    };
  });
};

//スライダー設定
const mySwiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  spaceBetween: 15,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3.5,
      spaceBetween: 25,
    },
  },

  autoplay: {
    delay: 5000,
  },
  speed: 2000,
});




//フォームの送信ボタン活性処理
const YourName = document.querySelector('#name');
const email = document.querySelector('#email');
const contactDetail = document.querySelector('#contactDetail');
const agreePrivacy = document.querySelector('#agreePrivacy');
const submit = document.querySelector('input[type=submit]');
const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('click', () => {
  if (YourName.value !== "" && email.value !== "" && contactDetail.value !== "" && agreePrivacy.checked === true) {
    submit.disabled = false;
    submit.classList.remove('disable');

  } else {
    submit.disabled = true;
    submit.classList.add('disable');

  }
});
