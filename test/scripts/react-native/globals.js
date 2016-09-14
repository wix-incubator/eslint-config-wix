function globals() {
  if (__DEV__) {
    fetch('http://example.com');
  }
}

module.exports = {
  globals
};
