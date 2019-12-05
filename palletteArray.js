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
    'kds-danger': {
    'base': '#d6083b',
    '000': '#ffffff',
    '050': '#fff0ef',
    '100': '#ffdad8',
    '200': '#fcb4b2',
    '300': '#f58e8d',
    '400': '#eb666b',
    '500': '#dd354a',
    '600': '#bb1335',
    '700': '#8a1929',
    '800': '#5c181d',
    '900': '#311212',
    '1000': '#000000',
    },
    'kds-badge': {
    'base': '#e55302',
    '000': '#ffffff',
    '050': '#fff0e9',
    '100': '#ffdac8',
    '200': '#ffb592',
    '300': '#fa8f5f',
    '400': '#ed6829',
    '500': '#cf4c07',
    '600': '#a33e0c',
    '700': '#79310e',
    '800': '#51230e',
    '900': '#2c1608',
    '1000': '#000000',
    },
    'kds-warning': {
    'base': '#ffc82e',
    '000': '#ffffff',
    '050': '#fff1d0',
    '100': '#ffdd8a',
    '200': '#f4bf2d',
    '300': '#d2a52a',
    '400': '#b18b27',
    '500': '#927323',
    '600': '#735b1f',
    '700': '#56441a',
    '800': '#3b2f15',
    '900': '#211b0e',
    '1000': '#000000',
    },
    'kds-success': {
    'base': '#4e9d2d',
    '000': '#ffffff',
    '050': '#eff6ea',
    '100': '#d7e8cc',
    '200': '#aed09a',
    '300': '#84b96a',
    '400': '#58a238',
    '500': '#448629',
    '600': '#386a23',
    '700': '#2d4f1d',
    '800': '#213617',
    '900': '#151e0f',
    '1000': '#000000',
    },
    'kds-info': {
    'base': '#005de8',
    '000': '#ffffff',
    '050': '#f3f2fe',
    '100': '#e1e0fc',
    '200': '#c2c2f9',
    '300': '#a1a4f5',
    '400': '#7b88f0',
    '500': '#4a6deb',
    '600': '#1155d2',
    '700': '#1f4099',
    '800': '#1e2c64',
    '900': '#171933',
    '1000': '#000000',
    },
    'kds-action': {
    'base': '#00a4d9',
    '000': '#ffffff',
    '050': '#ecf5fb',
    '100': '#cfe6f5',
    '200': '#9ccdeb',
    '300': '#5eb5e0',
    '400': '#0a9bcd',
    '500': '#1a80a8',
    '600': '#1e6584',
    '700': '#1d4b61',
    '800': '#193341',
    '900': '#121d23',
    '1000': '#000000',
    },
    'kds-notes': {
    'base': '#ce43ce',
    '000': '#ffffff',
    '050': '#fcf0fb',
    '100': '#f8d9f5',
    '200': '#efb3eb',
    '300': '#e48de0',
    '400': '#d763d5',
    '500': '#bf40bf',
    '600': '#963695',
    '700': '#6f2b6e',
    '800': '#4a2149',
    '900': '#281527',
    '1000': '#000000',
    },
    'kds-gray': {
    'base': '#6c7881',
    '000': '#ffffff',
    '050': '#f3f4f4',
    '100': '#e0e3e5',
    '200': '#c2c7cb',
    '300': '#a5acb2',
    '400': '#889299',
    '500': '#6d7982',
    '600': '#566067',
    '700': '#41484d',
    '800': '#2d3134',
    '900': '#1a1c1d',
    '1000': '#000000',
    },
    'gray': {
    'base': '#808080',
    '000': '#ffffff',
    '050': '#f3f3f3',
    '100': '#e2e2e2',
    '200': '#c6c6c6',
    '300': '#ababab',
    '400': '#919191',
    '500': '#777777',
    '600': '#5e5e5e',
    '700': '#474747',
    '800': '#303030',
    '900': '#1b1b1b',
    '1000': '#000000',
    },
    'pg-primary': {
    'base': '#c28e0e',
    '000': '#ffffff',
    '050': '#fcf2e6',
    '100': '#f5e0c2',
    '200': '#e6c186',
    '300': '#d3a44a',
    '400': '#ba8810',
    '500': '#997013',
    '600': '#795914',
    '700': '#5a4314',
    '800': '#3d2e11',
    '900': '#231a0b',
    '1000': '#000000',
    },
    'pg-secondary': {
    'base': '#6e99b4',
    '000': '#ffffff',
    '050': '#f0f4f7',
    '100': '#dae4eb',
    '200': '#b5c9d8',
    '300': '#90afc5',
    '400': '#6c96b0',
    '500': '#5a7b91',
    '600': '#486272',
    '700': '#374955',
    '800': '#273239',
    '900': '#171c20',
    '1000': '#000000',
    },
    'pg-accent1': {
    'base': '#29a592',
    '000': '#ffffff',
    '050': '#ebf6f3',
    '100': '#cee8e2',
    '200': '#9cd1c5',
    '300': '#67baaa',
    '400': '#29a18f',
    '500': '#278576',
    '600': '#24695d',
    '700': '#1f4e46',
    '800': '#193530',
    '900': '#121e1b',
    '1000': '#000000',
    },
    'pg-accent2': {
    'base': '#ad1f65',
    '000': '#ffffff',
    '050': '#fbf1f4',
    '100': '#f5dce4',
    '200': '#eabac9',
    '300': '#dd97b0',
    '400': '#cf7596',
    '500': '#bf507e',
    '600': '#ae2367',
    '700': '#821e4d',
    '800': '#561a34',
    '900': '#2e131d',
    '1000': '#000000',
    },
    'kds-primary': {
    'base': '#240f6e',
    '000': '#ffffff',
    '050': '#f5f3f8',
    '100': '#e6e0ee',
    '200': '#cdc2dc',
    '300': '#b4a4cb',
    '400': '#9c88ba',
    '500': '#836ca9',
    '600': '#6a5198',
    '700': '#513788',
    '800': '#351d77',
    '900': '#1f0f4b',
    '1000': '#000000',
    },
    'kds-accent1': {
    'base': '#c1d82f',
    '000': '#ffffff',
    '050': '#f5f6d3',
    '100': '#e1e992',
    '200': '#bbd22e',
    '300': '#a2b52c',
    '400': '#899828',
    '500': '#727d24',
    '600': '#5b6320',
    '700': '#444a1b',
    '800': '#2f3215',
    '900': '#1c1c0e',
    '1000': '#000000',
    },
    'kds-accent2': {
    'base': '#e62899',
    '000': '#ffffff',
    '050': '#ffeff6',
    '100': '#ffd8e9',
    '200': '#fcb1d3',
    '300': '#f687bd',
    '400': '#ee59a8',
    '500': '#d92891',
    '600': '#aa2772',
    '700': '#7d2355',
    '800': '#531c39',
    '900': '#2c1420',
    '1000': '#000000',
    },

    get: function get(color, shade) {
      return this.palette[color][shade || '500'];
    },
  };
});
