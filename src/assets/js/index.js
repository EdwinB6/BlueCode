const navigationButtons = [
  { content: "home", label: "Home" },
  { content: "about", label: "About us" },
  { content: "mission", label: "Mission" },
  { content: "vision", label: "Vision" },
  { content: "politics", label: "Politics" },
  { content: "contact", label: "Contact" },
  { content: "our-services", label: "Our services" },
];

/**
 * Creates the buttons for vertical navigation
 * @param navigationButton
 * @returns HTML Tr/td/button
 */
function createButtonTable(button) {
  const row = $("<tr>");
  const cell = $("<td>");

  const buttonElement = $("<button>", {
    class:
      "load-button my-2 w-9/12 rounded-lg bg-slate-700 p-2 text-base text-white opacity-100 shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-slate-600",
    type: "button",
    "data-content": button.content,
    text: button.label,
  });

  cell.append(buttonElement);
  row.append(cell);

  return row;
}

/**
 * Creates the buttons for horizontal navigation
 * @param navigationButton
 * @returns HTML button
 */
function createButtonGrid(button) {
  const buttonElement = $("<button>", {
    class:
      "load-button w-full rounded-lg bg-slate-700 p-2 text-base text-white opacity-100 shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-slate-600",
    type: "button",
    "data-content": button.content,
    text: button.label,
  });

  const cell = $("<div>", {
    class: "flex justify-center", // Centrar contenido en la celda
  });

  cell.append(buttonElement);

  return cell;
}

/**
 * Enables dynamically loading HTML content
 * into the main index.
 * @param contentType - It comes from the data-content tag.
 */
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
      contentURL = "pages/about.html";
      break;

    case "vision":
      idContent = "vision";
      contentURL = "pages/about.html";
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
    $("#page-content").load(contentURL, function () {
      if (idContent !== "") {
        $("#page-content").animate(
          {
            scrollTop:
              $(`#${idContent}`).offset().top -
              $("#page-content").offset().top +
              $("#page-content").scrollTop(),
          },
          "slow",
        );
      }
    });
  }
}

/**
 * JQuery document event
 */
$(document).ready(function () {
  const buttonsTable = $("#navbarVertical");
  const buttonsContainer = $("#navbarCollapse .grid");

  navigationButtons.forEach((button) => {
    const buttonRow = createButtonTable(button);
    buttonsTable.append(buttonRow);
  });

  navigationButtons.forEach((button) => {
    const buttonElement = createButtonGrid(button);
    buttonsContainer.append(buttonElement);
  });

  /**
   * Button that triggers the function to dynamically load external HTML
   */
  $(".load-button").click(function () {
    const content = $(this).data("content");
    loadContent(content);
  });
});
