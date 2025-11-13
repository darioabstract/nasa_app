import apiCall from "../api/apiCall";
import { NasaCard } from "../type/appTypes";

export const getImages = async (queryValue: string): Promise<NasaCard[]> => {
  if (!queryValue) return [];

  try {
    const res = await apiCall.get(`search?q=${queryValue}`);
    const results = res.data.collection.items;

    const simplifiedData: NasaCard[] = results
      .filter((item: any) => item.data[0].media_type === "image")
      .map((item: any) => {
        const title = item.data[0].title;
        const thumb = item.links?.find((link: any) =>
          link.href.endsWith("thumb.jpg")
        )?.href;

        return {
          title: title || "Untitled",
          thumbUrl: thumb || "",
        };
      });

    return simplifiedData;
  } catch (error) {
    console.error("Error fetching NASA images:", error);
    return [];
  }
};
