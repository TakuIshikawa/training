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

menuSP.addEventListener('click', openMenu);


// ボタンのスムーススクロール
//querySelectorAllメソッドを使用してページ内のhref属性が#で始まるものを選択
//forEachメソッドを使って、各アンカータグにクリックされた時の処理
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        // PCの場合、headerの高さを取得し、headerHeightに代入
        // SPの場合、headerなしのため、headerHeightに0を代入
        const windowInnerWidth = window.innerWidth;
        let headerHeight = 0;
        if (windowInnerWidth >= 768) {
            headerHeight = document.querySelector('header').offsetHeight;
        } else {
            headerHeight = 0;
        };

        // クリックされたときのデフォルトの挙動を防ぐ
        e.preventDefault();

        // クリックされたアンカータグのhref属性を取得
        const href = anchor.getAttribute('href');

        // href属性の#を取り除いた部分と一致するIDを取得
        const target = document.getElementById(href.replace('#', ''));

        //取得した要素の位置を取得するために、getBoundingClientRect()を呼び出し、ページ上の位置を計算。
        //headerの高さを引いて、スクロール位置がヘッダーの下になるように調整します。
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

