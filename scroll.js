let isPopupShown = false; // ポップアップがすでに表示されているかを管理

// スクロールイベントの設定
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY; // 現在のスクロール位置
  const triggerPosition = 1; // ポップアップを表示するスクロール位置(px)

  if (scrollPosition >= triggerPosition && !isPopupShown) {
    showPopup();
    isPopupShown = true; // ポップアップが一度だけ表示されるように
  }
});

// ポップアップを表示する関数
function showPopup() {
  const popup = document.querySelector('.password-popup[data-type="c"]'); // data-type="c" のポップアップを取得
  if (popup) {
    popup.style.display = "flex"; // ポップアップを表示
    document.documentElement.style.overflow = "hidden"; // スクロールを無効化
    document.body.style.overflow = "hidden"; // スクロールを無効化
  }
}

// スクロール解除関数
function unlockScroll() {
  const popup = document.querySelector('.password-popup[data-type="c"]'); // data-type="c" のポップアップを取得
  if (popup) {
    document.documentElement.style.overflow = "auto"; // スクロール可能に
    document.body.style.overflow = "auto"; // スクロール可能に
    popup.style.display = "none"; // ポップアップを非表示
  }
}
