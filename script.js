//WebFont
document.write('<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet">');

/*-----------------------------------------------------
htmlを出力する関数
-----------------------------------------------------*/
let card_html="";

function createCard(){
  card_html += `<div class="card">
            <input class="question" type="text" size="130" placeholder="ここに質問文をコピペ">
        
            <textarea rows="10" cols="130" placeholder="ここに回答を入力" class="kaito"></textarea>
        
            <p class="moji_num">文字数</p>
        
            <textarea class="memo" rows="10" cols="130"    placeholder="メモゾーン"></textarea>
            
            <button class="reset">リセット</button>
        </div>`;
  document.write(card_html);
}



/*=====================================================
DOM読み込み後の処理
=====================================================*/
document.addEventListener("DOMContentLoaded", function(){

  //リロード時の処理---------------------------------------
  window.onload = function(){
    let q_moji = localStorage.getItem('question'+id);
    question.value = q_moji;
    let moji = localStorage.getItem('moji'+id);
    kaito.textContent = moji;
    let m_moji = localStorage.getItem('memo'+id);
    memo.textContent = m_moji;
  }
  //-----------------------------------------------------

  const hyoji = document.querySelector(".moji_num")
  const kaito = document.querySelector(".kaito");
  const reset = document.querySelector(".reset");
  const question = document.querySelector(".question");
  const memo = document.querySelector(".memo");
  
  let content = new Array;
  content[0] = {};
  let id=0; //カードの管理番号
  
  //書いたものをローカルストレージにセットする
  question.addEventListener("change",function(){
    content[id].question = question.value;
    localStorage.setItem('question'+id,content[id].question);
  })

  kaito.addEventListener("change", function(){
    content[id].kaito = kaito.value;
    hyoji.textContent = kaito.value.length + "文字";
    localStorage.setItem('moji'+id,content[id].kaito);
  })

  memo.addEventListener("change", function(){
    content[id].memo = memo.value;
    localStorage.setItem('memo'+id,content[id].memo);
  })

  //リセットボタンの処理---------------------------------------
  reset.addEventListener('click',function(){
    localStorage.removeItem('question'+id);
    question.value='';
    localStorage.removeItem('moji'+id);
    kaito.textContent='';
    localStorage.removeItem('memo'+id);
    memo.textContent='';
  })

  
  //カード追加するボタン---------------------------------------
  const card_btn = document.querySelector(".add_card");
  const card_space = document.getElementById("card_space");
  
  card_btn.addEventListener("click",function(){
    id++;
    const card_div = document.createElement('div');
    card_div.setAttribute("class","card");
    
    const q_input = document.createElement('input');
    q_input.setAttribute("class","question");
    q_input.setAttribute("type","text");
    q_input.setAttribute("size","130");
    q_input.setAttribute("placeholder","ここに質問文をコピペ");
    
    const k_txarea = document.createElement("textarea");
    k_txarea.setAttribute("class","kaito");
    k_txarea.setAttribute("rows","10");
    k_txarea.setAttribute("cols","130");
    k_txarea.setAttribute("placeholder","ここに回答を入力");
    
    const mn_p = document.createElement("p");
    mn_p.setAttribute("class","moji_num");
    mn_p.setAttribute("value","文字数");
    
    const m_txarea = document.createElement('textarea');
    m_txarea.setAttribute("class","memo");
    m_txarea.setAttribute("rows","10");
    m_txarea.setAttribute("cols","130");
    m_txarea.setAttribute("placeholder","メモゾーン");
    
    const r_btn = document.createElement('button');
    r_btn.setAttribute("class","reset");
    
    card_div.appendChild(q_input);
    card_div.appendChild(k_txarea);
    card_div.appendChild(mn_p);
    card_div.appendChild(m_txarea);
    card_div.appendChild(r_btn);
    card_space.appendChild(card_div);
  })
  //--------------------------------------------------------
  
  
    
}, false);