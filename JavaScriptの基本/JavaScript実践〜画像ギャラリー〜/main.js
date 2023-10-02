/**
 * ギャラリーを初期化する
 *
 * @param {HTMLElement} root ギャラリー全体のルート要素
 */
function initGallery(root) {
    // サムネイル画像
    const thumbnails = root.querySelectorAll('[data-gallery-image]');

    // メイン画像のIDをサムネイルから取得
    const targetIds = Array.prototype.map.call(thumbnails, tn => {
        return "#" + tn.getAttribute('data-gallery-image');
    });

    // メイン画像
    const mainImages = root.querySelectorAll(targetIds.join(','));

    // サムネイルのクリックイベントハンドラ
    function onClickThumbnail() {
        // まずメイン画像をすべて隠す
        mainImages.forEach(image => {
            image.classList.remove('active');
        });

        // 表示するメイン画像のIDを取得する
        const id = mainImages[0].id;

        // 表示するメイン画像を取得する
        const target = document.querySelector(`#${id}`);

        // 要素があったら表示する
        target != null ? target.classList.add('active') : true;

    };

    thumbnails.forEach(tn => {
        tn.addEventListener('click', function () {
            mainImages.forEach(image => {
                image.classList.remove('active');
            });

            // // 表示するメイン画像のIDを取得する
            const id = tn.getAttribute('data-gallery-image');
            // // 表示するメイン画像を取得する
            const showImg = document.querySelector(`#${id}`);
            // // メイン画像を表示する
            showImg.classList.add('active');
        });
    });
};

const elem = document.getElementById('myGallery');
initGallery(elem);