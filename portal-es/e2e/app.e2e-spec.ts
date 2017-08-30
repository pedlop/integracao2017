import { PortalEsPage } from './app.po';

describe('portal-es App', () => {
  let page: PortalEsPage;

  beforeEach(() => {
    page = new PortalEsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
