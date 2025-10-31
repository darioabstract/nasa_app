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
