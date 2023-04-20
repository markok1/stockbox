if ($("body").hasClass("packagesBody")) {
  $(".box").click(function () {
    $(".box").removeClass("selectedBox");
    $(this).addClass("selectedBox");
  });
}

if ($("body").hasClass("signup3Body")) {
  $(".sliderHolder").slick({
    arrows: false,

    responsive: [
      {
        breakpoint: 4300,
        settings: "unslick",
      },
      {
        breakpoint: 1300,
        settings: "unslick",
      },
      {
        breakpoint: 1000,
        settings: "unslick",
      },
      {
        breakpoint: 650,
        settings: {
          initialSlide: 0,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px 40px",
          slidesToShow: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          initialSlide: 0,
          // slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px 40px",
          slidesToShow: 1.5,
          infinite: false,
        },
      },
    ],
  });

  $(".sliderContent").click(function () {
    $(".sliderContent").removeClass("selectedSlider");
    $(this).addClass("selectedSlider");
  });
  // Get the checkbox element
  var checkbox = $("#checkBoxVisible");

  // Get the div element to be shown or hidden
  var div = $("#domainName");

  // Show or hide the div based on the checkbox status
  checkbox.change(function () {
    if (checkbox.is(":checked")) {
      div.css("visibility", "visible");
    } else {
      div.css("visibility", "hidden");
    }
  });
}

if ($("body").hasClass("signup4Body")) {
  $(".radio").click(function () {
    $(".radio").removeClass("selectedRadio");
    $(this).addClass("selectedRadio");
  });
}

if ($("body").hasClass("dashboardBody")) {
  $(".formobile ul li a").click(function (e) {
    // e.preventDefault();
    if (!$(this).parent().parent().hasClass("dropdown-menu")) {
      if ($(this).parent().hasClass("boldDropdown")) {
        $(".formobile ul li").removeClass("boldDropdown");
      } else {
        $(".formobile ul li").removeClass("boldDropdown");
        $(this).parent().toggleClass("boldDropdown");
      }
      if (!$(this).parent().hasClass("dropdown")) {
        $(".formobile ul li").removeClass("activeNav");
        $(this).parent().addClass("activeNav");
      } else {
        if ($(this).next().hasClass("open")) {
          $(this).next().removeClass("open");
          $(this).next().css("max-height", "0px");
        } else {
          $(".dropdown-menu").removeClass("open");
          // $(this).parent().toggleClass("open");
          $(".dropdown-menu").css("max-height", "0px");
          $(".open").removeClass("open");
          $(this).next().addClass("open");
          var heightinside = $(this).next().find("li").height() + 190;
          $(this)
            .next()
            .css("max-height", heightinside + "px");
        }
      }
    }
    // if (!$(this).parent().hasClass("dropdown")) {
    //   $(".formobile ul li").removeClass("activeNav");
    //   $(this).parent().addClass("activeNav");
    // }
  });

  $(".card .cardTitle").click(function (e) {
    e.preventDefault();

    if ($(this).parent().hasClass("content_opened")) {
      $(this).parent().removeClass("content_opened");
      $(this).next().css("max-height", "0px");
    } else {
      $(".content_opened").find(".contentShow").css("max-height", "0px");
      $(".content_opened").removeClass("content_opened");
      $(this).parent().addClass("content_opened");
      var heightinside = $(this).next().find(".inside").height() + 50;
      $(this)
        .next()
        .css("max-height", heightinside + "px");
    }
  });
  $(".navbar .lines").click(function () {
    if ($(this).parent().hasClass("activeLines")) {
      $(this).parent().removeClass("activeLines");
    } else {
      $(this).parent().addClass("activeLines");
    }
  });

  $(document).ready(function () {
    // Hide mobile navbar when user clicks away from it
    $(document).click(function (event) {
      var clickTarget = $(event.target);
      if (
        !clickTarget.closest(".navbar").length &&
        !clickTarget.closest(".lines").length
      ) {
        $(".navbar").removeClass("activeLines");
      }
    });
  });
}
if ($("body").hasClass("dashboardBodyProduct")) {
  //tabs
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("activeTabs");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("activeTabs");
      });
      tab.classList.add("activeTabs");
      target.classList.add("activeTabs");
    });
  });
  // when you click on the filters icon
  $(".filtersLink").click(function (e) {
    e.preventDefault();

    if ($(this).next().hasClass("filters_opened")) {
      $(this).next().removeClass("filters_opened");
      $(this).next().css("max-height", "0px");
    } else {
      $(".filtersDesktop").find(".filtersInside").css("max-height", "0px");
      $(".filters_opened").removeClass("content_opened");
      $(this).next().addClass("filters_opened");
      var heightinside = $(this).next().find(".filtersInside").height() + 50;
      $(this)
        .next()
        .css("max-height", heightinside + "px");
    }
  });
  //swipe products
  $(".productSwipe").bind("swiperight", handler3);
  function handler3(event) {
    $(this).removeClass("swipeActive");
  }

  // swipe left

  $(".productSwipe").bind("swipeleft", handler4);
  function handler4(event) {
    $(this).addClass("swipeActive");
  }

  //slider for detailed products
  $(".imageSlider").slick({
    arrows: false,
    initialSlide: 0,
    slidesToScroll: 1,
    centerPadding: "0px 40px",
    variableWidth: true,
    slidesToShow: 3,
    infinite: false,
  });
  //seo keywords
  $(".multipleSelect2").select2({
    placeholder: "Search for attributes", //placeholder
  });
}
