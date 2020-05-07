const thankForm = $("form.login");
const authorInput = $("#author-input");
const bodyInput = $("#body-input");
const promptHeading = $("#prompt-heading");
const postThank = $("#post-thank");
const thankArea = $("#thank-area");

$(document).ready(function () {
  // Getting references to our form and input



  postThank.on("click", function (event) {
    event.preventDefault();
    //console.log("clicked");

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
    $.post("/api/new/" + postThank.data("promptid"), userPost)
      // On success, run the following code
      .then(function () {
        //console.log(userPost);

        // var row = $("<div>");
        // row.addClass("thank");

        // row.append("<p>" + userPost.author + " posted: </p>");
        // row.append("<p>" + userPost.body + "</p>");
        // row.append("<p>At " + moment(userPost.createdAt).format("h:mma on dddd, MMMM Do YYYY") + "</p>");
        // row.append("<button><i class='fa fa-trash'></i></button>");

        // thankArea.prepend(row);

        var row = $("<div class='col s12'>");

        row.addClass("thank");

        row.append(
          `
        <div class="col s12">
                <div class="row">
                    <div class="col s12">
                        <p class="name-example">${userPost.author} posted:</p>
                        <p class="date-example">At ${moment(userPost.createdAt).format("h:mma on dddd, MMMM Do YYYY")}</p>
                        <p class="prompt-example">What are 5 things you're grateful for today?</p>
                        <p class="thank-example">${userPost.body}</p>
                        <a class="waves-effect waves-light btn delete-thank"><i class="material-icons">delete</i></a>
                    </div>
                </div>
            </div>
            `);

        thankArea.prepend(row);

      });

    // Empty each input box by replacing the value with an empty string
    authorInput.val("");
    bodyInput.val("");

  });
})

$(document).click(function (event) {
  if ($(event.target).is(".delete-thank")) {
    console.log("Clicked delete");
  }
})

$.get("/api/prompt", function (data) {
  promptHeading.after(`<h3>${data[0].question}</h3>`);
  postThank.data("promptid", data[0].id);
})

// When the page loads, grab all of our thanks
$.get("/api/all", function (data) {
  renderThanks(data);
  /*
  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("thank");

      row.append("<p>" + data[i].author + " posted: </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].createdAt).format("h:mma on dddd, MMMM Do YYYY") + "</p>");
      row.append(`<button class='delete-thank' data-id=${data[i].id}><i class='fa fa-trash'></i></button>`);
      thankArea.prepend(row);
    }
  }*/
});

function renderThanks(data) {
  thankArea.empty();
  for (var i = 0; i < data.length; i++) {
    displayThank(data[i].author, data[i].body, data[i].createdAt, data[i].id);
  }
}

function displayThank(author, body, createdAt, id) {
  // var row = $("<div>");
  // row.addClass("thank");
  // row.append("<p>" + author + " posted: </p>");
  // row.append("<p>" + body + "</p>");
  // row.append("<p>At " + moment(createdAt).format("h:mma on dddd, MMMM Do YYYY") + "</p>");
  // row.append(`<button class='delete-thank' data-id=${id}><i class='fa fa-trash'></i></button>`);
  // thankArea.prepend(row);


  var row = $("<div class='col s12'>");

  row.addClass("thank");

  row.append(
    `
  <div class="col s12">
          <div class="row">
              <div class="col s12">
                  <p class="name-example">${author} posted:</p>
                  <p class="date-example">At ${moment(createdAt).format("h:mma on dddd, MMMM Do YYYY")}</p>
                  <p class="prompt-example">What are 5 things you're grateful for today?</p>
                  <p class="thank-example">${body}</p>
                  <a class="waves-effect waves-light btn delete-thank" data-id=${id}><i class="material-icons">delete</i></a>
              </div>
          </div>
      </div>
      `);

  thankArea.prepend(row);

}