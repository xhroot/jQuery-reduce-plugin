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
// the updated accumulator.  Optional seed specifies the 1st value of
// accumulator.  Otherwise, array's 1st item is used.
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

    // Must have elements in either array or a seed.
    var len = this.length;
    if ( len === 0 && seed === undefined ) 
      throw new TypeError( 'Reduce of empty array with no initial value' );

    // Check seed first to initialize accumulator, else use first value.
    var acc = seed || this[ 0 ];

    // Start count at 1 if the first value is the seed.
    var i = seed ? 0 : 1;

    // Execute callback using accumulator and current item.
    for (; i < len; i++ ) {
      acc = callback.call( this, acc, this[ i ] );
    }
    return acc;
  };
})( jQuery );

