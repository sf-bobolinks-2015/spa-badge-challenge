$.ready(

  var request = $.ajax({
    type: "GET",
    url: "http://localhost:3000/students/1",
    dataType: "json"
  }).then(function(response){
    console.log(response)
  }).catch(function(error){
    console.log("IT DIDN'T WORKKKKKKKK")
    console.log(error)
  });


 var theTemplateScript = $("#student-template").getHTML();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context=JSON.parse(request)

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').setHTML(theCompiledHtml);

  // Pass our data to the template
  // var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  // $('.content-placeholder').html(theCompiledHtml);
// })()
)
