/*=====================================================
ローカルストレージから値を取ってきてセットする関数
=====================================================*/
function setItemsCard(q, k, m, id) {
  let q_moji = localStorage.getItem('question' + id);
  q.value = q_moji;
  let moji = localStorage.getItem('moji' + id);
  k.textContent = moji;
  let m_moji = localStorage.getItem('memo' + id);
  m.textContent = m_moji;
}


/*=====================================================
新しいカードを作る関数
=====================================================*/
let content = new Array;
content[0] = {};

function createNewCard(space, id) {
  content[id] = {};
  let html_str = '';
  html_str += `<li class="card">
                <input class="question" type="text" size="130" placeholder="ここに質問文をコピペ">
                <textarea rows="10" cols="130" placeholder="ここに回答を入力" class="kaito"></textarea>
                <p class="moji_num">文字数</p>
                <textarea class="memo" rows="10" cols="130"    placeholder="メモゾーン"></textarea>
                <button class="reset">リセット</button>
              </li>`;
  space.insertAdjacentHTML('afterbegin', html_str);

  const hyoji = document.querySelector(".moji_num"); //文字数の表示
  const kaito = document.querySelector(".kaito"); //回答ボックス
  const reset = document.querySelector(".reset"); //リセットボタン
  const question = document.querySelector(".question"); //質問文ボックス
  const memo = document.querySelector(".memo"); //メモボックス

  //書いたものをローカルストレージにセットする
  question.addEventListener("change", function () {
    content[id].question = question.value;
    localStorage.setItem('question' + id, content[id].question);
    localStorage.setItem('id', id);
  })
  kaito.addEventListener("change", function () {
    content[id].kaito = kaito.value;
    hyoji.textContent = kaito.value.length + "文字";
    localStorage.setItem('moji' + id, content[id].kaito);
  })
  memo.addEventListener("change", function () {
    content[id].memo = memo.value;
    localStorage.setItem('memo' + id, content[id].memo);
  })

  //リセットボタンの処理---------------------------------------
  reset.addEventListener('click', function () {
    localStorage.removeItem('question' + id);
    question.value = '';
    localStorage.removeItem('moji' + id);
    kaito.value = '';
    localStorage.removeItem('memo' + id);
    memo.value = '';
  })

  //リロードの時
  setItemsCard(question, kaito, memo, id);
}

/*=====================================================
DOM読み込み後の処理(メイン処理)
=====================================================*/
document.addEventListener("DOMContentLoaded", function () {

  const card_space = document.getElementById("card_space"); //カードul
  let id = 0; //カードの管理番号
  //リロード時の処理---------------------------------------
  window.onload = function () {
    setItemsCard(question, kaito, memo, 0);
    let card_num = localStorage.getItem('id');
    id = Number(card_num);
    console.log(id);
    if (card_num > 0) {
      for (let i = 1; i <= card_num; i++) {
        createNewCard(card_space, i);
      }
    }
  }

  //読み込み----------------------------------------------
  const hyoji = document.querySelector(".moji_num"); //文字数の表示
  const kaito = document.querySelector(".kaito"); //回答ボックス
  const reset = document.querySelector(".reset"); //リセットボタン
  const question = document.querySelector(".question"); //質問文ボックス
  const memo = document.querySelector(".memo"); //メモボックス



  //検索--------------------------------------------------
  const search_result = document.querySelector('.search_result'); //検索結果ゾーン
  search_box.addEventListener('change', function () {
    //検索対象の質問文を配列に格納
    const targets_collection = document.querySelectorAll('.question');
    let targets = new Array;
    for (let i = 0; i < targets_collection.length; i++) {
      targets[i] = targets_collection[i].value;
    }
    const search_box = document.getElementById("search_box"); //検索ボックス
    let search_results = new Array; //結果を入れる配列
    let search_word = search_box.value; //検索ワード
    let result_str = '';
    console.log(targets);

    for (let j = 0; j < targets.length; j++) {
      if (targets[j].indexOf(search_word) != -1) {
        search_results.push(targets[j]);
      }
    }
    for (let j = 0; j < search_results.length; j++) {
      result_str += '<p>' + search_results[j] + '</p>';
    }
    search_result.innerHTML = result_str;
    console.log(result_str);
  })

  //書いたものをローカルストレージにセットする
  question.addEventListener("change", function () {
    content[id].question = question.value;
    localStorage.setItem('question' + id, content[id].question);
    //質問文はいつも入力するはずなので，この時idも保存する
    localStorage.setItem('id', id);
  })
  kaito.addEventListener("change", function () {
    content[id].kaito = kaito.value;
    hyoji.textContent = kaito.value.length + "文字";
    localStorage.setItem('moji' + id, content[id].kaito);
  })
  memo.addEventListener("change", function () {
    content[id].memo = memo.value;
    localStorage.setItem('memo' + id, content[id].memo);
  })

  //リセットボタンの処理---------------------------------------
  reset.addEventListener('click', function () {
    localStorage.removeItem('question' + id);
    question.value = '';
    localStorage.removeItem('moji' + id);
    kaito.value = '';
    localStorage.removeItem('memo' + id);
    memo.value = '';
  })

  //カード追加するボタン---------------------------------------
  const card_btn = document.querySelector(".add_card");

  card_btn.addEventListener("click", function () {
    id++;
    createNewCard(card_space, id);

  })
  //--------------------------------------------------------


}, false);
