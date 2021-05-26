//tsc 004 -lib esnext,dom

document.querySelector('input').addEventListener('click',async function(e){
  const response = await fetch('004t.php');
  const responseText = await response.text();
  document.querySelector('#time').innerHTML = responseText;
})
