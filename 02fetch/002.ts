//tsc 002 -lib esnext,dom

document.querySelector('form').addEventListener('submit', async function (e) {

  e.preventDefault();

  const formData = new FormData(this);


  const resultOri = await fetch('002t.php', {
    body: formData,
    method: 'post',
  });

  //GET 방식으로 폼 데이터를 전달하는 것은 아직 IE에 맞게 구현하기는 힘듬

  const result = await resultOri.text();
  document.querySelector('.ajaxWrap').innerHTML = result;

})
