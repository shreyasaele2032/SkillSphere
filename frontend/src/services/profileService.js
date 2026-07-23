import api from "./api";

// Get logged-in user's profile
const getMyProfile = async () => {
  const response = await api.get("/profile/me");
  return response.data;
};

// Create or Update profile
const saveProfile = async (profileData) => {
  const response = await api.put("/profile", profileData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Get profile by user id
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