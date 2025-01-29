document.addEventListener("DOMContentLoaded", function () {
    const installBtn = document.getElementById("installBtn");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    // 初期状態ではポップアップを非表示
    popup.style.display = "none";

    // 「アプリをインストール」ボタンをクリックでポップアップ表示・非表示
    installBtn.addEventListener("click", function () {
        // ポップアップが表示されていない場合は表示し、表示されている場合は非表示
        if (popup.style.display === "block") {
            popup.style.display = "none";
        } else {
            popup.style.display = "block";
        }
    });

    // 「閉じる」ボタンをクリックでポップアップ非表示
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
