'use strict';

function* generator() {
  yield* generator();
}

generator();
