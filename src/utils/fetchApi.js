export const fetchApi = (url, method) => {
  return fetch(url)
    .then((res) => {
      // if successful
      // console.log(res);
      if (res.status === 200 || res.status === 201) {
        return res.json();
      } else {
        return {
          status: res.status,
          error: new Error("Invalid Response"),
        };
      }
    })
    .catch((err) => {
      // if error occurs
      //console.log(err);
      return err;
    })
    .finally(() => {
      //console.log('It is over!');
    });
};
