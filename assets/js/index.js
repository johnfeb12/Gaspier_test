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