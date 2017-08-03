import { AfgPage } from './app.po';

describe('afg App', () => {
  let page: AfgPage;

  beforeEach(() => {
    page = new AfgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
