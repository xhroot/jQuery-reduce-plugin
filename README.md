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
<pre>
$(array).reduce(function(accumulator, item) {
  ...
}, seed);
</pre>

###Unit tests:
[http://xhroot.github.com/jQuery-reduce-plugin/](http://xhroot.github.com/jQuery-reduce-plugin/)
