export enum AppUrls {
  HOME = "/home",
  IMAGES = "/images",
  APOD = "/apod",
}

export interface SearchBarProps {
  queryValue: string;
  setQueryValue: (queryValue: string) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
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

export interface NasaCard {
  title: string;
  thumbUrl: string;
}

export interface ApodData {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
