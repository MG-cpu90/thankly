$(document).ready(function () {
  // Variables
  const authorInput = $("#author-input");
  const bodyInput = $("#body-input");
  const promptHeading = $("#prompt-heading");
  const postThank = $("#post-thank");
  const thankArea = $("#thank-area");
  const deleteThankButton = $(".delete-thank");
  const dateTodayEntry = $(".dateTodayEntry");

  // Display today's date on the "New Entry" page
  dateTodayEntry.text(moment().format("dddd, MMMM Do, YYYY").toString());

  // Send an AJAX GET-request with jQuery to Get a random Prompt
  $.get("/api/prompt", function (data) {
    console.log("In API Prompt");
    console.log(data[0].id);
    promptHeading.text(data[0].question);
    promptHeading.data("promptid", data[0].id);
    postThank.data("promptid", data[0].id);
  })

  // When the page loads, grab all of our thanks
  $.get("/api/all", function (data) {
    renderThanks(data);
  });

  // When the delete button is clicked, delete that particular Thank
  $(document).click(function (event) {
    if ($(event.target).is(".delete-thank")) {
      handleDeleteThank();
    }
  })

  // Function for rendering all thanks
  function renderThanks(allThanks) {
    thankArea.empty();
    for (var i = 0; i < allThanks.length; i++) {
      getandDisplayData(allThanks[i]);      
      
    };
  }

  // Function for getting and displaying data
  function getandDisplayData(thank){
    $.get("/api/prompt/" + thank.prompt, function (res) {
      console.log("In question");
      console.log(res.question);
      displayThank(thank.author, thank.body, thank.createdAt, res.question, thank.id);
    });
  }

  // Function for displaying thanks
  function displayThank(author, body, createdAt, prompt, id) {
    let row = $("<div class='col s12'>");
    console.log("Author, body, createdat, id");
    console.log(author, id, createdAt, prompt, id);

    row.addClass("thank");

    row.append(
      `
      <div class="col s12 thank-container1">
          <div class="row thank-container2">
              <div class="col s12 thank-container3">
                  <p class="date-example">At ${moment(createdAt).format("h:mma on dddd, MMMM Do YYYY")}</p>
                  <p class="prompt-example">${prompt}</p>
                  <p class="thank-example">${body}</p>
                  <p class="author-name">Written by <span class="name-example">${author}</span></p>
                  <a class="waves-effect waves-light btn delete-thank" data-id=${id}><i class="material-icons">delete</i></a>
              </div>
          </div>
      </div>
  `);

    thankArea.prepend(row);
  }

  // Function handling the DELETE request
  function handleDeleteThank() {

    let deleteID = event.target.dataset.id;

    deleteThank(deleteID);
  }

  // Function for deleting a thank
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

  // Getting references to our form and input
  postThank.on("click", function (event) {
    event.preventDefault();

    // Make a userPost object
    let userPost = {
      author: authorInput.val().trim(),
      body: bodyInput.val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      prompt: Number(promptHeading.text())
    };
    // Wont submit the thank if we are missing a body or author
    if (!userPost.author || !userPost.body) {
      return;
    }

    // Send an AJAX POST-request with jQuery to Post a new Thank
    $.post("/api/new/" + postThank.data("promptid"), userPost)
      // On success, run the following code
      .then(function (res) {
        // Get all thanks
        $.get("/api/all", function (data) {

          // Render database of thanks so that each thank is created with an ID
          renderThanks(data);

        });

        // Empty each input box by replacing the value with an empty string
        authorInput.val("");
        bodyInput.val("");

      });

  })
})

