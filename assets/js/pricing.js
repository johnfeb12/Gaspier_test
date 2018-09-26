$(function () {
    $(document).scroll(function () {
        const gaspier = document.querySelector('.gaspier')
        const gaspier2 = document.querySelector('.gaspier2')

        var $nav = $(".navbar-fixed-top");
        if ($nav.toggleClass('scrolled', $(this).scrollTop() > 3)) {
            console.log($(this).scrollTop())
            gaspier.setAttribute('style', 'display:none')
            gaspier2.setAttribute('style', 'display:inline-block')
            document.querySelector('.navbar-light .navbar-nav .nav-link').setAttribute('style', 'color:black !important;')


        }
        if ($(this).scrollTop() == 0) {
            gaspier.setAttribute('style', 'display:inline-block')
            gaspier2.setAttribute('style', 'display:none')
            document.querySelector('.navbar-light .navbar-nav .nav-link').setAttribute('style', 'color:white !important;')

        }


    });
});

    //Function to change css display

        function ChangeCss(className , display) {
            
            return document.querySelector(className).setAttribute('style', display)

        }

    

document.querySelector('.Seller').addEventListener('click', function () {
    
    //Change tables in html
    ChangeCss('.sellerPlan', 'display:inline')
    ChangeCss('.buyerPlan', 'display:none')
    ChangeCss('.platformPlan', 'display:none')

    //change active button

    document.querySelector('.buyer').classList.remove('activePlan')
    document.querySelector('.platform').classList.remove('activePlan')
    document.querySelector('.seller').classList.add('activePlan')

})


document.querySelector('.Buyer').addEventListener('click', function () {

    //Change tables in html

     ChangeCss('.sellerPlan', 'display:none')
     ChangeCss('.buyerPlan', 'display:inline')
     ChangeCss('.platformPlan', 'display:none')

    //change active button
    document.querySelector('.buyer').classList.add('activePlan')
    document.querySelector('.platform').classList.remove('activePlan')
    document.querySelector('.seller').classList.remove('activePlan')

})


document.querySelector('.Platform').addEventListener('click', function () {

    //Change tables in html

     ChangeCss('.sellerPlan', 'display:none')
     ChangeCss('.buyerPlan', 'display:none')
     ChangeCss('.platformPlan', 'display:inline')

    //change active button
    document.querySelector('.buyer').classList.remove('activePlan')
    document.querySelector('.platform').classList.add('activePlan')
    document.querySelector('.seller').classList.remove('activePlan')

})




