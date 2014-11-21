$(document).ready(function(){
  
  $('#ha').hover(function(e){
    $(e.target).css({'top' : Math.floor(Math.random() * 500) + 'px', 'left' :  Math.floor(Math.random() * 900) + 'px'});
  });

  $('#ha').click(function(e){
    $(e.target).text('Nope.');
    $(e.target).css({'top' : Math.floor(Math.random() * 500) + 'px', 
                     'left' :  Math.floor(Math.random() * 900) + 'px', 
    	             'background-color' : "orange"
    });
    e.preventDefault();
  });

  
  
  var count = 10
  var countDown = setInterval(function(){
    $('span').text(count);
    count--;
    if(count === 0) {
      $('span').text('');
      clearInterval(countDown);
      $('.container').children().remove();
      $('.container').append('<h1>Total Fucks Given: <strong>0</strong></h1>')
    };
  }, 1000);
  
});

