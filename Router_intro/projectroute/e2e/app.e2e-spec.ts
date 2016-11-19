import { ProjectroutePage } from './app.po';

describe('projectroute App', function() {
  let page: ProjectroutePage;

  beforeEach(() => {
    page = new ProjectroutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
