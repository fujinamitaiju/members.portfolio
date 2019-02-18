jQuery('.hamburger').on('click', function(){
  jQuery(this).toggleClass("active");
  jQuery('#navigation').fadeToggle(600);
  jQuery('.navigation_item').on('click', function(){
    $('#navigation').hide();
    $('.hamburger').removeClass('active');
  });
});
