var hexdays={days_to_hex:function(r){if(r.length<=0)return null;const t=r=>r.map(Number);var e=[];for(var a of Array(8).keys())t(r).includes(a)?e.push(1):e.push(0);e.reverse();var n=e.join("");return parseInt(n,2).toString(16).toUpperCase().padStart(2,"0")},hex_to_days:function(r){const t=parseInt(r,16).toString(2).padStart(8,"0").split("");t.reverse();var e=[];for(var a in t)1==t[a]&&e.push(a);return e}};