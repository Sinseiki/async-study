//tsc 001 -lib esnext,dom

document.querySelector('button').addEventListener('click', async function () {



    const data001t = await fetch('001t.html');
    const data001html = await data001t.text();

    document.querySelector('html').insertAdjacentHTML("beforeend", data001html);

    const copy1 = document.querySelector('.lorem1').cloneNode(true);
    const copy2 = document.querySelector('.lorem2').cloneNode(true);

    document.querySelector('.ajaxWrap1').appendChild(copy1);
    document.querySelector('.ajaxWrap2').appendChild(copy2);

    const receiveData = document.querySelector('.receiveData');
    receiveData.parentNode.removeChild(receiveData);


})