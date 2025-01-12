export const createUserToDB = async (user, axios) => {
  try {
    const { data } = await axios.patch(`/users/${user.email}`, user);
    return data.data;
  } catch (error) {}
};

export const addImageImgBB = async (item, axios) => {
  try {
    if (item && axios) {
      const formData = new FormData();
      formData.append("image", item);
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      // console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
