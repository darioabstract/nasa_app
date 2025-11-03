export enum AppUrls {
  HOME = "/home",
  IMAGES = "/images",
}

export interface SearchBarProps {
  queryValue: string;
  setQueryValue: (text: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface NasaData {
  data: NasaObjectResult[];
  href: string;
  links: LinksObject[];
}

export interface LinksObject {
  height: number;
  href: string;
  rel: string;
  render: string;
  size: number;
  width: number;
}

export interface NasaObjectResult {
  center: string;
  date_created: string;
  description: string;
  keywords: [];
  media_type: string;
  nasa_id: string;
  title: string;
}
