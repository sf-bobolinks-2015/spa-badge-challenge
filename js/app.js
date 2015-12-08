$.ready(function() {
  $('.badges').hide()
  clickTeacherHandler();

});

  var clickTeacherHandler = function() {
    $('.teacher').on('click', function(event) {
      $('.badges').hide();
      event.preventDefault();
      var teacherId = this.id
      $.ajax({
        url: 'http://localhost:3000/teachers/' + teacherId,
        type: 'GET'
      }).then(function(data) {
        console.log(JSON.parse(data));
        $('.badges').show();
      }).catch(function(data) {
        console.log('Fail');
      })
    })
  }
