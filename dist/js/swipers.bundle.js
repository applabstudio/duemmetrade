(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["swipers"],{

/***/ "./modules/swipers.js":
/*!****************************!*\
  !*** ./modules/swipers.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/dist/js/swiper.esm.bundle.js");


var dom = {
  hero: '[data-swiper="hero"]',
  card: '[data-swiper="cards"]',
  carousel: '[data-swiper="image-carousel"]',
  videogallery: '[data-swiper="video-carousel"]'
};

var heroSlider = function heroSlider() {
  var swiper = void 0;
  var selector = dom.hero;

  function initSwiper() {
    swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](selector, {
      speed: 700,
      loop: false,
      slidesPerView: 1,
      autoplay: {
        delay: 7000
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }

  return {
    init: initSwiper
  };
};

var cardSlider = function cardSlider() {
  var swiper = void 0;
  var selector = dom.card;

  function initSwiper() {
    swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](selector, {
      speed: 700,
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 7000
      },
      preloadImages: false,
      lazy: {
        elementClass: 'swiper-lazy',
        loadPrevNext: true,
        loadPrevNextAmount: 3
      },
      breakpoints: {
        1199: {
          slidesPerView: 2
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        767: {
          slidesPerView: 'auto',
          spaceBetween: 15
        }
      },
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }

  return {
    init: initSwiper
  };
};

var imageCarousel = function imageCarousel() {
  var swiper = void 0;
  var selector = dom.carousel;

  function initSwiper() {
    swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](selector, {
      autoplay: false,
      loop: false,
      slidesPerView: 'auto',
      freeMode: true
    });
  }

  return {
    init: initSwiper
  };
};

var videoGallery = function videoGallery() {
  var swiper = void 0;
  var selector = dom.videogallery;

  function initSwiper() {
    swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](selector, {
      autoplay: false,
      loop: false,
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 15
    });
  }

  return {
    init: initSwiper
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  initHeroSlider: function initHeroSlider() {
    var slider = heroSlider();
    slider.init();
  },
  initCardSlider: function initCardSlider() {
    var slider = cardSlider();
    slider.init();
  },
  initCarousel: function initCarousel() {
    var slider = imageCarousel();
    slider.init();
  },
  initVideogallery: function initVideogallery() {
    var slider = videoGallery();
    slider.init();
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N3aXBlcnMuanMiXSwibmFtZXMiOlsiZG9tIiwiaGVybyIsImNhcmQiLCJjYXJvdXNlbCIsInZpZGVvZ2FsbGVyeSIsImhlcm9TbGlkZXIiLCJzd2lwZXIiLCJzZWxlY3RvciIsImluaXRTd2lwZXIiLCJTd2lwZXIiLCJzcGVlZCIsImxvb3AiLCJzbGlkZXNQZXJWaWV3IiwiYXV0b3BsYXkiLCJkZWxheSIsInByZWxvYWRJbWFnZXMiLCJsYXp5IiwibG9hZFByZXZOZXh0IiwicGFnaW5hdGlvbiIsImVsIiwiaW5pdCIsImNhcmRTbGlkZXIiLCJzcGFjZUJldHdlZW4iLCJlbGVtZW50Q2xhc3MiLCJsb2FkUHJldk5leHRBbW91bnQiLCJicmVha3BvaW50cyIsImltYWdlQ2Fyb3VzZWwiLCJmcmVlTW9kZSIsInZpZGVvR2FsbGVyeSIsImluaXRIZXJvU2xpZGVyIiwic2xpZGVyIiwiaW5pdENhcmRTbGlkZXIiLCJpbml0Q2Fyb3VzZWwiLCJpbml0VmlkZW9nYWxsZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1BLE1BQU07QUFDVkMsUUFBTSxzQkFESTtBQUVWQyxRQUFNLHVCQUZJO0FBR1ZDLFlBQVUsZ0NBSEE7QUFJVkMsZ0JBQWM7QUFKSixDQUFaOztBQU9BLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLE1BQUlDLGVBQUo7QUFDQSxNQUFNQyxXQUFXUCxJQUFJQyxJQUFyQjs7QUFFQSxXQUFTTyxVQUFULEdBQXNCO0FBQ3BCRixhQUFTLElBQUlHLDhDQUFKLENBQVdGLFFBQVgsRUFBcUI7QUFDNUJHLGFBQU8sR0FEcUI7QUFFNUJDLFlBQU0sS0FGc0I7QUFHNUJDLHFCQUFlLENBSGE7QUFJNUJDLGdCQUFVO0FBQ1JDLGVBQU87QUFEQyxPQUprQjtBQU81QkMscUJBQWUsS0FQYTtBQVE1QkMsWUFBTTtBQUNKQyxzQkFBYztBQURWLE9BUnNCO0FBVzVCQyxrQkFBWTtBQUNWQyxZQUFJO0FBRE07QUFYZ0IsS0FBckIsQ0FBVDtBQWVEOztBQUVELFNBQU87QUFDTEMsVUFBTVo7QUFERCxHQUFQO0FBR0QsQ0F6QkQ7O0FBMkJBLElBQU1hLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLE1BQUlmLGVBQUo7QUFDQSxNQUFNQyxXQUFXUCxJQUFJRSxJQUFyQjs7QUFFQSxXQUFTTSxVQUFULEdBQXNCO0FBQ3BCRixhQUFTLElBQUlHLDhDQUFKLENBQVdGLFFBQVgsRUFBcUI7QUFDNUJHLGFBQU8sR0FEcUI7QUFFNUJDLFlBQU0sS0FGc0I7QUFHNUJDLHFCQUFlLENBSGE7QUFJNUJVLG9CQUFjLEVBSmM7QUFLNUJULGdCQUFVO0FBQ1JDLGVBQU87QUFEQyxPQUxrQjtBQVE1QkMscUJBQWUsS0FSYTtBQVM1QkMsWUFBTTtBQUNKTyxzQkFBYyxhQURWO0FBRUpOLHNCQUFjLElBRlY7QUFHSk8sNEJBQW9CO0FBSGhCLE9BVHNCO0FBYzVCQyxtQkFBYTtBQUNYLGNBQU07QUFDSmIseUJBQWU7QUFEWCxTQURLO0FBSVgsYUFBSztBQUNIQSx5QkFBZSxDQURaO0FBRUhVLHdCQUFjO0FBRlgsU0FKTTtBQVFYLGFBQUs7QUFDSFYseUJBQWUsTUFEWjtBQUVIVSx3QkFBYztBQUZYO0FBUk0sT0FkZTtBQTJCNUJKLGtCQUFZO0FBQ1ZDLFlBQUk7QUFETTtBQTNCZ0IsS0FBckIsQ0FBVDtBQStCRDs7QUFFRCxTQUFPO0FBQ0xDLFVBQU1aO0FBREQsR0FBUDtBQUdELENBekNEOztBQTJDQSxJQUFNa0IsZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLE1BQUlwQixlQUFKO0FBQ0EsTUFBTUMsV0FBV1AsSUFBSUcsUUFBckI7O0FBRUEsV0FBU0ssVUFBVCxHQUFzQjtBQUNwQkYsYUFBUyxJQUFJRyw4Q0FBSixDQUFXRixRQUFYLEVBQXFCO0FBQzVCTSxnQkFBVSxLQURrQjtBQUU1QkYsWUFBTSxLQUZzQjtBQUc1QkMscUJBQWUsTUFIYTtBQUk1QmUsZ0JBQVU7QUFKa0IsS0FBckIsQ0FBVDtBQU1EOztBQUVELFNBQU87QUFDTFAsVUFBTVo7QUFERCxHQUFQO0FBR0QsQ0FoQkQ7O0FBa0JBLElBQU1vQixlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixNQUFJdEIsZUFBSjtBQUNBLE1BQU1DLFdBQVdQLElBQUlJLFlBQXJCOztBQUVBLFdBQVNJLFVBQVQsR0FBc0I7QUFDcEJGLGFBQVMsSUFBSUcsOENBQUosQ0FBV0YsUUFBWCxFQUFxQjtBQUM1Qk0sZ0JBQVUsS0FEa0I7QUFFNUJGLFlBQU0sS0FGc0I7QUFHNUJDLHFCQUFlLE1BSGE7QUFJNUJlLGdCQUFVLElBSmtCO0FBSzVCTCxvQkFBYztBQUxjLEtBQXJCLENBQVQ7QUFPRDs7QUFFRCxTQUFPO0FBQ0xGLFVBQU1aO0FBREQsR0FBUDtBQUdELENBakJEOztBQW1CZTtBQUNicUIsa0JBQWdCLDBCQUFNO0FBQ3BCLFFBQU1DLFNBQVN6QixZQUFmO0FBQ0F5QixXQUFPVixJQUFQO0FBQ0QsR0FKWTtBQUtiVyxrQkFBZ0IsMEJBQU07QUFDcEIsUUFBTUQsU0FBU1QsWUFBZjtBQUNBUyxXQUFPVixJQUFQO0FBQ0QsR0FSWTtBQVNiWSxnQkFBYyx3QkFBTTtBQUNsQixRQUFNRixTQUFTSixlQUFmO0FBQ0FJLFdBQU9WLElBQVA7QUFDRCxHQVpZO0FBYWJhLG9CQUFrQiw0QkFBTTtBQUN0QixRQUFNSCxTQUFTRixjQUFmO0FBQ0FFLFdBQU9WLElBQVA7QUFDRDtBQWhCWSxDQUFmLEUiLCJmaWxlIjoic3dpcGVycy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5cbmNvbnN0IGRvbSA9IHtcbiAgaGVybzogJ1tkYXRhLXN3aXBlcj1cImhlcm9cIl0nLFxuICBjYXJkOiAnW2RhdGEtc3dpcGVyPVwiY2FyZHNcIl0nLFxuICBjYXJvdXNlbDogJ1tkYXRhLXN3aXBlcj1cImltYWdlLWNhcm91c2VsXCJdJyxcbiAgdmlkZW9nYWxsZXJ5OiAnW2RhdGEtc3dpcGVyPVwidmlkZW8tY2Fyb3VzZWxcIl0nLFxufTtcblxuY29uc3QgaGVyb1NsaWRlciA9ICgpID0+IHtcbiAgbGV0IHN3aXBlcjtcbiAgY29uc3Qgc2VsZWN0b3IgPSBkb20uaGVybztcblxuICBmdW5jdGlvbiBpbml0U3dpcGVyKCkge1xuICAgIHN3aXBlciA9IG5ldyBTd2lwZXIoc2VsZWN0b3IsIHtcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBhdXRvcGxheToge1xuICAgICAgICBkZWxheTogNzAwMCxcbiAgICAgIH0sXG4gICAgICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgICAgIGxhenk6IHtcbiAgICAgICAgbG9hZFByZXZOZXh0OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFN3aXBlcixcbiAgfTtcbn07XG5cbmNvbnN0IGNhcmRTbGlkZXIgPSAoKSA9PiB7XG4gIGxldCBzd2lwZXI7XG4gIGNvbnN0IHNlbGVjdG9yID0gZG9tLmNhcmQ7XG5cbiAgZnVuY3Rpb24gaW5pdFN3aXBlcigpIHtcbiAgICBzd2lwZXIgPSBuZXcgU3dpcGVyKHNlbGVjdG9yLCB7XG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgIGRlbGF5OiA3MDAwLFxuICAgICAgfSxcbiAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgICAgbGF6eToge1xuICAgICAgICBlbGVtZW50Q2xhc3M6ICdzd2lwZXItbGF6eScsXG4gICAgICAgIGxvYWRQcmV2TmV4dDogdHJ1ZSxcbiAgICAgICAgbG9hZFByZXZOZXh0QW1vdW50OiAzLFxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDExOTk6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICB9LFxuICAgICAgICA5OTE6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgICAgIH0sXG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFN3aXBlcixcbiAgfTtcbn07XG5cbmNvbnN0IGltYWdlQ2Fyb3VzZWwgPSAoKSA9PiB7XG4gIGxldCBzd2lwZXI7XG4gIGNvbnN0IHNlbGVjdG9yID0gZG9tLmNhcm91c2VsO1xuXG4gIGZ1bmN0aW9uIGluaXRTd2lwZXIoKSB7XG4gICAgc3dpcGVyID0gbmV3IFN3aXBlcihzZWxlY3Rvciwge1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFN3aXBlcixcbiAgfTtcbn07XG5cbmNvbnN0IHZpZGVvR2FsbGVyeSA9ICgpID0+IHtcbiAgbGV0IHN3aXBlcjtcbiAgY29uc3Qgc2VsZWN0b3IgPSBkb20udmlkZW9nYWxsZXJ5O1xuXG4gIGZ1bmN0aW9uIGluaXRTd2lwZXIoKSB7XG4gICAgc3dpcGVyID0gbmV3IFN3aXBlcihzZWxlY3Rvciwge1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXRTd2lwZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXRIZXJvU2xpZGVyOiAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyID0gaGVyb1NsaWRlcigpO1xuICAgIHNsaWRlci5pbml0KCk7XG4gIH0sXG4gIGluaXRDYXJkU2xpZGVyOiAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyID0gY2FyZFNsaWRlcigpO1xuICAgIHNsaWRlci5pbml0KCk7XG4gIH0sXG4gIGluaXRDYXJvdXNlbDogKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlciA9IGltYWdlQ2Fyb3VzZWwoKTtcbiAgICBzbGlkZXIuaW5pdCgpO1xuICB9LFxuICBpbml0VmlkZW9nYWxsZXJ5OiAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyID0gdmlkZW9HYWxsZXJ5KCk7XG4gICAgc2xpZGVyLmluaXQoKTtcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9