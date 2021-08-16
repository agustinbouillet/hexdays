var hexdays = {
  /**
   * One byte as hex number.
   * @param  {string|integer}  value Hex number
   * @return {Boolean}
   */
  isHex: function(value){
    const regex = /^[a-fA-F0-9]{1,2}$/;
    return (regex.exec(value) !== null)? true: false;
  },
  toNumbers: function(value){
    if(!value){
      return null;
    }
    return value.map(Number);
  },
  encode: function (days) {
    if ((typeof value === 'undefined') ||(!Array.isArray(value)) || 
        (value.length == 0)) {
      return null;
    }

    var bin = [];

    for (var i of Array(8).keys()) {
      if (this.toNumbers(days).includes(i)) {
        bin.push(1);
      } else {
        bin.push(0);
      }
    }
    bin.reverse();

    var number = m.join("");
    var hexa = parseInt(number, 2).toString(16).toUpperCase();

    return hexa.padStart(2, "0");
  },
  decode: function (hex) {
    if(!this.isHex(hex)){
      return null;
    }

    const binary = parseInt(hex, 16).toString(2).padStart(8, "0");
    const bin_to_list = binary.split("");
    bin_to_list.reverse();

    var days = [];
    for (var i in bin_to_list) {
      if (bin_to_list[i] == 1) {
        days.push(i);
      }
    }
    return days;
  }
};