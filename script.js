//WebFont
document.write('<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet">');


//ここから処理
const hyoji = document.getElementById("moji_num");
const kaito = document.getElementById("kaito");
const reset = document.getElementById("reset");
const question = document.querySelector(".question_zone");
const memo = document.querySelector(".memo");

let cnt=0;

//ロード時の処理
let q_moji = localStorage.getItem('question');
question.textContent = q_moji;
let moji = localStorage.getItem('moji');
kaito.textContent = moji;
let m_moji = localStorage.getItem('memo');
memo.textContent = m_moji;


question.addEventListener("change",function(){
    localStorage.setItem('question',question.value);
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
    localStorage.removeItem('moji');
    kaito.textContent='';
})