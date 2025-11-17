import apiCall from "../api/apiCall";
import { normalizeNasaImages } from "../normalizer/Normalizer";
import { NasaCard } from "../type/appTypes";

export const getImages = async (queryValue: string): Promise<NasaCard[]> => {
  if (!queryValue) return [];

  try {
    const res = await apiCall.get(`search?q=${queryValue}`);
    const results = res.data.collection.items;

    const simplifiedData = normalizeNasaImages(results);

    return simplifiedData;
  } catch (error) {
    console.error("Error fetching NASA images:", error);
    return [];
  }
};
