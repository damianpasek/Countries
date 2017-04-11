import { CountriesPage } from './app.po';

describe('countries App', () => {
  let page: CountriesPage;

  beforeEach(() => {
    page = new CountriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
