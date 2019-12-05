const hyoji = document.getElementById("moji_num");
const kaito = document.getElementById("kaito");
const reset = document.getElementById("reset");

let cnt=0;

//初期化
let moji = localStorage.getItem('moji');
kaito.textContent = moji;

kaito.addEventListener("change", function()
{
    hyoji.textContent = kaito.value.length + "文字";
    localStorage.setItem('moji',kaito.value);
})

reset.addEventListener('click',function(){
    localStorage.removeItem('moji');
    kaito.textContent='';
})