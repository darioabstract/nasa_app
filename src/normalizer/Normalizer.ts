import { NasaCard } from "../type/appTypes";

export const normalizeNasaImages = (results: any[]): NasaCard[] => {
  return results
    .filter((item) => item.data[0].media_type === "image")
    .map((item) => {
      const title = item.data[0].title;
      const thumb = item.links?.find((link: any) =>
        link.href.endsWith("thumb.jpg")
      )?.href;

      return {
        title: title || "Untitled",
        thumbUrl: thumb || "",
      };
    });
};
