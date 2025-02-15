function first() {
    
    var user = prompt("君の名前を入力して");
    if (user == false || user == null) {
      window.location.href = "index.html"; // 飛ばしたいURLに変更
        return;
    } else {
    }
    
    var pass = prompt(" ▷ようこそ ”" + user + "”さん、ストーリーで受け取ったパスワードを入力して");
    var passWord = "テヌート"; // 正しいパスワード
  
    if (pass == passWord) {
      alert("正解だ。おめでとう");
    } else {
      alert("アクセスに失敗した。もう一度頼む");
      first(); // パスワードが間違っている場合に再度呼び出し
    }
  }
  
  // ページ読み込み時に実行
  window.onload = first;
  