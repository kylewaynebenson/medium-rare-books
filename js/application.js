$(document).ready(function () {
      $('#search-input').blur(function() {
              $('.max-container').removeClass("focus");
            })
            .focus(function() {
              $('.max-container').addClass("focus")
            });
});
