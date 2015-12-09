$.ready(function(){

  var theNomineesScript = $("#nominee-list");
  theNomineesScript = theNomineesScript.innerHTML;
  var theNominees = Handlebars.compile(theNomineesScript);
  // var context = {
  //   nominees: [
  //     {name: 'Hunter'},
  //     {name: 'Brick'},
  //     {name: 'Walker'},
  //     {name: 'Julian'},
  //     {name: 'Shambhavi'}
  //   ]
  // };

  var response = $.ajax({
      url: 'http://localhost:3000/',
      type: 'GET',
      dataType: "json"
    }).then(function(response){
    var context = JSON.parse(response)
      var theCompiledHtml = theNominees(context);
      var tobeappended = $(".nominee-result");
      tobeappended[0].innerHTML = theCompiledHtml;
    }).catch(function(err){
      console.log(err)
    });

});
