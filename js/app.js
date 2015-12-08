$.ready(function() {
  $('body-container').hide();
  studentCall();
});


var studentCall = function(){
  $('li a').on('click', function(event){
    event.preventDefault();

  });

  var request = $.ajax({
    url: 'http://localhost:3000',
    type: 'get',
    dataType: 'json'
  });

  request.done(function(response){
    console.log(response)
  });
};
