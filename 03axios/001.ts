//tsc 001 -lib esnext,dom

//import axios from '.';
//개발할 때에만 넣고 index.d.ts의 타입 추론 활용 (IE와 충돌 있음)

document.querySelector('button').addEventListener('click', async function () {

    const data001 = await axios({url:'001t.html'});

    document.querySelector('html').insertAdjacentHTML("beforeend", data001.data);

    const copy1 = document.querySelector('.lorem1').cloneNode(true);
    const copy2 = document.querySelector('.lorem2').cloneNode(true);

    document.querySelector('.ajaxWrap1').appendChild(copy1);
    document.querySelector('.ajaxWrap2').appendChild(copy2);

    const receiveData = document.querySelector('.receiveData');
    receiveData.parentNode.removeChild(receiveData);


})