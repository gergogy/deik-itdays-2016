import { PreziAppPage } from './app.po';

describe('prezi-app App', function() {
  let page: PreziAppPage;

  beforeEach(() => {
    page = new PreziAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
