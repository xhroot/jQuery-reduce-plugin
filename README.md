jQuery-reduce-plugin
====================

- *Author*: Antonio Rodriguez, dev@xhroot.com, [website](http://www.xhroot.com)
- *Description*: reduce plugin for jQuery
- *License*: BSD

###Reduce plugin to supplement jQuery built-ins.

Applies function to all items in array.  Return value of function becomes
the updated accumulator.  Optional seed specifies the 1st value of
accumulator.  Otherwise, array's 1st item is used.

Similar to LINQ's [`aggregate`](http://msdn.microsoft.com/en-us/library/bb548651.aspx).

Should function same as native [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/Reduce) implementation,
which is not available on IE8.

###Signature:
```javascript
$(array).reduce(function(accumulator, item) {
  ...
}, seed);
```

###Example:
```javascript
// Character histogram. Count all the characters in a string (case sensitive).

// Source text.
var text = 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus vel sapien ac orci mattis dictum. Phasellus gravida tempor mi ac porttitor. Vestibulum vitae velit ac risus malesuada lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus a felis vitae diam lacinia rutrum. Nullam pulvinar, tortor nec aliquam adipiscing, nisl ligula consequat orci, malesuada accumsan neque mi sit amet sapien. Maecenas non ante sem. Proin enim urna, mollis vel placerat ut, egestas vel lorem. Sed vitae velit lacus, at fringilla risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sed massa non tellus elementum interdum. Cras nec magna dolor, sit amet sollicitudin diam. Pellentesque viverra neque eu dolor tristique condimentum ac a nulla. Aenean felis tellus, condimentum malesuada tempor sit amet, lacinia a dui.'

// Reduction function; updates a single character count.
var getCharTotal = function(counts, character) {
  if (/[a-z]/i.test(character)) {
		counts[character] = (counts[character] || 0) + 1;
	}
	return counts;
};

// Use reduce to apply reduction to string.
var count = $(text.split('')).reduce(getCharTotal, {});

// Expected counts { 'A': 1, 'C': 3, 'M': 1, 'N': 1, 'P': 6, 'S': 1, 'V': 3, 'a': 86, 'b': 7, 'c': 33, 'd': 19, 'e': 87, 'f': 5, 'g': 7, 'h': 5, 'i': 76, 'l': 56, 'm': 40, 'n': 48, 'o': 32, 'p': 16, 'q': 10, 'r': 39, 's': 66, 't': 64, 'u': 57, 'v': 13 };
```

Refer to unit tests for more examples of usage: https://github.com/xhroot/jQuery-reduce-plugin/blob/master/jQuery.reduce.tests.js

###Unit tests:
[http://xhroot.github.com/jQuery-reduce-plugin/](http://xhroot.github.com/jQuery-reduce-plugin/)
