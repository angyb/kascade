(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.palette = factory();
  }
})(this, function() {
  return {
    palette: { 
      'danger': { 
        'base': '#D6083B', 
        '500': '#ec0a42'
      },

      'badge': { 
        'base': '#E55302', 
        '500': '#d04b02'
      },

      'warning': { 
        'base': '#FFC82E', 
        '500': '#957200'
      },

      'success': { 
        'base': '#4E9D2D', 
        '500': '#4E9D2D'
      },

      'info': { 
        'base': '#005DE8', 
        '500': '#0080ab'
      },

      'action': { 
        'base': '#00A4D9', 
        '500': '#0080ab'
      },

      'gray0': { 
        'base': '#6d7982', 
        '500': '#6d7982'
      },
      
      'gray-high': { 
        'base': '#808080', 
        '500': '#808080'
      },
      
      'gray-mid': { 
        'base': '#777777', 
        '500': '#777777'
      },
      
      'gray-low': { 
        'base': '#757575', 
        '500': '#757575'
      },
    },

    get: function get(color, shade) {
      return this.palette[color][shade || '500'];
    },
  };
});
