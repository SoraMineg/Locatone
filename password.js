function first() {
    
    var user = prompt("君の名前を入力して");
    if (user == false || user == null) {
      alert("もういちど君の名前を入力して");
      first(); // 再帰的に呼び出して再入力を促す
    } else {
    }
    
    var pass = prompt(" ▷ようこそ ”" + user + "”さん、ストーリーで受け取ったパスワード（テヌート）を入力して");
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
  