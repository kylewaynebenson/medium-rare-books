$(document).ready(function () {
      $('#search-input').blur(function() {
              $('.max-container').removeClass("focus");
            })
            .focus(function() {
              $('.max-container').addClass("focus")
            });

      SimpleJekyllSearch({
              searchInput: document.getElementById('search-input'),
              resultsContainer: document.getElementById('results-container'),
              json: '/search.json'
      })
});
