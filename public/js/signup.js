const authorInput = $("#author-input");
const bodyInput = $("#body-input");
const promptHeading = $("#prompt-heading");
const postThank = $("#post-thank");
const thankArea = $("#thank-area");
const deleteThankButton = $(".delete-thank");

$(document).ready(function () {
  // Getting references to our form and input

  postThank.on("click", function (event) {
    event.preventDefault();

    // Make a userPost object
    let userPost = {
      author: authorInput.val().trim(),
      body: bodyInput.val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    if (!userPost.author || !userPost.body) {
      return;
    }

    // Send an AJAX POST-request with jQuery to Post a new Thank
    $.post("/api/new/" + postThank.data("promptid"), userPost)
      // On success, run the following code
      .then(function (res) {
        // Get all thanks
        $.get("/api/all", function (data) {

          // Generate HTML for new thank
          let row = $("<div class='col s12'>");

          row.addClass("thank");

          row.append(
            `
          <div class="col s12 thank-container1">
                  <div class="row thank-container2">
                      <div class="col s12 thank-container3">
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

          // Render database of thanks so that each thank is created with an ID
          renderThanks(data);

        });

        // Empty each input box by replacing the value with an empty string
        authorInput.val("");
        bodyInput.val("");

      });

  })
})

// Send an AJAX GET-request with jQuery to Get a random Prompt
$.get("/api/prompt", function (data) {
  promptHeading.after(`<h3>${data[0].question}</h3>`);
  postThank.data("promptid", data[0].id);
})

// When the page loads, grab all of our thanks
$.get("/api/all", function (data) {
  renderThanks(data);
});

// When the delete button is clicked, delete that particular Thanks
$(document).click(function (event) {
  if ($(event.target).is(".delete-thank")) {
    handleDeleteThank();
  }
})

// Function for rendering all thanks
function renderThanks(data) {
  thankArea.empty();
  for (var i = 0; i < data.length; i++) {
    displayThank(data[i].author, data[i].body, data[i].createdAt, data[i].id);
  }
}

// Function for displaying thanks
function displayThank(author, body, createdAt, id) {
  let row = $("<div class='col s12'>");

  row.addClass("thank");

  row.append(
    `
  <div class="col s12 thank-container1">
          <div class="row thank-container2">
              <div class="col s12 thank-container3">
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

function handleDeleteThank() {

  let deleteID = event.target.dataset.id;

  deleteThank(deleteID);
}

function deleteThank(id) {

  $.ajax({
    method: "DELETE",
    url: "/api/thank/" + id
  }).then(function (res) {
    $.get("/api/all", function (data) {
      renderThanks(data);
    });
  })

}