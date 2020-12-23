(async function(){
  const resultObj = await fetch('003.json');
  const result = await resultObj.json();
  
  $('table').DataTable({
    data: result,
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


