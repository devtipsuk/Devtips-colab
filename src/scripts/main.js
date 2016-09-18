$('.recent-btn').click(function( event ){
  event.preventDefault();
  $('.recent-btn').removeClass('active-option');
  $(this).addClass('active-option');
});
