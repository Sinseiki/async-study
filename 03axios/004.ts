//tsc 004 -lib esnext,dom

//import axios from '.';
//개발할 때에만 넣고 index.d.ts의 타입 추론 활용 (IE와 충돌 있음)

document.querySelector('input').addEventListener('click',async function(){
  const {data} = await axios('004t.php');
  document.querySelector('#time').innerHTML = data;
})
