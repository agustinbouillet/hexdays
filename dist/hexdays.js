var hexdays={isHex:function(r){return null!==/^[a-fA-F0-9]{1,2}$/.exec(r)},toNumbers:function(r){return r?r.map(Number):null},encode:function(r){if(void 0===r||!Array.isArray(r)||0==r.length)return null;var e=[];for(var n of Array(8).keys())this.toNumbers(r).includes(n)?e.push(1):e.push(0);e.reverse();var t=e.join("");return parseInt(t,2).toString(16).toUpperCase().padStart(2,"0")},decode:function(r){if(!this.isHex(r))return null;const e=parseInt(r,16).toString(2).padStart(8,"0").split("");e.reverse();var n=[];for(var t in e)1==e[t]&&n.push(t);return n}};