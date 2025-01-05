export const createUserToDB = async (user, axios) => {
  try {
    const { data } = await axios.patch(`/users/${user.email}`, user);
    return data.data;
  } catch (error) {}
};
