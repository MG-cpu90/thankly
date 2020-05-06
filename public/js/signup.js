$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }


  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});


// Part 2 Test Code GET
$(document).ready(function() {
  // Getting references to our form and input
  var thankForm = $("form.login");
  var authorInput = $("input#email-input");
  var bodyInput = $("input#password-input");

  thankForm.on("submit", function(event) {
    event.preventDefault();
    console.log("clicked");
    // var userPost = {
    //   author: authorInput.val().trim(),
    //   body: bodyInput.val().trim()
    // };

    // if (!userPost.author || !userPost.body) {
    //   return;
    // }

    $.get("/api/prompt", function(data) {

      console.log(data);
    
    });

});

});


  //     // Send an AJAX POST-request with jQuery
  // $.post("/api/new", newPost)
  // // On success, run the following code
  // .then(function() {

  //   var row = $("<div>");
  //   row.addClass("post");

  //   row.append("<p>" + newpost.author + " posted: </p>");
  //   row.append("<p>" + newPost.body + "</p>");

  //   $("#thank-area").prepend(row);

  // });

  //   getUserInfo(userPost.author, userPost.body);
  //   authorInput.val("");
  //   bodyInput.val("");

  //   console.log(userPost);
  // });


  //   // This function grabs info from the user
  //   function getUserInfo(author, body) {
  //     $.get("/api/get", {
  //     author: author,
  //     body: body 
  //   })
  //     .then(function(data) {
  //       userInfo = data;
  //     });
  //     console.log(userInfo);
  // }

    // This function grabs info from the user





    // // This function grabs todos from the database and updates the view
    // function getUserInfo() {
    //   $.get("/api/todos", function(data) {
    //     todos = data;
    //     initializeRows();
    //   });
    // }

//     // When the page loads, grab all of our chirps
// $.get("/api/all", function(data) {

//   if (data.length !== 0) {

//     for (var i = 0; i < data.length; i++) {

//       var row = $("<div>");
//       row.addClass("chirp");

//       row.append("<p>" + data[i].author + " chirped.. </p>");
//       row.append("<p>" + data[i].body + "</p>");
//       row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//       $("#chirp-area").prepend(row);

//     }

//   }

// });