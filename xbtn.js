document.addEventListener("DOMContentLoaded", function () {
    const installBtnB = document.getElementById("installBtnB"); // 別のボタンIDにする
    const popupB = document.querySelector('.x-popup[data-type="b"]'); // ポップアップB取得
    const closeBtnB = popupB.querySelector(".closeBtn"); // 閉じるボタン

    // 初期状態ではポップアップを非表示
    popupB.style.display = "none";

    // 「Locatone公式」ボタンでポップアップBを開閉
    installBtnB.addEventListener("click", function () {
        popupB.style.display = (popupB.style.display === "none" || popupB.style.display === "") ? "block" : "none";
    });

    // 「閉じる」ボタンでポップアップBを閉じる
    closeBtnB.addEventListener("click", function () {
        popupB.style.display = "none";
    });
});
