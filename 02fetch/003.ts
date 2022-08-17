//tsc 003 -lib esnext,dom

(async function(){
  const resultObj = await fetch('003.json');
  const result = await resultObj.json();
  const resultData = result.map(it => Object.values(it))
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


