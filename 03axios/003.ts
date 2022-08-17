//tsc 003 -lib esnext,dom

//import axios from '.';
//개발할 때에만 넣고 index.d.ts의 타입 추론 활용 (IE와 충돌 있음)

(async function(){
  const {data} = await axios('003.json');

  $('table').DataTable({
    data: data,
    columns: [{
        data: 'first_name'
      },
      {
        data: 'last_name'
      },
      {
        data: 'email'
      },
      {
        data: 'gender'
      },
      {
        data: 'ip_address'
      },
    ]
  })
})()


