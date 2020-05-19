interface ITemplateVariabels {
  [key: string]: string;
}

export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariabels;
}
