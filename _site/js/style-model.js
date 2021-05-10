jQuery('.style-model div').click(function() {
  var target = $(this).attr('id');
  $(this).addClass('item_tali').siblings().removeClass('item_tali');
  $('#' + target).show().siblings('div').hide();
});
