//Step 1
function show_msg() {
    "use strict";
    window.alert("I have been clicked");
}


//Step 2
    var btn_2 = window.document.getElementById("btn2");
    btn_2.onclick = function () {
        "use strict";
        window.alert("I have been clicked");
    };
    

//Step 3
    var btn_3 = window.document.getElementById("btn3");
    btn_3.addEventListener("click", show_msg);

//Step 4
window.onload = function () {
    var btn_4 = window.document.getElementById("btn4");
    btn_4.addEventListener("click", function () {
        "use strict";
        window.alert("I have been clicked");
    });
}


//Step 5 in HTML file  