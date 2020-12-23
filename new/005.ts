interface NodeListOf<TNode> extends Array<TNode> {}

let canvases = [];
for (const item of document.querySelectorAll('canvas')) {
  canvases.push(item.getContext('2d'));
};

(async function(){
  const _dataObj = await fetch('005.json');
  const _data = await _dataObj.json();


  const bar1 = new Chart(canvases[0], {
    type: 'bar',
    data: {
      labels: [
        _data[0].first_name,
        _data[1].first_name,
        _data[2].first_name,
        _data[3].first_name,
        _data[4].first_name
      ],
      datasets: [{
        label: 'English',
        backgroundColor: 'rgba(255, 127, 127,.5)',
        borderColor: 'rgb(255, 127, 127)',
        borderWidth: 1,
        data: [
          _data[0].english,
          _data[1].english,
          _data[2].english,
          _data[3].english,
          _data[4].english,
        ],
      }],

      options: {
        responsive: true,
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'English Chart'
        }
      }
    }
  })
})();
