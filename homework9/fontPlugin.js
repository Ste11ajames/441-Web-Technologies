(function ($) {
    $.fn.changeFont = function (options) {
      const settings = $.extend({
        family: 'Arial',
        size: '16px',
        weight: 'normal',
        color: '#000',
        background: '#fff' 
      }, options);
  
      return this.each(function () {
        $(this).css({
          'font-family': settings.family,
          'font-size': settings.size,
          'font-weight': settings.weight,
          'color': settings.color,
          'background-color': settings.background 
        });
      });
    };
  })(jQuery);
  