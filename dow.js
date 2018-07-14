function DOW (init) {

  var self = this;

  self.dow = 0;

  // Put Monday on the left, and sunday on the right
  self.days = {
    "sunday": 1,
    "saturday": 2,
    "friday": 4,
    "thursday": 8,
    "wednesday": 16,
    "tuesday": 32,
    "monday": 64
  };

  self.length = Object.keys(self.days).length;
  self.validStringLength = 8; // Allow for two bits

  // return an array of Booleans for each Bit
  self.toArr = function() {
    var arr = [];
    var shift = self.dow;
    for(i = 0; i < self.length; i++) {
      shift >>>= 1;
      arr.push(Boolean(shift & 1));
    }
    return arr;
  };

  // return a string of binary 
  self.toStr = function() {
    var str = self.dow.toString(2);

    while(str.length < self.length) {
      str = '0' + str;
    }

    return str;
  }

  self.validInteger = function( toCheck ) {
    if( typeof toCheck !== 'number' || 
      toCheck > Math.pow(2, self.length) ) {
        return false;
      }

    return true;
  }

  self.validMask = function( mask ) {
    if( typeof mask === 'string' && /[0|1|\s]+/g.test(mask) ) {
      // check length with spaces removed
      if( mask.replace(/\s/g, '').length <= (self.validStringLength) ) {
        return true;
      }
    }

    return self.validInteger( mask );
  }

  self.setInt = function(val) {
    if( self.validInteger(val) ) {
      return false;
    } else {
      return self.dow = val;
    }
  }

  self.setMask = function(mask) {
    if( !self.validMask(mask) ) return false;

    // eliminate spaces
    let mskStr = mask.replace(/\s/g,'');

    // Because we are calling another method inside of the return obj
    // have to use this, not the parent of self
    self.reset();

    let x = parseInt(mask, 2);

    if( !isNaN(x) ) {
      self.dow = x;
    }

    return true;
  }

  self.reset = function() {
    return self.dow = 0;
  }

  self.obj = {
    // toggle a day by name
    toggle: function(day) {
      self.dow = self.dow ^ self.days[day.toLowerCase()];
      return self.dow;
    },
    // wipeout the whole bit mask
    reset: function() {
      return self.reset();
    },
    // return in a given format
    get: function(type) {
      type = type || '';
      switch(type.toLowerCase()) {
        case 'string':
          return self.toStr();
          break;
        case 'array': 
          return self.toArr();
          break
        default:
          return self.dow;
      }
    },
    // set to a specific bit mask,, val is an int
    set: function(val) {
      if( typeof val === 'number' ) {
        setInt(val);
      }
      else {
        setMask(val);
      }
    },
    isDaySet( day ) {
      if( typeof day !== 'string' ||
        !self.days.hasOwnProperty(day.toLowerCase()) ) {
          throw new Error('Unkown day passed in isDaySet', day);
        }

      let index = Math.log2(self.days[day.toLowerCase()]);

      return !!(self.dow & (1 << index));
    }
  };

  if(init !== undefined) {
    self.obj.set(init);
  }

  return self.obj;

};

if( typeof module === 'object' ) {
  module.exports = DOW;
}
