$.ready(function(){
  indexPage();

})

var indexPage = function(){
  var source = $("#address-template").html()
  var theTemplate = Handlebars.compile(source);
  var request = $.ajax({
    url: 'http://localhost:3000',
    method: 'GET'
  }).then(function(response){
    var newData = JSON.parse(response)
    var content = {"name": newData}
        $("#namesList").html(theTemplate(content))
    eventListener();
  }).catch(function(error) {
    console.log(error)
  })
}

var eventListener = function(){
  var source = $("#badge_area").html()
  var theTemplate = Handlebars.compile(source);
  $('.studentList').on('click', function(event){
    debugger
    var id = event.currentTarget.getAttribute('id');
    var request = $.ajax({
      url: 'http://localhost:3000/students/' + id,
      method: 'GET'
    }).then(function(response){
      console.log(response)
      var newData = JSON.parse(response)
      console.log(newData)
      $("#badgeSpace").html(theTemplate(newData))
    }).catch(function(error){
      console.log("fuck you")
      console.log(error)
    })
  })
};

