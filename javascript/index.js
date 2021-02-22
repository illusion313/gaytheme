/* <!-- دکمه به بالا رفتن --> */

let scroll = document.querySelector("button.scroll")
window.addEventListener("scroll", e => {
    if (window.scrollY > 400) {
        document.querySelector("button.scroll").classList.add("show")
    } else {
        document.querySelector("button.scroll").classList.remove("show")
    }
})

scroll.addEventListener("click", e => {
    if (scroll.classList.contains("show")) {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
})
/* menu toggle effect --> */
function myFunction(x) {
    x.classList.toggle("change");
}

/* <!-- closeable tab for ads or vip accounts --> */
var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
        this.parentElement.style.display = "none";
    });
}



$(".close").click(function(){
    $(".viptext").fadeOut();
  });

  $(document).ready(function () {
    $(".close").click(function () {
      $(".viptext").slideUp("slow");
    });
  });

