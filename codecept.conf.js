exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost:3000',
      browser: 'chrome',
      smartWait: 5000
    }
  },
  include: {
    calculatorPage: './pages/calculator-page.js'
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  name: 'calculator-tests'
}