const mockPostList = [
  {
    id: 1,
    title: "cricket match #1 result - lose",
    body: "...",
  },
  {
    id: 2,
    title: "cricket match #2 result - win",
    body: "...",
  },
];

export const mockFetch =  async(url) => {
  return {
    json: async () => {
      return mockPostList;
    },
  };
};

// the above is callable like the following
// mockFetch()
//   .then( (res) => {
//     return res.json()
//   })
//   .then( (resInJson) => {
//     console.log(resInJson);
//   });
