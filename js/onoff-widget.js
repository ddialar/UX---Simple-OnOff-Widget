var switchOnOffWidget = function(widgetId){
  if (widgetId) {
    console.log('Button clicked: ' + widgetId);
    if ($('#' + widgetId).hasClass('widget-on')) {
      $('#' + widgetId).removeClass('widget-on')
                       .addClass('widget-off');
    } else {
      $('#' + widgetId).removeClass('widget-off')
                       .addClass('widget-on');
    }
  }
};

$('.onoff-widget').on('click', function(){
  switchOnOffWidget(this.id);
});
