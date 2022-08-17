//tsc 003 -lib esnext,dom

//import axios from '.';
//개발할 때에만 넣고 index.d.ts의 타입 추론 활용 (IE와 충돌 있음)

(async function(){
  const {data} = await axios('003.json');
  const resultData = data.map(it => Object.values(it))
  console.log(resultData)

  const dataTable = new simpleDatatables.DataTable('table',{
    data: {
      headings:['ID','First Name', 'Last Name', 'Email', 'Gender', 'IP Address'],
      data:resultData
    },
    columns: [
      {select: 0, hidden: true}
    ]
  })
})()


