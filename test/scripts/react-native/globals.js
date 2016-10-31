function globals() {
  if (__DEV__) {
    fetch('http://example.com');
    jest.disableAutomock();
  }
}

module.exports = {
  globals
};
