export interface IPage {
  title: string;
  content: string;
}

export interface IPageAPI {
  [id: string]: IPage;
}