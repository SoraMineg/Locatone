document.addEventListener("DOMContentLoaded", function () {
    const installBtn = document.getElementById("installBtn"); // インストールボタン
    const popupA = document.querySelector('.popup[data-type="a"]'); // ポップアップA取得
    const closeBtnA = popupA.querySelector(".closeBtn"); // 閉じるボタン

    // 初期状態ではポップアップを非表示
    popupA.style.display = "none";

    // 「アプリをインストール」ボタンでポップアップAを開閉
    installBtn.addEventListener("click", function () {
        popupA.style.display = (popupA.style.display === "none" || popupA.style.display === "") ? "block" : "none";
    });

    // 「閉じる」ボタンでポップアップAを閉じる
    closeBtnA.addEventListener("click", function () {
        popupA.style.display = "none";
    });
});

