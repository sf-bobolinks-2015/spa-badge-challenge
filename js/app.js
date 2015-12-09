$.ready(function() {
  clickTeacherHandler();

});

  var clickTeacherHandler = function() {
    $('.teacher').on('click', function(event) {
      event.preventDefault();
      var teacherId = this.id
      $.ajax({
        url: 'http://localhost:3000/teachers/' + teacherId,
        type: 'GET'
      }).then(function(data) {
        displayTeacherHeader(JSON.parse(data));
        displayTeacherBadges(JSON.parse(data));
        voteHandler();
        addBadgeHandler();
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
    var context = { 'id': data["teacher"]["id"],
                    'badges': data["badges"],
                    'teacher_id': data["teacher"]
                  };
    var theCompliedHtml = theTemplate(context);
    $('.badge-list').html(theCompliedHtml);
  }

  var voteHandler = function() {
    $('.vote_button').on('submit', function(event) {
      event.preventDefault();
      var badgeId = this.classList[0]
      var teacherId = this.classList[1]
      var voteType = this.classList[2]
      $.ajax({
        url: 'http://localhost:3000/teachers/' + teacherId + '/badges/' + badgeId,
        type: 'PUT',
        data: "data="+voteType
      }).then(function(data) {
        $("#"+badgeId+"Points").html("(" + data + " points)")
      })
    })
  }

  var addBadgeHandler = function() {
    $('.add_badge_button').on('submit', function(event) {
      event.preventDefault();
      console.log('ahhhh')
        var teacherId = this.children[0].name
        var badgeText = this.children[1].value
      $.ajax({
        url: 'http://localhost:3000/teachers/'+teacherId+'/badges',
        type: 'POST',
        data: "text="+badgeText
      }).then(function(data) {
        displayTeacherBadges(JSON.parse(data));
        voteHandler();
      })
    })
  }
