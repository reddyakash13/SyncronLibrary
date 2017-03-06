import { SyncronLibraryPage } from './app.po';

describe('syncron-library App', () => {
  let page: SyncronLibraryPage;

  beforeEach(() => {
    page = new SyncronLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
