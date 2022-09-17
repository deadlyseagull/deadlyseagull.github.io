// import SVG
d3.html("assets/Map.svg").then(function(newDocument){
    const svg = newDocument.querySelector("svg");
    document.querySelector("#visualization-container").appendChild(svg);

    const clusters = d3.selectAll("#planets > g");
  clusters.on("click", function(){
    clusters.style("opacity",0.2);
    d3.select(this).style("opacity",1);
  })

  d3.select("#fondale").on("click", function(){
    clusters.style("opacity",1);
  })

  /*FILTRO ROTTE*/
  const zone = d3.selectAll("#edges, #passages, #streets");
  zone.style("opacity",0);
  function update() {
    d3.selectAll(".checkboxOne").each(function(){
        cb = d3.select(this);
        grp = cb.property("value")

        if(cb.property("checked")){
            zone.transition().duration(1000).style("opacity",1); 
        }else{
            zone.transition().duration(1000).style("opacity",0);
        }
    })
  }

  d3.selectAll(".checkboxOne").on("change",update);
  update()
})

/* INIZIO MENU */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  /*FINE MENU*/

/*INIZIO ZOOM*/
 function zoom(event) {
      event.preventDefault();
    
      scale += event.deltaY * -0.001;
    
      // Restrict scale
      scale = Math.min(Math.max(0.8, scale), 1.5);
    
      // Apply scale transform
      el.style.transform = `scale(${scale})`;
    }
    
    let scale = 0.001;
    const el = document.querySelector('#visualization-container');
    document.body.onwheel = zoom;
    /*FINE ZOOM*/


/*INIZIO PARALLASSE*/
    (function() {
      // Add event listener
      document.addEventListener("mousemove", parallax);
      const elem = document.querySelector(".parallax");
      // Magic happens here
      function parallax(e) {
          let _w = window.innerWidth/2;
          let _h = window.innerHeight/2;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`;
          let _depth2 = `${50 - (_mouseX - _w) * 0.002}% ${10 - (_mouseY - _h) * 0.002}%`;
          let _depth3 = `${50 - (_mouseX - _w) * 0.006}% ${-50 - (_mouseY - _h) * 0.006}%`;
          let x = `${_depth3}, ${_depth2}, ${_depth1}`;
          console.log(x);
          elem.style.backgroundPosition = x;
      }
  
  })();
  /*FINE PARALLASSE*/

  function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();