$.ready(function() {
  // $('.badges').hide()
  clickTeacherHandler();


});

  var clickTeacherHandler = function() {
    $('.teacher').on('click', function(event) {
      // $('.badges').hide();
      event.preventDefault();
      var teacherId = this.id
      $.ajax({
        url: 'http://localhost:3000/teachers/' + teacherId,
        type: 'GET'
      }).then(function(data) {
        displayTeacherHeader(JSON.parse(data));
        displayTeacherBadges(JSON.parse(data));
        voteHandler();
        // $('.badges').show();
      }).catch(function(data) {
        console.log('Fail');
      })
    })
  }

  var displayTeacherHeader = function(data) {
    var ourStashTest = $('#teacher_header').getHtml();
    var theTemplate = Handlebars.compile(ourStashTest)
    var context = {'teacher': data["teacher"]["name"],
                    'id': data["teacher"]["id"]
                  };
    var theCompliedHtml = theTemplate(context);
    $('.content-placeholder').html(theCompliedHtml);
  }

  var displayTeacherBadges = function(data) {
    var ourStashTest = $('#badge_list').getHtml();
    var theTemplate = Handlebars.compile(ourStashTest)
    var context = {'teacher': data["teacher"]["name"],
                    'id': data["teacher"]["id"],
                    'badges': data["badges"],
                    'teacher_id': data["teacher"]
                  };
    var theCompliedHtml = theTemplate(context);
    $('.badge-list').html(theCompliedHtml);
}

  var voteHandler = function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      badgeId = this.classList[0]
      teacherId = this.classList[1]
      voteType = this.classList[2]
      $.ajax({
        url: 'http://localhost:3000/teachers/' + teacherId + '/badges/' + badgeId,
        type: 'PUT',
        data: "data="+voteType
      }).then(function(data) {
        $("#"+badgeId+"Points").html("(" + data + " points)")
      })
  })
}
