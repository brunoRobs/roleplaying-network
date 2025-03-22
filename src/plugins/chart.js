import * as d3 from 'd3';

function generateChart(width, height, radius, selector) {
  // Calcula os 6 pontos do hexágono
  const points = d3.range(6).map(i => {
    const angle = (Math.PI / 3) * i; // 360° divididos por 6 lados
    return [
      Math.cos(angle) * radius,
      Math.sin(angle) * radius
    ];
  });

  const svg = d3.select(selector) // Seleciona a div onde o SVG será inserido
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g") // Adiciona um grupo <g> centralizado no meio do SVG
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  // Converte os pontos em uma string para o atributo "points" do <polygon>
  const hexagonPath = points.map(d => d.join(",")).join(" ");

  // Adiciona o hexágono ao SVG
  svg.append("polygon")
    .attr("points", hexagonPath)
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill", "lightblue"); // Cor de preenchimento do hexágono
}

export default generateChart