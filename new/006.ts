//tsc 006 -lib esnext,dom

interface NodeListOf<TNode> extends Array<TNode> {}

let canvases = [];
for (const item of document.querySelectorAll('canvas')) {
  canvases.push(item.getContext('2d'));
};

(async function(){
  const _dataObj = await fetch('005.json');
  const _data = await _dataObj.json();
  let dataArrays = [];
  for (let j = 0; j < _data.length; j++) {
    let anArray = [];
    for (let i = 0; i < Object.keys(_data[0]).length; i++) {
      anArray.push(_data[j][Object.keys(_data[0])[i]]);
    }
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

