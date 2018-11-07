$(document).ready(function () {
      $('#search-input').blur(function() {
              $('.max-container').removeClass("focus");
            }).focus(function() {
              $('.max-container').addClass("focus");
            });

      SimpleJekyllSearch({
              searchInput: document.getElementById('search-input'),
              resultsContainer: document.getElementById('results-container'),
              json: '/search.json'
      })
      $('.svg__group').each(function(i) {
            var self = this; //in scope
            var time = i*750;
            $(self).data('timer', setTimeout(function(){ //new scope
                  $(self).addClass('active'); //out of scope
            },time));
      });

      $('.margin__aside').on("click", function() {
            $('.margin__aside').not(this).removeClass("active");
            $(this).toggleClass("active");
      });
      $('.center-content-chunk').on("click", function() {
            $('.margin__aside').removeClass("active");
      });

});
