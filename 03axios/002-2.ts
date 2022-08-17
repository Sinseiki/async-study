//tsc 002 -lib esnext,dom

//import axios from '.';
//개발할 때에만 넣고 index.d.ts의 타입 추론 활용 (IE와 충돌 있음)

document.querySelector('form')!.addEventListener('submit', async function (e) {

  e.preventDefault();

  const formData = new FormData(this);


  const result = await axios.post('002-2.php',formData);

  document.querySelector('.ajaxWrap')!.innerHTML = result.data;

})
