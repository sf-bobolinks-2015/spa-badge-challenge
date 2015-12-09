$.ready(function() {
  $('.body-container').hide();
  studentList();
});


var studentList = function(){

  var request = $.ajax({
    url: 'http://localhost:3000',
    type: 'get',
    dataType: 'json'
  })

  request.then(function(response){
    $('ul').append('<li>' + response + '</li>')
  });
};

