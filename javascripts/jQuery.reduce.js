// Reduce plugin to supplement jQuery built-ins.
// Should function same as native Array.prototype.reduce implementation,
// which is not available on IE8.
// 
// Signature:
//  $(array).reduce(function(accumulator, item) {
//    ...
//  }, seed);
//
// Applies function to all items in array.  Return value of function becomes
// the updated accumulator.  Optional seed specifies the first value of
// accumulator.  Otherwise, array's first item is used.
// 
// Similar to LINQ's `aggregate`.
// 
// Author: Antonio Rodriguez
// License: BSD

(function ( $ ) {
  $.fn.reduce = function( callback, seed ) {
    // Callback must be a function.
    if ( !jQuery.isFunction( callback ) )
      throw new TypeError( 'Argument is not a function' );

    // Must have either non-empty array or seed.
    var len = this.length;
    var hasSeed = seed !== undefined;
    if ( len === 0 && !hasSeed ) 
      throw new TypeError( 'Reduce of empty array with no initial value' );

    // Check seed first to initialize accumulator, else use first array item.
    var acc = hasSeed ? seed : this[ 0 ];

    // Start count at 1 if first value is used instead of seed.
    var i = hasSeed ? 0 : 1;

    // Execute callback using accumulator and current item.
    for (; i < len; i++ ) {
      acc = callback.call( this, acc, this[ i ] );
    }
    return acc;
  };
})( jQuery );

