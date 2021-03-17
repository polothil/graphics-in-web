let distribution = document.getElementById('distribution');
let chartType = document.getElementById('chartType');

const distributionSel = () => {
  console.log(distribution, distribution[distribution.options.selectedIndex].innerText);
  chartIt();
};

const typeSel = () => {
  console.log(chartType.value);
  chartIt();
};

const getData = async () => {
  const xs = [];
  const ys = [];

  const response = await fetch(`${distribution.value}.csv`);
  const data = await response.text();
  const rows = data.split('\n').slice(1); // To remove 1st row with column titles
  rows.forEach((row) => {
    const cols = row.split(',');
    const xValue = cols[0];
    xs.push(xValue);
    const yValue = cols[1];
    ys.push(parseFloat(yValue));
    // console.log(year, temp);
  });
  return { xs, ys };
};

const chartIt = async () => {
  const data = await getData();
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: chartType.value,
    data: {
      labels: data.xs,
      datasets: [
        {
          label: distribution[distribution.options.selectedIndex].innerText,
          data: data.ys,
          fill: false,
          backgroundColor: 'rgba(0, 99, 132, 0.2)',
          borderColor: 'rgba(0, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      events: ['click'],
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
              callback: function (value, index, values) {
                return value;
              },
            },
          },
        ],
      },
      tooltips: false,
    },
  });
};

chartIt();
