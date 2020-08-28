$("h1").before("you suck");

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({
    opacity: 0.5
  });
})