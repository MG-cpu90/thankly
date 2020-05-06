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

$(document).ready(function() {
  // Getting references to our form and input
  var thankForm = $("form.login");
  var authorInput = $("input#email-input2");
  var bodyInput = $("input#password-input2");
  thankForm.on("submit", function(event) {
    event.preventDefault();
    console.log("clicked");

    // GET request
    $.get("/api/prompt", function(data) {
      console.log(data);
    
    });

    // Make a userPost object
    var userPost = {
      author: authorInput.val().trim(),
      body: bodyInput.val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    if (!userPost.author || !userPost.body) {
      return;
    }

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", userPost)
    // On success, run the following code
    .then(function() {
      console.log(userPost);

      var row = $("<div>");
      row.addClass("thank");

      row.append("<p>" + userPost.author + " posted: </p>");
      row.append("<p>" + userPost.body + "</p>");
      row.append("<p>At " + moment(userPost.created_at).format("h:mma on dddd, MMMM Do YYYY") + "</p>");
      row.append("<button><i class='fa fa-trash'></i></button>");

      $("#thank-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  authorInput.val("");
  bodyInput.val("");

});
})

// When the page loads, grab all of our thanks
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("thank");

      row.append("<p>" + data[i].author + " posted: </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd, MMMM Do YYYY") + "</p>");
      row.append("<button><i class='fa fa-trash'></i></button>");

      $("#thank-area").prepend(row);

    }

  }

});
