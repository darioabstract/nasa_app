import apiCall from "../api/apiCall";

// const getImages = (queryValue:string) => {
//     apiCall.get(`search?q={${queryValue}}`).then((res) => {
//         const results = res.data.collection.items;
//     })
// }

export default function getImages(setNasaMedia: any, queryValue: any) {
  apiCall.get(`search?q=${queryValue}`).then((res) => {
    const results = res.data.collection.items;
    setNasaMedia(results);
    const filteredImages = results.filter(
      (item: any) => item.data[0].media_type === "image"
    );
    console.log("filter", results);
    const images = filteredImages.map((image: any) => image.links[1].href);
    return images;
  });
}
