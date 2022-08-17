//tsc 011-2 -lib esnext,dom

//이 파일은 서버에 업로드한 상태여야 작동합니다.

//import axios from "axios"

(async function () {

  try {
    const jsonData = await axios.post("011.json", {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    console.log(jsonData[4].last_name + "'s English Score : " + jsonData[4].english)
  } catch (error) {
    console.log(error)
  }

})()
