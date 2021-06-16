var apiData;

var behanceAPI = $.ajax({
      type: "GET",
      url: "https://api.behance.net/v2/users/leifwildman/projects?client_id=wFAYtVZMc8esttze6dPwafazRUXosCJb",
      dataType: "jsonP",
      success : function(data) {
      apiData = data;
                }
    });

behanceAPI.always(function() {
      var projectRow = '<div class="projectRow row"></div>';
      //replace paragraph with gallery
      $('#design p').replaceWith(projectRow);
      //gets projects from API
      var returnAPI = apiData.projects;
      $.each(returnAPI, function(i, item) {
          var projectName = returnAPI[i].name;
          var projectImage = returnAPI[i].covers.max_808;
          var projectURL = returnAPI[i].url;
          var projectContainer = '<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 behanceBox"><div class="behanceCover"><a href="'+projectURL+'"><img src="'+projectImage+'" class="img-fluid" alt="'+projectName+'"><div class="behanceTitle"><p class="behancePara">'+projectName+'</p></div></a></div></div>'
          $('.projectRow').append(projectContainer)
      });
    });