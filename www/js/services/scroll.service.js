angular.module('starter.services')
  .service('ScrollService', ScrollService);

function ScrollService() {
  this.handleScroll = function (sv) {
    try {
      var container = sv.__container;

      var originaltouchStart = sv.touchStart;
      var originalmouseDown = sv.mouseDown;
      var originaltouchMove = sv.touchMove;
      var originalmouseMove = sv.mouseMove;

      container.removeEventListener('touchstart', sv.touchStart);
      container.removeEventListener('mousedown', sv.mouseDown);
      document.removeEventListener('touchmove', sv.touchMove);
      document.removeEventListener('mousemove', sv.mousemove);


      sv.touchStart = function(e) {
        e.preventDefault = function(){};
        originaltouchStart.apply(sv, [e]);
      };

      sv.touchMove = function(e) {
        e.preventDefault = function(){};
        originaltouchMove.apply(sv, [e]);
      };

      sv.mouseDown = function(e) {
        e.preventDefault = function(){};
        originalmouseDown.apply(sv, [e]);
      };

      sv.mouseMove = function(e) {
        e.preventDefault = function(){};
        originalmouseMove.apply(sv, [e]);
      };

      container.addEventListener("touchstart", sv.touchStart, false);
      container.addEventListener("mousedown", sv.mouseDown, false);
      document.addEventListener("touchmove", sv.touchMove, false);
      document.addEventListener("mousemove", sv.mouseMove, false);
    } catch (e) {
      console.log('Error in scroll directive.');
    }
  }
}
