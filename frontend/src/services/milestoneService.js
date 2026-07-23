import api from "./api";

const createMilestone = async (data) => {
  const response = await api.post(
    "/milestones",
    data
  );

  return response.data;
};

const getMilestones = async () => {
  const response = await api.get(
    "/milestones"
  );

  return response.data;
};

const milestoneService = {
  createMilestone,
  getMilestones,
};

export default milestoneService;