$(function () {
    $(document).scroll(function () {
       const gaspier =  document.querySelector('.gaspier')
       const gaspier2 =  document.querySelector('.gaspier2')

        var $nav = $(".navbar-fixed-top");
        if($nav.toggleClass('scrolled', $(this).scrollTop() > 3)){
            console.log($(this).scrollTop())
            gaspier.setAttribute('style', 'display:none')
            gaspier2.setAttribute('style', 'display:inline-block')
            document.querySelector('.navbar-light .navbar-nav .nav-link').setAttribute('style', 'color:black !important;')

            
        }  if ($(this).scrollTop() == 0) {
             gaspier.setAttribute('style', 'display:inline-block')
             gaspier2.setAttribute('style', 'display:none')
             document.querySelector('.navbar-light .navbar-nav .nav-link').setAttribute('style', 'color:white !important;')

        }
        

    });
});



var p = $(".popup__overlay");

$("#popup__toggle").click(function () {
    p.css("display", "block");
});
p.click(function (event) {
    e = event || window.event;
    if (e.target == this) {
        $(p).css("display", "none");
    }
});
$(".popup__close").click(function () {
    p.css("display", "none");
});

//video popup
function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupVid");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    //div.style.display = state == 'hide' ? 'none' : '';
    func = state == "hide" ? "pauseVideo" : "playVideo";
    iframe.postMessage(
        '{"event":"command","func":"' + func + '","args":""}',
        "*"
    );
}

$("#popup__toggle").click(function () {
    p.css("visibility", "visible").css("opacity", "1");
});

p.click(function (event) {
    e = event || window.event;
    if (e.target == this) {
        $(p)
            .css("visibility", "hidden")
            .css("opacity", "0");
        toggleVideo("hide");
    }
});

$(".popup__close").click(function () {
    p.css("visibility", "hidden").css("opacity", "0");
    toggleVideo("hide");
});
