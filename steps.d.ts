/// <reference types='codeceptjs' />
type calculatorPage = typeof import('./pages/calculator-page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, calculatorPage: calculatorPage }
  interface Methods extends WebDriver {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
