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

// Basic Usage -> Call equalHeights on any container and enjoy the resulting height sameness on all its children with class="equal-heights"...
//$('#container1').equalHeights();



// DEMO CODE //
var evaluateHeights = function(){
  var $height_reports = $('.height-report');

  for(var i=0; i < $height_reports.length; i++) {
    var $this = $height_reports.eq(i),
        $parent = $this.closest('.equal-heights'),
        height = $parent.height();
    $this.empty().append("I am " + height + "px tall.");
  }
}

$(document).ready(function(){
  evaluateHeights();
});

// Triggered Scenario for Demo
$('.trigger').on('click', function(e){
  var $container = $('#container1');
  $container.equalHeights().trigger('equalized');
});

$('body').on('equalized', function(){
  var $columns = $('.equal-heights');
  evaluateHeights();
  $columns.addClass('equalized');
});



