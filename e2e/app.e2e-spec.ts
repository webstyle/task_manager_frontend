import { TaskManagerFrontendPage } from './app.po';

describe('task-manager-frontend App', () => {
  let page: TaskManagerFrontendPage;

  beforeEach(() => {
    page = new TaskManagerFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
