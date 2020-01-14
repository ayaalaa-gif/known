let responsive = document.querySelector(".responsive")
let navi = document.querySelector("ul.navigation")
responsive.addEventListener("click",function () {
    if (navi.style.display === "none") {
        navi.style.display = "flex";
      } else {
        navi.style.display = "none";
      }
})
$(function(){
    $("nav ul li a").on("click",function() {
        $(this).parent().addClass("active").siblings().removeClass("active")
    })
})
