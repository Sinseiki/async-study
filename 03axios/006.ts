//tsc 006 -lib esnext,dom

//import axios from '.';
//개발할 때에만 넣고 index.d.ts의 타입 추론 활용 (IE와 충돌 있음)

let canvases:CanvasRenderingContext2D[] = [];
for (const item of Array.apply(null,document.querySelectorAll('canvas'))) {
  canvases.push(item.getContext('2d')!);
};

(async function(){
  const {data} = await axios('005.json');
  const _data = data;
  let dataArrays:any[] = [];
  
  for (const it of _data){
    const anArray = Object.values(it);
    dataArrays.push(anArray);
  }

  for (let i = 0; i < 3; i++) {

    new Chart(canvases[i], {
      type: 'bar',
      data: {
        labels: [
          dataArrays[0][2],
          dataArrays[1][2],
          dataArrays[2][2],
          dataArrays[3][2],
          dataArrays[4][2]
        ],
        datasets: [{
          label: Object.keys(_data[0])[i + 3],
          backgroundColor: 'rgba(255, 127, 127,.5)',
          borderColor: 'rgb(255, 127, 127)',
          borderWidth: 1,
          data: [
            dataArrays[0][i + 3],
            dataArrays[1][i + 3],
            dataArrays[2][i + 3],
            dataArrays[3][i + 3],
            dataArrays[4][i + 3],
          ],
        }],
      },
      options: {
        responsive: true,
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: Object.keys(_data[0])[i + 3].toUpperCase() + ' Chart'
        }
      }
    })
  }
})();

