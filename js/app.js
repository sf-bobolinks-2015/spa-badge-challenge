$.ready(function() {

  clickTeacherHandler();

});

  var clickTeacherHandler = function() {
    $('a').on('click', function(event) {
      event.preventDefault();
      var teacherId = this.id
      $.ajax({
        url: 'http://localhost:3000/teachers/' + teacherId,
        type: 'GET'
      }).then(function(data) {
        console.log(JSON.parse(data));
      }).catch(function(data) {
        console.log('Fail');
      })
    })
  }
