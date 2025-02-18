const input = document.querySelector('input');
const h1 = document.querySelector('h1');

//뭔가 변경될 때마다는 아니고, 그 입력을 떠날 때마다 실행되는 함수임!!!!
//이 때 입력이 변경되지 않고 포커싱만 줬다 떠난 경우,(input 클릭했다가 밖 누른 경우나, 지웠다 똑같은 문자열을 쓴 경우처럼 바뀐게 없는 경우)
// input.addEventListener('change', function (e) {
//     console.log('CASKDJASKJHD');
// });

//붙여넣기, 음성 인식등 키보드를 거치지 않고 입력값이 변경되는 경우에 사용한다.
input.addEventListener('input', function (e) {
    h1.innerText = input.value;
});
