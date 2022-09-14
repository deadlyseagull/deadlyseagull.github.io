// d3.html allows us import html documents. This function is very handy.
d3.html('assets/Spelljammer-map.svg').then(function(newDocument){
    // This is plain JavaScript, importing SVG nodes is easier
    // select the SVG node that we just imported
    const svg = newDocument.querySelector('svg');
    // append the svg node to our webpage
    document.querySelector('#visualization-container').appendChild(svg);
  
    // Now we switch to D3.js
    // because selections and event binding are easier
    const clusters = d3.selectAll('#nodes > g');
    clusters.on('click', function(){
      clusters.style('opacity',0.3);
      // «this» refers to clicked element
      d3.select(this).style('opacity',1);
    });
    // bind a click event to the rectangle in the background
    // to reset selection
    d3.select('#background-rectangle').on('click', function(){
      clusters.style('opacity',1);
    });
  });
  