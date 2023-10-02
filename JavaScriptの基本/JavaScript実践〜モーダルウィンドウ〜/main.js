/**
 * モーダルの開閉を制御する
 */
document.querySelectorAll('[data-modal-open]').forEach(elem => {
    // 開閉する対象の要素を取得する
    const targetModalId = document.querySelector("#modal1");
    const modal = document.querySelector(".modal-header");

    // 閉じる
    modal.querySelectorAll('[data-modal-close]').forEach(closeElem => {
        closeElem.addEventListener('click', function () {
            elem.classList.toggle("modal-close");
            targetModalId.classList.toggle("is-open");
        });
    });

    // 開く
    elem.addEventListener('click', function () {
        elem.classList.toggle("modal-close");
        targetModalId.classList.toggle("is-open");
    });
});