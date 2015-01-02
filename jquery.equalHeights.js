;(function($, window, document, undefined){
  $.equalHeights = function(el){
    // To avoid scope issues, using 'base' instead of 'this'
    // to reference this class from internal events and functions.
    var base = this;

    // Access to jQuery and DOM versions of element
    base.$el = $(el);
    base.el = el;

    // Add a reverse reference to the DOM object
    base.$el.data("equalHeights", base);

    base.init = function(){
      var children = base.$el.find('.equal-heights'),
          tallest_child_height = 0;

      for(var i=0; i < children.length; i++) {
        var child_height = children.eq(i).height();

        if(child_height > tallest_child_height) {
          tallest_child_height = child_height;
        }
      }
      children.height(tallest_child_height); 
    };

    // Run initializer
    base.init();
  };

  $.fn.equalHeights = function(){
    return this.each(function(){
      (new $.equalHeights(this));
    });
  };
    
})(jQuery, window, document);

// Usage -> Call equalHeights on the container(s) and enjoy the resulting height sameness...
$('#container1').equalHeights();
$('#container2').equalHeights();
