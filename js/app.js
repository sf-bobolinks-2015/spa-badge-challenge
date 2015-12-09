$.ready(function(){
  indexPage();

})

var indexPage = function(){
  // console.log(theTemplateScript)
    var context={
    "name": "London"};
  var source = $("#address-template").html()
  console.log(source)

  var theTemplate = Handlebars.compile(source);

  console.log(theTemplate)
  var request = $.ajax({
    url: 'http://localhost:3000',
    method: 'GET'
  }).then(function(response){
    var newData = JSON.parse(response)
    var content = {"name": newData}

    console.log(content)
    $("#namesList").append('LI',theTemplate(content))
    alert("win")
  }).catch(function(response) {
    console.log("FUCK YOU")
  })
}
