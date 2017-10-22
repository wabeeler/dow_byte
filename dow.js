function DOW (init) {

    var self = this;

    self.dow = new Uint8Array(8);

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

    self.obj = {
        // toggle a day by name
        toggle: function(day) {
            self.dow = self.dow ^ self.days[day.toLowerCase()];
            return self.dow;
        },
        // wipeout the whole bit mask
        reset: function() {
            return self.dow = self.dow  & 0;
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
            if(val > 2 ** (self.length)) {
                return false;
            } else {
                return self.dow = val;
            }
        }
    };

    if(init !== undefined) {
        self.obj.set(init);
    }

    return self.obj;

};
