$(document).ready(function() {
    $(".load-button").click(function() {
      const content = $(this).data("content");
      loadContent(content);
    });

    function loadContent(contentType) {
      let contentURL = "";
      let idContent = "";

      switch (contentType) {
        case "home":
          window.location.href = "index.html";
          break;

        case "about":
          idContent = "about-us";
          contentURL = "pages/about.html";
          break;

        case "mission":
          idContent = "mission";
          contentURL = "pages/about.html"
          break;

        case "vision":
          idContent = "vision";
          break;

        case "politics":
          break;

        case "contact":
          contentURL = "pages/contact.html";
          break;

        case "our-services":
          break;

        default:
          break;
      }

      if (contentURL !== "") {
        $("#page-content").load(contentURL, function() {
          if (idContent !== "") {
            $('#page-content').animate({
              scrollTop: $(`#${idContent}`).offset().top - $('#page-content').offset().top + $('#page-content').scrollTop()
            }, 'slow');
          }
        });
      }
      
    }
});
