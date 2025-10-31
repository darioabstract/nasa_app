import apiCall from "../api/apiCall";

const getImages = (queryValue: string) => {
  apiCall.get(`search?q={${queryValue}}`).then((res) => {
    const results = res.data.collection.items;
  });
};
