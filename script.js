$(document).ready(function() {
  function loadContent(url, targetId) {
    $("#" + targetId).hide();
    $.get(url, function(data) {
      $("#" + targetId).html(data).fadeIn(function() {
        $(".navbar-collapse").removeClass("show").addClass("hide");
      });
    });
  }

  loadContent("html/sobre.html", "content");

  $(document).on("click", ".navbar-nav .nav-link", function(e) {
    e.preventDefault();
    var page = $(this).data("page");
    loadContent(page, "content");
  });

  $(document).on("click", function(e) {
    if (!$(e.target).hasClass("navbar-toggler")) {
      $(".navbar-collapse").removeClass("show").addClass("hide");
    }
  });
});
