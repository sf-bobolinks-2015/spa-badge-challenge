// PSEUDOCODE
// get the students
// put their names on the page


miniQuery.ready(function(){
  studentCaller();
  badger();
})
var studentCaller = function(){
  var theTemplateScript = miniQuery("#student-template").getHTML();
  var theTemplate = Handlebars.compile(theTemplateScript);

  var request = miniQuery.ajax({
    type: "GET",
    url: "http://localhost:3000/students",
    dataType: "json"
  }).then(function(response){
    console.log(response)
    var context = JSON.parse(response)
    var content = {"student":context}
    var theCompiledHtml = theTemplate(content);
    miniQuery("#student-list").setHTML(theCompiledHtml);
  }).catch(function(error){
    console.log("IT DIDN'T WORKKKKKKKK")
    console.log(error)
  });
}

//
// get some input
// turn it into a badge
// give it back as json
// put it on the page


var badger = function(){
  miniQuery.ajax({

  })
}