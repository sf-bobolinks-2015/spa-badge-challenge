$.ready(function() {
  studentList();
  studentBadges();

});


var studentList = function(){
  var request = $.ajax({
    url: 'http://localhost:3000',
    type: 'get',
    dataType: 'json'
  }).then(function(response){
    var source = $('#student-names').html()
    var template = Handlebars.compile(source)
    var students = JSON.parse(response)
    var data = {'students': students}
    var result = template(data)
    $('#studentList').html(result)
  }).catch(function(error){
    console.log(error);
  });
};

var studentBadges = function(){
  $('ul').on('click', function(event){
    event.preventDefault();
    var id = event.target.classList[0]

    var request = $.ajax({
      url: 'http://localhost:3000/students/' + id,
      type: 'get',
      dataType: 'json'
    }).then(function(response){
      var source = $('#student-badges').html()
      var template = Handlebars.compile(source)
      var students = JSON.parse(response)
      var result = template(students)
      $('#badges').html(result)
      addVotes();
    }).catch(function(error){
      console.log(error);
    });
  });
};

var addVotes = function(){
  $('.up').on('click', function(event){
    event.preventDefault();
    var id = $('#student').classList[0]
    var request = $.ajax({
      url: 'http://localhost:3000/students/' + id,
      type: 'put',
      dataType: 'json'
    }).then(function(response){
      var source = $('#student-badges').html()
      var template = Handlebars.compile(source)
      var students = JSON.parse(response)
      var result = template(students)
      $('#badges').html(result)
      addVotes();
    }).catch(function(error){
      console.log(error);
    });
  });
};
