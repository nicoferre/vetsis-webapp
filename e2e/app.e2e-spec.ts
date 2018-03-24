import { VetsisWebappPage } from './app.po';

describe('vetsis-webapp App', () => {
  let page: VetsisWebappPage;

  beforeEach(() => {
    page = new VetsisWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
