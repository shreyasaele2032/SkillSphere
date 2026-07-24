import api from "./api";


const getMyProfile = async () => {
  const response = await api.get("/profile/me");
  return response.data;
};


const saveProfile = async (profileData) => {
  const response = await api.put("/profile", profileData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

const getProfileById = async (userId) => {
  const response = await api.get(`/profile/${userId}`);
  return response.data;
};

const profileService = {
  getMyProfile,
  saveProfile,
  getProfileById,
};

export default profileService;