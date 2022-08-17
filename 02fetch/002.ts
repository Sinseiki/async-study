//tsc 011 -lib esnext,dom

//이 파일은 서버에 업로드한 상태여야 작동합니다.

(async function () {

  try {
    const connection = await fetch("002.json", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      } // GET으로 보낼 때에는 Option 생략 가능
    });
    const jsonData = await connection.json();
    document.write(jsonData[4].last_name + "'s English Score : " + jsonData[4].english)
  } catch (error) {
    console.log(error)
  }

})()
