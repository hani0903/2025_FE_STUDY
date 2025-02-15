/* 버전 2 */
const v2 = document.querySelector('#v2');

v2.onclick = function () {
    alert('v2');
    console.log('v2');
};

/* addEventListener*/
/*
이건 안됨
v2.onclick = twist;
v2.onclick = shout;

이건 됨
v3.addEventList('click', twist);
v3.addEventList('click', shout);
*/
const v3 = document.querySelector('#v3');

v3.addEventListener('dblclick', () => {
    alert('v3');
    console.log('v3');
});
