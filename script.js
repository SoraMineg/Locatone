document.addEventListener("DOMContentLoaded", function () {
  const installBtn = document.getElementById("installBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  // 「アプリをインストール」ボタンをクリックでポップアップ表示
  installBtn.addEventListener("click", function () {
    popup.style.display = "block";
  });

  // 「閉じる」ボタンをクリックでポップアップ非表示
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
});