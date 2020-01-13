//WebFont
document.write('<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet">');

/*-----------------------------------------------------
htmlを出力する関数
-----------------------------------------------------*/

function createCard(){
  let card_html="";
  card_html = `<div class="card">
            <input class="question" type="text" size="130" placeholder="ここに質問文をコピペ">
        
            <textarea rows="10" cols="130" placeholder="ここに回答を入力" class="kaito"></textarea>
        
            <p class="moji_num">文字数</p>
        
            <textarea class="memo" rows="10" cols="130"    placeholder="メモゾーン"></textarea>
            
            <button class="reset">リセット</button>
        </div>`;
  document.write(card_html);
}


/*=====================================================
メイン処理
=====================================================*/
createCard();

const hyoji = document.querySelector(".moji_num")
const kaito = document.querySelector(".kaito");
const reset = document.querySelector(".reset");
const question = document.querySelector(".question");
const memo = document.querySelector(".memo");

//リロード時の処理--------------------------------
window.onload = function(){
    let q_moji = localStorage.getItem('question');
    question.value = q_moji;
    let moji = localStorage.getItem('moji');
    kaito.textContent = moji;
    let m_moji = localStorage.getItem('memo');
    memo.textContent = m_moji;
}
//---------------------------------------------


question.addEventListener("change",function(){
  if(question.value.length>0){
    localStorage.setItem('question',question.value);
  }
})

kaito.addEventListener("change", function()
{
    hyoji.textContent = kaito.value.length + "文字";
    localStorage.setItem('moji',kaito.value);
})

memo.addEventListener("change", function(){
    localStorage.setItem('memo',memo.value);
})

reset.addEventListener('click',function(){
  localStorage.removeItem('question');
  question.value='';
  localStorage.removeItem('moji');
  kaito.textContent='';
  localStorage.removeItem('memo');
  memo.textContent='';
})

//カード追加するボタン
document.addEventListener("DOMContentLoaded", function(){
  const card_btn = document.querySelector(".add_card");
  card_btn.addEventListener("click",function(){
    createCard();
  })
}, false);