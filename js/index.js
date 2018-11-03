// File log.js
((global, factory) => {
  // eslint-disable-next-line no-undef
  if (typeof define === 'function' && define.amd) {
    // eslint-disable-next-line no-undef
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    const mod = {
      exports: {},
    };
    factory(mod.exports);
    // eslint-disable-next-line no-param-reassign
    global.module = mod.exports;
  }
})(this, (exports) => {
  class FluxliiMember {
    constructor(name, bio) {
      this.name = name;
      this.bio = bio;
    }

    getName() {
      return this.name;
    }

    getBio() {
      return this.bio;
    }
  }
  // expose log to other modules
  // eslint-disable-next-line no-param-reassign
  exports.FluxliiMember = FluxliiMember;
});
