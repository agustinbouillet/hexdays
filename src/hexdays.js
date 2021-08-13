var hexdays = {
  days_to_hex: function (days) {
    if (days.length <= 0) {
      return null;
    }

    const toNumbers = (arr) => arr.map(Number);
    var m = [];

    for (var i of Array(8).keys()) {
      if (toNumbers(days).includes(i)) {
        m.push(1);
      } else {
        m.push(0);
      }
    }
    m.reverse();

    var number = m.join("");
    var hexa = parseInt(number, 2).toString(16).toUpperCase();

    return hexa.padStart(2, "0");
  },
  hex_to_days: function (hex) {
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