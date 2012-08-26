jQuery-reduce-plugin
====================

##Reduce plugin to supplement jQuery built-ins.

Applies function to all items in array.  Return value of function becomes
the updated accumulator.  Optional seed specifies the 1st value of
accumulator.  Otherwise, array's 1st item is used.

Similar to LINQ's `aggregate`.

Should function same as native Array.prototype.reduce implementation,
which is not available on IE8.

##Signature:
<pre>
$(array).reduce(function(accumulator, item) {
  ...
}, seed);
</pre>

##Unit tests:
[http://xhroot.github.com/jQuery-reduce-plugin/](http://xhroot.github.com/jQuery-reduce-plugin/)



- *Author*: Antonio Rodriguez
- *License*: BSD

