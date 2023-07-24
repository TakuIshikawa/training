//ヘッダー追従処理
const header = document.querySelector('header');
const showHeight = document.querySelector('.firstView').offsetHeight / 2;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth >= 768) {
        if (scrollY >= showHeight) {
            header.classList.add('header-fixed');
        } else if (scrollY <= 0) {
            header.classList.remove('header-fixed');
        }
    };
});


//ハンバーガメニュータップ処理
const menuSP = document.querySelector('.menuSP');
const menuSPBar = document.querySelector('.menuSPBar');
const menuSPList = document.querySelector('.menuSPList');

const openMenu = () => {
    menuSPBar.classList.toggle('menuSP-open');
    header.classList.toggle('menuSP-open');
    menuSPList.classList.toggle('menuSP-open');
};

menuSP.addEventListener('click' ,openMenu);



//メニューボタン着地位置調整
const menuButtonToFeatures = document.querySelector('#menuButtonToFeatures');
const menuButtonToPrice = document.querySelector('#menuButtonToPrice');
const menuButtonToContact = document.querySelector('#menuButtonToContact');
const menuButtonToContactEnf = document.querySelector('#menuButtonToContactEnf');

const scrollmenu = () => {
    setTimeout( () => {
        scrollBy(0, -94);}
      , 0);
};

menuButtonToFeatures.addEventListener('click' ,scrollmenu);
menuButtonToPrice.addEventListener('click' ,scrollmenu);
menuButtonToContact.addEventListener('click' ,scrollmenu);
menuButtonToContactEnf.addEventListener('click' ,scrollmenu);




