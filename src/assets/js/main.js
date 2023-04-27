"user strict";

// Preloader
$(window).on("load", function () {
  $(".preloader").fadeOut(1000);
});

// Menu Click Event
let trigger = $(".sidebar-toggler");
let dropdown = $(".dashboard-sidebar-wrapper");
if (trigger || dropdown) {
  trigger.each(function () {
    $(this).on("click", function (e) {
      e.stopPropagation();
      dropdown.toggleClass("active");
      trigger.toggleClass("active");
    });
  });
  dropdown.each(function () {
    $(this).on("click", function (e) {
      e.stopPropagation();
    });
  });
  $(document).on("click", function () {
    if (parseInt(screenSize) < parseInt(991)) {
      dropdown.removeClass("active");
      trigger.removeClass("active");
    }
  });
}

// Submenu Click Event
$(".menu .menu-item .menu-link").on("click", function (e) {
  if (parseInt(screenSize) < parseInt(991)) {
    $(this).siblings(".sub-menu").slideToggle();
  }
});

//Menu Dropdown
$("ul>li>.sidebar-submenu").parent("li").addClass("has-submenu");

// Detect Screen Size
let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
  screenSize = window.innerWidth;
});

// Sticky Menu
var header = document.querySelector(".header");
if (header) {
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });
}

// Slider Part
// $(".brand-slider").slick({
// 	fade: false,
// 	slidesToShow: 6,
// 	slidesToScroll: 1,
// 	infinite: true,
// 	autoplay: true,
// 	pauseOnHover: true,
// 	centerMode: false,
// 	dots: false,
// 	arrows: false,
// 	nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
// 	prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
// 	responsive: [
// 		{
// 			breakpoint: 1199,
// 			settings: {
// 				slidesToShow: 5,
// 			},
// 		},
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				slidesToShow: 5,
// 			},
// 		},
// 		{
// 			breakpoint: 767,
// 			settings: {
// 				slidesToShow: 4,
// 			},
// 		},
// 		{
// 			breakpoint: 575,
// 			settings: {
// 				slidesToShow: 3,
// 			},
// 		},
// 	],
// });

// Odometer Counter
// let counter = $(".counter-item");
// if (counter) {
// 	counter.each(function () {
// 		$(this).isInViewport(function (status) {
// 			if (status === "entered") {
// 				for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
// 					var el = document.querySelectorAll(".odometer")[i];
// 					el.innerHTML = el.getAttribute("data-odometer-final");
// 				}
// 			}
// 		});
// 	});
// }

//Faq Click Event
$(".sidebar-menu li a").on("click", function (e) {
  var element = $(this).parent("li");
  if (element.hasClass("open")) {
    element.removeClass("open");
    element.find(".sidebar-submenu").removeClass("open");
    element.find(".sidebar-submenu").slideUp(300);
  } else {
    element.addClass("open");
    element.children(".sidebar-submenu").slideDown(300);
    element.siblings("li").children(".sidebar-submenu").slideUp(300);
    element.siblings("li").removeClass("open");
    element.siblings("li").find(".sidebar-submenu").slideUp(300);
  }
});

// Active Path Active
var path = location.pathname.split("/");
var current = location.pathname.split("/")[path.length - 1];
$(".sidebar-menu li a").each(function () {
  if ($(this).attr("href").indexOf(current) !== -1 && current != "") {
    $(this).addClass("active");
  }
});

// Card Content Toggle

if (parseInt(screenSize) < parseInt(991)) {
  $(".mobile-toggle-card .card-header").on("click", function (e) {
    var element = $(this).parent(".mobile-toggle-card");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.children(".card-header").removeClass("active");
      element.find(".card-body, .card-footer").slideUp(300);
    } else {
      element.addClass("open");
      element.children(".card-body, .card-footer").slideDown(300);
      element
        .siblings(".mobile-toggle-card")
        .children(".card-body, .card-footer")
        .slideUp(300);
      element.siblings(".mobile-toggle-card").removeClass("open");
      element.children(".card-header").addClass("active");
      element
        .siblings(".mobile-toggle-card")
        .find(".card-body, .card-footer")
        .slideUp(300);
    }
  });
}

// Filter Hide Show
$(".filter-btn").on("click", function (e) {
  $(".filter-row").slideToggle();
});

// Multi Select Js
$(".multiselect li input[type='checkbox']").on("click", function (e) {
  var element = $(this).parent("label").parent("li");
  if (element.hasClass("active")) {
    element.removeClass("active");
  } else {
    element.addClass("active");
  }
});

// select-2 init
$(".select2-basic").select2();
$(".select2-multi-select").select2();
$(".select2-auto-tokenize").select2({
  tags: true,
  tokenSeparators: [","],
});

$(".attribute-control").on("change", function () {
  $(".select2-selection__rendered").append(
    `<i class='las la-times clear-text p-1 pe-0'></i>`
  );
  $(".select2-selection__rendered").css('display', 'block')
});

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function (mutations, observer) {
  $(".clear-text").on("click", function () {
    $(".select2-selection__rendered").html("");
    $(".select2-selection__rendered").css('display', 'none')
  });
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true,
  //...
});
