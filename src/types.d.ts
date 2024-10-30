export interface IPage {
  title: string;
  subtitle: string;
  content: string;
}

export interface IPageAPI {
  [id: string]: IPage;
}