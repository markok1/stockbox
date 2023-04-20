//attribute set product description start
let initialOptionsData = [
  { name: "Option1", value: "1111" },
  { name: "Option2", value: "2222" },
  { name: "Option3", value: "3333" },
  { name: "Option4", value: "4444" },
  { name: "Option5", value: "5555" },
  { name: "Option6", value: "6666" },
  { name: "Option7", value: "7777" },
  { name: "Option8", value: "8888" },
  { name: "Option9", value: "9999" },
];
let optionsData = [
  { name: "Option1", value: "1111" },
  { name: "Option2", value: "2222" },
  { name: "Option3", value: "3333" },
  { name: "Option4", value: "4444" },
  { name: "Option5", value: "5555" },
  { name: "Option6", value: "6666" },
  { name: "Option7", value: "7777" },
  { name: "Option8", value: "8888" },
  { name: "Option9", value: "9999" },
];
let selectedData = [];

function GenerateDropDown() {
  const rootContainer = document.getElementById("attributeBox");
  const inputContainer = document.createElement("div");
  const optionsContainer = document.createElement("div");
  const selectedOptionsContainer = document.createElement("div");
  inputContainer.setAttribute("class", "dropdown-input-container");
  optionsContainer.setAttribute("class", "dropdown-option-container");
  selectedOptionsContainer.setAttribute(
    "class",
    "dropdown-selected-options-container"
  );
  rootContainer?.appendChild(inputContainer);
  rootContainer?.appendChild(optionsContainer);
  inputContainer.appendChild(selectedOptionsContainer);
  inputContainer.addEventListener("click", function () {
    let allOptions = document.getElementsByClassName(
      "dropdown-multiselect-option"
    );
  });
  function GenerateSearchInput() {
    const searchContainer = document.createElement("div");
    searchContainer.setAttribute("id", "searchContainer");
    const searchInput = document.createElement("input");
    searchInput.setAttribute("class", "searchInput");
    searchInput.setAttribute("placeholder", "Search for title.. (type option)");
    searchInput.setAttribute("type", "text");
    searchInput.style.height = "43px";
    searchInput.style.width = "99.5%";

    searchInput.addEventListener("input", function (event) {
      let input = event.target.value;
      let optContainer = document.getElementsByClassName(
        "dropdown-option-container"
      )[0];
      if (input === "" || input === undefined) {
        document.getElementsByClassName(
          "dropdown-option-container"
        )[0].style.visibility = "hidden";
        const diff = initialOptionsData.filter(
          ({ value: id1 }) =>
            !selectedData.some(({ value: id2 }) => id2 === id1)
        );
        DeleteOptions();
        WriteDataToOption(diff);
      } else {
        optContainer.style.visibility = "visible";
        let abc = optionsData.filter(
          (element) =>
            element.name.includes(input) || element.value.includes(input)
        );
        DeleteOptions();
        WriteDataToOption(abc);
      }
    });
    searchContainer.appendChild(searchInput);
    const el = document.getElementById("searchContainer");
    if (el !== null) {
      el?.remove();
    }
    selectedOptionsContainer.appendChild(searchContainer);
  }
  GenerateSearchInput();
  function GenerateOption(data) {
    const option = document.createElement("div");
    option.style.padding = "5px";
    option.setAttribute("class", "dropdown-multiselect-option");
    const a = document.createElement("a");
    a.setAttribute("href", "www.google.com");
    option.appendChild(a);
    option.innerHTML = data.value + " - " + data.name;
    option.setAttribute("value", data.value);
    option.setAttribute("name", data.name);
    option.addEventListener("click", function (event) {
      document.getElementsByClassName(
        "dropdown-option-container"
      )[0].style.visibility = "hidden";
      const optionValue = event.target.getAttribute("value");
      const optionName = event.target.getAttribute("name");
      selectedData.push({ name: optionName, value: optionValue });
      GenerateSelectedOptions(selectedData);
      optionsData = optionsData.filter(
        (element) => element.value !== optionValue
      );
      DeleteOptions();
      WriteDataToOption(optionsData);
    });
    optionsContainer.appendChild(option);
  }
  function DeleteOptions() {
    let allOpts = document.querySelectorAll(".dropdown-multiselect-option");
    for (let i = 0; i < allOpts.length; i++) {
      allOpts[i].remove();
    }
  }
  function GenerateSelectedOptions(data) {
    const allSelected = document.querySelectorAll(".selected-lozenge");
    for (let i = 0; i < allSelected.length; i++) {
      allSelected[i].remove();
    }
    function DeleteOptions() {
      let allOpts = document.querySelectorAll(".dropdown-multiselect-option");
      for (let i = 0; i < allOpts.length; i++) {
        allOpts[i].remove();
      }
    }
    function WriteDataToOption(data) {
      data = data.sort((a, b) => a.value - b.value);
      for (let i = 0; i < data?.length; i++) {
        GenerateOption(data[i]);
      }
    }
    for (let i = 0; i < data.length; i++) {
      let lozContainer = document.createElement("div");
      let lozName = document.createElement("div");
      lozName.setAttribute("class", "loz-name");
      lozName.innerHTML = data[i].name;
      let lozClose = document.createElement("div");
      lozClose.setAttribute("class", "loz-close");
      lozClose.innerHTML = "✖";
      lozClose.style.padding = "5x";
      lozContainer.appendChild(lozName);
      lozContainer.appendChild(lozClose);
      lozContainer.setAttribute("class", "selected-lozenge");
      lozContainer.setAttribute("name", data[i].name);
      lozContainer.setAttribute("value", data[i].value);
      lozClose.addEventListener("click", function (event) {
        let lozValue = event.target.parentElement.getAttribute("value");
        let lozName = event.target.parentElement.getAttribute("name");
        selectedData = selectedData.filter(
          (element) => element.name !== lozName
        );
        GenerateSelectedOptions(selectedData);
        optionsData.push({ name: lozName, value: lozValue });
        DeleteOptions();
        WriteDataToOption(optionsData);

        event.target.parentElement.remove();
      });
      selectedOptionsContainer.appendChild(lozContainer);
    }
    GenerateSearchInput();
  }
  function WriteDataToOption(data) {
    data = data.sort((a, b) => a.value - b.value);
    for (let i = 0; i < data?.length; i++) {
      GenerateOption(data[i]);
    }
  }
  WriteDataToOption(optionsData);
}
GenerateDropDown();
//attribute set product description end

//keyword with images marketing

jQuery.expr[":"].containsLower = function (a, i, m) {
  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};
$("#filter").keyup(function () {
  $(".dropdown_finder p")
    .hide()
    .filter(':containsLower("' + this.value + '")')
    .show();
});

var i = 0;
$(".multiselect_custom .dropdown_finder p").click(function () {
  i = i + 1;

  var clasofclicked = "itamadded" + i;

  var appendelement =
    "<div class='clickedElement' nameofclicked=" +
    clasofclicked +
    "><img class='img' src='" +
    $(this).attr("imgUrl") +
    "' alt=''><h2>" +
    $(this).text() +
    "</h2><p>" +
    $(this).attr("price") +
    "</p><img class='icon' src='" +
    $(this).attr("xicon") +
    "' alt=''></div>";
  $(".multiselect_custom .right").append(appendelement);

  $(this).addClass(clasofclicked);
  $(this).addClass("itamadded");

  $(".multiselect_custom input").val("");
});

$(".multiselect_custom").click(function () {
  if ($(this).hasClass("clickedElement")) {
    alert(2);
  }
});

$(document).click(function (event) {
  if (
    $(event.target).closest(".clickedElement").length &&
    $(event.target).closest(".icon").length
  ) {
    var attr = "." + $(event.target).parent().attr("nameofclicked");
    $(attr).removeClass("itamadded");
    $(event.target).parent().remove();
  }
});
