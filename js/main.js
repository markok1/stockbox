if (window.location.pathname == "/packages.html") {
  $(".box").click(function () {
    $(".box").removeClass("selectedBox");
    $(this).addClass("selectedBox");
  });
}
if (window.location.pathname == "/signup3.html") {
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
          // slidesToShow: 2,
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

if (window.location.pathname == "/signup4.html") {
  $(".radio").click(function () {
    $(".radio").removeClass("selectedRadio");
    $(this).addClass("selectedRadio");
  });
}
if (
  window.location.pathname == "/dashboardStockbox.html" ||
  window.location.pathname == "/dashboardRolex.html" ||
  window.location.pathname == "/dashboardWos.html"
) {
  $(".formobile ul li a").click(function (e) {
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
        if ($(this).parent().hasClass("open")) {
          $(this).parent().removeClass("open");
        } else {
          $(".dropdown").removeClass("open");
          $(this).parent().toggleClass("open");
        }
      }
    }
    if (!$(this).parent().hasClass("dropdown")) {
      $(".formobile ul li").removeClass("activeNav");
      $(this).parent().addClass("activeNav");
    }
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
    if ($(this).parent().parent().hasClass("active")) {
      $(this).parent().parent().removeClass("active");
    } else {
      $(this).parent().parent().addClass("active");
    }
  });
}
