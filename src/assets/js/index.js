$(document).ready(function() {
    $(".load-button").click(function() {
      var content = $(this).data("content");
      loadContent(content);
    });

    function loadContent(contentType) {
      var contentURL = "";

      switch (contentType) {
        case "about":
          contentURL = "pages/about.html";
          break;
        case "contact":
          contentURL = "pages/contact.html";
          break;

        default:
          break;
      }

      if (contentURL !== "") {
        $("#page-content").load(contentURL);
      }
    }
});
