$.ready(function(){

  var theNomineesScript = $("#nominee-list");
  theNomineesScript = theNomineesScript.innerHTML;
  var theNominees = Handlebars.compile(theNomineesScript);

  var response = $.ajax({
      url: 'http://localhost:3000/nominees',
      type: 'GET',
      dataType: "json"
    }).then(function(response){
      console.log("This is the success:" + response)
    var context = JSON.parse(response)
      var theCompiledHtml = theNominees(context);
      var tobeappended = $(".nominee-result");
      tobeappended[0].innerHTML = theCompiledHtml;
    }).catch(function(err){
      console.log("This is the error:" + err)
    }); //end of response


// //Nested inside of Ajax request
//     var clickHandler = function(){

//       $('.indiv-name').on('click', function(){
//       console.log("Does this work?");

//       console.log(nomineeId)
//       var accessNominee = this.value
//       var id = accessNominee
//       console.log(id)
//     })
//     }

      $('.container').on('click', function(){
      console.log("This is in the nominee-result listener")
      console.log(this);
      counter = 0
      // js loop
      // while (counter < $('.nominee-result')[0].getElementsByClassName('indiv-name').length) {
        var nomineeId = $('.nominee-result')[0].getElementsByClassName('indiv-name')[counter+=1].id

        var nomineeId = $('.nominee-result')[0]

      // }
      counter +=1 //outside of loop
      console.log(nomineeId)


      // $.ajax({
      //   url: 'http://localhost:3000/nominees' + nomineeId,
      //   type: 'GET',
      //   dataType: "json"
      // }).then(function(){};

    })

});

// var linkListener = function() {
// +  $('#horse-list').on('click', 'div a', function(event) {
// +    event.preventDefault();
// +    var id = $(this).attr('href').match(/\d+/)
// +    var path = $(this).parent();
// +    var request = $.ajax({
// +      type: 'GET',
// +      url: '/horses/' + id
// +    });
// +
// +    request.done(function(data) {
// +      removeHorse(path);
// +      var test = $(path).append(data);
// +    });
// +  });
// +}
