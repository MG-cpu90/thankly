
        // side navigation bar 
        const slide_menu = document.querySelectorAll(".sidenav");

        M.Sidenav.init(slide_menu, {});

        // dynamic pages

        $(document).ready(function () {

            $(".homepage-icon").on("click", homepage);
            $(".journal-icon").on("click", newEntry);
            $(".prev-post-icon").on("click", prevPosts);
            $(".pdf-download-icon").on("click", pdfDownload);
        });
        function newEntry() {
            $("#homepage").addClass('hidden');
            $("#prev-posts").addClass('hidden');
            $("#pdf-download").addClass('hidden');
            $("#journal-entry").removeClass('hidden');
        };
        function homepage() {
            $("#journal-entry").addClass('hidden');
            $("#prev-posts").addClass('hidden');
            $("#pdf-download").addClass('hidden');
            $("#homepage").removeClass('hidden');
        };
        function prevPosts() {
            $("#journal-entry").addClass('hidden');
            $("#pdf-download").addClass('hidden');
            $("#homepage").addClass('hidden');
            $("#prev-posts").removeClass('hidden');
        };
        function pdfDownload() {
            $("#journal-entry").addClass('hidden');
            $("#homepage").addClass('hidden');
            $("#prev-posts").addClass('hidden');
            $("#pdf-download").removeClass('hidden');
        };

        homepage()

        // inspirational quotes api
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://type.fit/api/quotes",
            "method": "GET"
        }

        $.ajax(settings).done(function (response) {
            var number = Math.floor(Math.random() * 1643);
            const data = JSON.parse(response);
            var quote = $(".quote").text(data[number].text);
            var quoteAuthor = $(".quoteAuthor").text("- " + data[number].author);
        });
  
        // mood buttons
        $(document).ready(function() {
            $(".sadbutton").on("click", function() {
                $(".mood-inspiration").text("It's ok to feel sad, wrap yourself in a cocoon of blankets and take some 'you' time!");
            });
            $(".glumbutton").on("click", function() {
                $(".mood-inspiration").text("Got a little rain cloud over your head? Remember you are loved.");
            });
            $(".mehbutton").on("click", function() {
                $(".mood-inspiration").text("We all have 'meh' days, fill out your daily 'THANKLY' post to change that glass half empty to a glass half full!");
            });
            $(".happybutton").on("click", function() {
                $(".mood-inspiration").text("Things are really coming up YOU today!");
            });
            $(".happiestbutton").on("click", function() {
                $(".mood-inspiration").text("You are champion of the world!");
            });
      
          });
        