$(document).ready(function () {
  // Initially hide sections
  $(".paper1, .paper2, .paper3, .paper4").hide().css("opacity", "0");

  // Step 1: Button click → show paper1
  $(".forbutton").on("click", function () {
    // Hide .formeyou
    $(".formeyou").fadeOut(300);

    // Show paper1 with full opacity
    $(".paper1")
      .show()
      .animate({ opacity: 1 }, 600)
      .addClass("show");
  });

  // Step 2: Checkbox click → dim paper1, show paper2
  $(".paper1").on("change", "input[type='checkbox']", function () {
    // Dim paper1
    $(".paper1").animate({ opacity: 1 }, 300);

    // Show paper2 with full opacity
    $(".paper2")
      .show()
      .animate({ opacity: 1 }, 300)
      .addClass("show");
  });

$(".paper2").on("change", "input[type='checkbox']", function () {
    // Dim paper1
    $(".paper2").animate({ opacity: 1 }, 300);

    // Show paper3 with full opacity
    $(".paper3")
      .show()
      .animate({ opacity: 1 }, 300)
      .addClass("show");
  });

$(".paper3").on("change", "input[type='checkbox']", function () {
    // Dim paper1
    $(".paper3").animate({ opacity: 1 }, 300);

    // Show paper3 with full opacity
    $(".paper4")
      .show()
      .animate({ opacity: 1 }, 300)
      .addClass("show");
  });
});