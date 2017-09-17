import { FirebasePruebaPage } from './app.po';

describe('firebase-prueba App', () => {
  let page: FirebasePruebaPage;

  beforeEach(() => {
    page = new FirebasePruebaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
