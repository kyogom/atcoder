const combinations = function(set) {
    return (function acc(xs, set) {
      var x = xs[0];
      if(typeof x === "undefined")
        return set;
      for(var i = 0, l = set.length; i < l; ++i)
        set.push(set[i].concat(x));
      return acc(xs.slice(1), set);
    })(set, [[]]).slice(1);
  };

console.log(combinations([0,1,2,3,4]))