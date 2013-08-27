jQuery(document).ready(function () {    

    //polityka cookies
     jQuery('#pl_cookie_close').click(function(event) {
        jQuery('#pl_cookies').hide();
     });
    
    if(jQuery.cookie("plCookies") === null){
        jQuery('#pl_cookies').show();
     }

    jQuery.cookie("plCookies", "1", { expires: 1000000 });
});
