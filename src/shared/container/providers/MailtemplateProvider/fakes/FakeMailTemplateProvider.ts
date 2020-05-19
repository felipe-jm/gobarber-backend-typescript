import IMailProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailProvider {
  public async parse(): Promise<string> {
    return 'Mail Content';
  }
}

export default FakeMailTemplateProvider;
