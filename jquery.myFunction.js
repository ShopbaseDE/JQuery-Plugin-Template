$.fn.myFunction = function(options) {
    var opts = $.extend( {}, $.fn.myFunction.defaults, options );
    var $this = this;
    
    // Code runs here...
    
    return this;
};

// Defaults
$.fn.myFunction.defaults = {};
