new WOW().init();

$(".title, .subtitle").each(function () {
  if (!$(this).hasClass("policy-title")) {
    $(this).addClass("wow");
    $(this).addClass("fadeInUp");
  }
});

$(document).on("scroll", function () {
  var documentScroll = $(document).scrollTop();
  $(".nav li a").each(function () {
    var hash = $(this).attr("href");
    var target = $(hash);
    if (target.length) {
      if (
        target.position().top - $(".header").innerHeight() <= documentScroll &&
        target.position().top + target.outerHeight() > documentScroll
      ) {
        $(".nav li a").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    }
  });
});

$(".partners__slider").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  appendArrows: $(".partners__slider__arrows"),
  appendDots: $(".partners__slider__dots"),
  prevArrow: '<button type="button" class="slider-prev slider-arrow"></button>',
  nextArrow: '<button type="button" class="slider-next slider-arrow"></button>',
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".partners-sec__slider").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  appendArrows: $(".partners-sec__slider__arrows"),
  appendDots: $(".partners-sec__slider__dots"),
  prevArrow: '<button type="button" class="slider-prev slider-arrow"></button>',
  nextArrow: '<button type="button" class="slider-next slider-arrow"></button>',
  responsive: [
    {
      breakpoint: 825,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".about__slider").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  appendArrows: $(".about__slider__arrows"),
  prevArrow: '<button type="button" class="slider-prev slider-arrow"></button>',
  nextArrow: '<button type="button" class="slider-next slider-arrow"></button>',
});

$(".about__partners__slider").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  appendDots: $(".about__partners__slider__dots"),
  arrows: true,
  appendArrows: $(".about__partners__slider__arrows"),
  prevArrow: '<button type="button" class="slider-prev slider-arrow"></button>',
  nextArrow: '<button type="button" class="slider-next slider-arrow"></button>',
});

$(".about__reviews").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  appendDots: $(".about__reviews__dots"),
  arrows: true,
  appendArrows: $(".about__reviews__arrows"),
  prevArrow: '<button type="button" class="slider-prev slider-arrow"></button>',
  nextArrow: '<button type="button" class="slider-next slider-arrow"></button>',
});

$(".questions__item__head").on("click", function () {
  var item = $(this).closest(".questions__item");
  var answ = $(item).find(".questions__item__answer");
  $(answ).slideToggle();
  $(item).toggleClass("active");
});

$(".nav").on("click", "a.anchor", function (event) {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top - 50 }, 1000);
  $(".header__burger").removeClass("active");
  if ($(window).width() <= 824) {
    $(".nav").slideToggle();
  }
});

$.mask.definitions["9"] = "";
$.mask.definitions["d"] = "[0-9]";
$('input[name="phone"]').mask("+998 (dd) ddd-dd-dd");

$(".header__burger").on("click", function () {
  $(this).toggleClass("active");
  $(".nav").slideToggle();
});

$(".popup-wrap, .close").on("click", function (e) {
  if (e.target == this) {
    $(this).closest(".popup").fadeOut();
  }
});

// $('.policy-ref').on('click', function(e){
//   e.preventDefault();
//   $('#popup-policy').fadeIn()
// })

//   $(".popup-ref").on("click", function (event) {
//     event.preventDefault();
//     var id  = $(this).attr('href');
//     $(id).fadeIn();
//   });

$(".quiz__size__square__ui").slider({
  range: "min",
  value: 40,
  min: 40,
  max: 20000,
  step: 1,
  animate: true,
  slide: function (event, ui) {
    $(sq_box).html(ui.value + " м²");
    $("#q_square").val(ui.value + " м²");
    $("#size_btn").prop("disabled", false);
  },
  stop: function (event, ui) {},
});

$(".quiz__size__height__ui").slider({
  range: "min",
  value: 150,
  min: 10,
  max: 150,
  orientation: "vertical",
  step: 1,
  animate: true,
  slide: function (event, ui) {
    $(height_box).html(150 - Number(ui.value) + 10 + " м");
    $("#q_height").val(150 - Number(ui.value) + 10 + " м");
    $("#size_btn").prop("disabled", false);
  },
  stop: function (event, ui) {},
});

let height_value = document.createElement("div");
height_value.id = "height_val";
height_value.className = "quiz__size__height__ui-val quiz__size__ui-val";
height_value.innerHTML = "10 м";
$(".quiz__size__height__ui .ui-slider-handle").append(height_value);
let sq_value = document.createElement("div");
sq_value.id = "sq_val";
sq_value.className = "quiz__size__square__ui-val quiz__size__ui-val";
sq_value.innerHTML = "40 м²";
$(".quiz__size__square__ui .ui-slider-handle").append(sq_value);

height_box = document.getElementById("height_val");
sq_box = document.getElementById("sq_val");

// new WOW().init();

function track_progress(num) {
  $('.quiz__bar__item[data-progress="' + num + '"]').addClass("active");
}

function track_back(num) {
  $('.quiz__bar__item[data-progress="' + num + '"]').removeClass("active");
}

$(".quiz__btn-next").on("click", function () {
  console.log($(this).text());
  $(".quiz__question").removeClass("active");
  var q = $(this).closest(".quiz__question");
  var id = Number($(q).data("question")) + 1;
  var MAX_Q = 11;
  if (id <= MAX_Q) {
    $('.quiz__question[data-question="' + id + '"]').addClass("active");
    track_progress(id);
  } else {
    $(".quiz__test__main").hide();
    $(".quiz__test__final").show();
    $(".quiz__test__final__load").addClass("active");
    $(".quiz__gift__summary__title").html(
      '<span class="strong lg">Вы получите</span>'
    );
    $(".quiz__gift__item__img").addClass("unlock");
  }
  var start = $("#quiz_start");
  var top = $(start).offset().top;
  $("body,html").animate({ scrollTop: top - 150 }, 100);
});

$(".quiz__btn-prev").on("click", function () {
  $(".quiz__question").removeClass("active");
  var q = $(this).closest(".quiz__question");
  var id = Number($(q).data("question")) - 1;
  track_back(id + 1);
  $('.quiz__question[data-question="' + id + '"]').addClass("active");
  var start = $("#quiz_start");
  var top = $(start).offset().top;
  $("body,html").animate({ scrollTop: top - 150 }, 100);
});

$(
  '.quiz__answers input[type="radio"], .quiz__answer--text input[type="radio"]'
).on("change", function () {
  var q = $(this).closest(".quiz__question");
  var btn = $(q).find(".quiz__btn-next");
  $(btn).prop("disabled", false);
});

$(
  '.quiz__answers input[type="checkbox"], .quiz__answer--text input[type="checkbox"]'
).on("change", function () {
  var q = $(this).closest(".quiz__question");
  var btn = $(q).find(".quiz__btn-next");
  var check = $(q).find("input[type=checkbox]:checked");
  if (check.length > 0) {
    $(btn).prop("disabled", false);
  } else {
    $(btn).prop("disabled", true);
  }
});

$(".quiz__size__square__checkbox").on("change", function () {
  var q = $(this).closest(".quiz__question");
  var btn = $(q).find(".quiz__btn-next");
  $(btn).prop("disabled", false);
});

$(".form__contact__radio").on("change", function () {
  var form = $(this).closest("form");
  var input = $(form).find('input[name="phone"]');
  if ($(this).val() == "viber") {
    $(input).attr("placeholder", "Введите ваш телефон Viber");
  } else if ($(this).val() == "WhatsApp") {
    $(input).attr("placeholder", "Введите ваш телефон WhatsApp");
  } else if ($(this).val() == "Тelegram") {
    $(input).attr("placeholder", "Введите ваш телефон Тelegram");
  } else {
    $(input).attr("placeholder", "Введите ваш телефон");
  }
});

$(".quiz__form .form__contact__radio").on("change", function () {
  if ($(this).val() == "E-mail") {
    $("#quiz_mail").show();
    $("#quiz_mail").prop("required", true);
  } else {
    $("#quiz_mail").hide();
    $("#quiz_mail").prop("required", false);
  }
});

$(".quiz--file").on("change", function () {
  var q = $(this).closest(".quiz__question");
  var file = $(q).find(".quiz__answer__file");
  if ($(this).val() == "Да") {
    $(file).removeClass("visually-hidden");
  } else {
    $(file).addClass("visually-hidden");
  }
});

$(".seo__expand").on("click", function () {
  $(".seo__text").toggleClass("full");
  $(this).toggleClass("active");
});

$(".service__item__btn").on("click", function () {
  $("#form_service_title").html($(this).data("service"));
  $("#form_serv").val($(this).data("service"));
  $("#popup-service").fadeIn();
});

$(".cases__btn").on("click", function () {
  $("body,html").animate({ scrollTop: $("#quiz").offset().top - 150 }, 1000);
});

/* Cookie */
var vent_visit = get_cookie("vent_visit");
$(document).mouseleave(function (event) {
  if (get_cookie("vent_visit") != "1") {
    event = event || window.event;
    if (event.clientY < 0 || event.clientY < 3) {
      $("#popup-magnet").fadeIn();
      var date2 = new Date();
      date2.setDate(date2.getDate() + 7);
      date2 = date2.toUTCString();
      document.cookie = "vent_visit=1;expires=" + date2;
    }
  }
});

function get_cookie(cookie_name) {
  var results = document.cookie.match(
    "(^|;) ?" + cookie_name + "=([^;]*)(;|$)"
  );

  if (results) return unescape(results[2]);
  else return null;
}

$('a[href="#popup-policy"]').on("click", function (e) {
  e.preventDefault();
  $("#popup-policy").fadeIn();
});

$(".scroll").on("click", function () {
  $("body,html").animate({ scrollTop: window.innerHeight }, 500);
});

$("form.form").on("submit", function (e) {
  e.preventDefault();
  var fd = new FormData(this);
  if ($(this).attr("action")) {
    url = $(this).attr("action");
  } else {
    url = "request.php";
  }
  $.ajax({
    url: url,
    data: fd,
    processData: false,
    contentType: false,
    type: "POST",
    success: function (response) {
      location.href = "/thanks.html";
    },
  });
});

$("form.file-form").on("submit", function (e) {
  e.preventDefault();
  url = "request.php";
  var fd = new FormData(this);
  $.ajax({
    url: url,
    data: fd,
    processData: false,
    contentType: false,
    type: "POST",
    success: function (response) {
      $(".popup").fadeOut();
      $("#popup-file").fadeIn();
      var link = document.createElement("a");
      link.setAttribute("href", "promvent.pdf");
      link.setAttribute("download", "download");
      link.click();
      window.setTimeout(function () {
        $("#popup-file").fadeOut();
      }, 5000);
    },
  });
});
