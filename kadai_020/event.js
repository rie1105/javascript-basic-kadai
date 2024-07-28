// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// 'ボタンをクリックしました'を、定数に代入する
const text = 'ボタンをクリックしました';
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() => {
    // HTMLを書き換える
    document.getElementById('text').textContent=　text;
});
