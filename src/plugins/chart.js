import { Chart, RadarController, LineElement, PointElement, RadialLinearScale, Filler, Tooltip } from "chart.js";

Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Filler, Tooltip);

const chart = (ctx, attributes) => new Chart(
  ctx,
  {
    type: 'radar',
    options: {
      responsive: true,
      animation: true,
      scales: {
        r: {
          beginAtZero: true,
          min: 0,
          max: 20,
          ticks: {
            display: false,
            stepSize: 5
          },
          pointLabels: {
            font: {
              family: 'Amarante',
              size: 12
            }
          }
        }
      }
    },
    data: {
      labels: Object.keys(attributes).map(attribute => attribute[0].toUpperCase() + attribute.substring(1)),
      datasets: [
        {
          data: Object.values(attributes),
          borderWidth: 1,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, .5)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointHoverBackgroundColor: 'rgb(255, 255, 255)'
        }
      ]
    }
  }
);

export default chart