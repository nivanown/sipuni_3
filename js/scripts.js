/*- faqs-accordion -*/
$('.faqs-accordion__top-panel').click(function() {
  $(this).next().slideToggle(200);
  $(this).toggleClass('show', 200);
});

/*- switch -*/
$('.counter')
  .on('click', '.counter__more', function(){
      var el = $(this);
      var field = el.parents('.counter').find('input[type="text"]');
      field[0].value++;
  })
  .on('click', '.counter__fewer', function(){
      var el = $(this);
      var field = el.parents('.counter').find('input[type="text"]');
      if(field[0].value >= 2) field[0].value--;
  });
  
$('.counter input').keypress(function(event){
    var key, keyChar;
    if(!event) var event = window.event;
    if (event.keyCode) key = event.keyCode;
    else if(event.which) key = event.which;
    if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
    keyChar=String.fromCharCode(key);
    if(!/\d/.test(keyChar)) return false;
}); 