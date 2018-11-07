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
            // make position sensitive to size and document's width
            $(this).delay(1000*i).addClass('active');
      });

      $('.margin__aside').on("click", function() {
            $('.margin__aside').not(this).removeClass("active");
            $(this).toggleClass("active");
      });
      $('.center-content-chunk').on("click", function() {
            $('.margin__aside').removeClass("active");
      });
      new Siema({
        selector: '.siema',
        duration: 200,
        easing: 'ease-out',
        perPage: 3,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
      });
});
