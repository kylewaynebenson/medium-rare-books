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
      const bookCarousel = new Siema({
        selector: '.siema',
        easing: 'ease',
        perPage: 1,
        startIndex: 0,
        draggable: false,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        rtl: false,
        onInit: () => {},
        onChange: () => {
             var page = bookCarousel.currentSlide + 1;
             document.querySelector('.siema__nav-pagination .page').innerHTML = page;
       },
      });

      document.querySelector('.siema__nav-prev').addEventListener('click', () => bookCarousel.prev());
      document.querySelector('.siema__nav-next').addEventListener('click', () => bookCarousel.next());
});
