document.querySelector('button').addEventListener('click', (evt) => {
    console.log(evt);
});

//key와 code의 차이이
const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    console.log(e.key); //키보드 자판을 눌러 생성되는 '최종 값'
    console.log(e.code); //키보드에서의 실제 위치
});
