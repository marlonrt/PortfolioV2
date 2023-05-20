$(document).ready(function() {
  function loadContent(url, targetId) {
    $("#" + targetId).hide();
    $.get(url, function(data) {
      $("#" + targetId).html(data).fadeIn(function() {
        $(".navbar-collapse").collapse("hide");
      });
    });
  }

  loadContent("html/projetos.html", "content");

  $(".navbar-nav .nav-link").click(function(e) {
    e.preventDefault();
    var page = $(this).data("page");
    loadContent("html/" + page, "content");
  });

  $(document).click(function(e) {
    if (!$(e.target).hasClass("navbar-toggler")) {
      $(".navbar-collapse").collapse("hide");
    }
  });
});
