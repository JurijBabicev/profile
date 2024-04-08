function about_me() {
    document.querySelector(".left-side").style = "width: 36%; border-color: indianred; border-width: 4px;";
    document.querySelector(".fallow-me").style = "display: none;";

    setTimeout(function() {
        //your code to be executed after 1 second
        document.querySelector(".right-side").style = "width: 57%;display: inline-block;color: #9d9b9b;";
        document.querySelector(".about-me").style = "display: inline-block;";
        document.querySelector(".left-side").style = "width: 36%;; border-color: #d5dae4; border-width: 2px;";
      }, 1000);
}

function fallow_me() {
    document.querySelector(".left-side").style = "width: 36%; border-color: indianred; border-width: 4px;";
    document.querySelector(".about-me").style = "display: none;";

    setTimeout(function() {
        //your code to be executed after 1 second
        document.querySelector(".right-side").style = "width: 57%;display: inline-block;color: #9d9b9b;";
        document.querySelector(".fallow-me").style = "display: inline-block;";
        document.querySelector(".left-side").style = "width: 36%;; border-color: #d5dae4; border-width: 2px;";
      }, 1000);
}




var tag_id = ['one','two','three','four','five','six'];

function html_qry() {
  let tags = ['<p>\\t','</p>','<p>\\t','</p>','<p>\\t','</p>'];

    for (inter = 0; inter <= 5; inter++) {
      let html_container = document.getElementById("tag-" + tag_id[inter]);
      html_container.style.color = "#4b7bb2";
      html_container.innerText = tags[inter];
    }
}

function show_syntax(choise) {

  if (choise == 'html') {
    html_qry();
  } else if (choise == 'css') {
    html_qry();
    let css_code_example = "<span style=\"color: #ac6969;text-shadow: 0px 0px 16px gray;\"><span style=\"color: orange;\">.my-legend {</span><br />&nbsp;&nbsp;<span style=\"color: #5dbdf8;\">display:</span> inline-block;<br />&nbsp;&nbsp;<span style=\"color: #5dbdf8;\">width: 60%</span>;<br />&nbsp;&nbsp;<span style=\"color: #5dbdf8;\">min-width</span>: 300px;<br />&nbsp;&nbsp;<span style=\"color: #5dbdf8;\">font-family</span>: 'Segoe UI', sans-serif;<br />&nbsp;&nbsp;<span style=\"color: #5dbdf8;\">font-size</span>: 18px;<br />&nbsp;&nbsp;<span style=\"color: #5dbdf8;\">color</span>: #9d9b9b;<br /><span style=\"color: orange;\">}</spam></span>";
    document.getElementById('tag-one').innerText = "<div class=\"my-legend\"><p>";
    document.getElementById('tag-six').innerText = "</p></div>";
    document.getElementById('code-example').innerHTML = css_code_example;
  }
}

function show_code_box() {
  document.querySelector(".my-legend").style = "display: inline-block; width: 100%;";
  document.querySelector(".code-syntax").style = "display: inline-block;";
  document.getElementById("my-legend-box").style = "width: 65%; padding: 0px 30px 0px 5%;";
}

function hide_code_syntax() {
  document.querySelector(".my-legend").style = "display: auto;";
  document.querySelector(".code-syntax").style = "display: none;";
  document.getElementById("my-legend-box").style = "width: 100%; text-align: center;";

}

function clear_syntax() {
  for (inter = 0; inter < (tag_id.length); inter++) {
    document.getElementById('tag-' + tag_id[inter]).innerText = "";
  }
  hide_code_syntax();
}
