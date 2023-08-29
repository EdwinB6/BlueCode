$(document).ready(function () {
  const navbarCollapse = "#navbarCollapse";

  $("#menuButton").click(function () {
    $(navbarCollapse).slideToggle("fast");
  });

  const updateContainerVisibility = () => {
    if (window.matchMedia("(max-width: 639px)").matches) {
      $(navbarCollapse).removeClass("hidden");
    }
  };

  $(window)
    .on("resize", function () {
      updateContainerVisibility();
    })
    .trigger("resize");
});
