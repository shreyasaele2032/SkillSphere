import api from "./api";



const getJobs = async () => {

  const response = await api.get(
    "/jobs"
  );

  return response.data;

};




const getJobById = async (jobId) => {

  const response = await api.get(
    `/jobs/${jobId}`
  );

  return response.data;

};




const createJob = async (jobData) => {

  const response = await api.post(
    "/jobs",
    jobData
  );

  return response.data;

};




const updateJob = async (jobId, jobData) => {

  const response = await api.put(
    `/jobs/${jobId}`,
    jobData
  );

  return response.data;

};




const deleteJob = async (jobId) => {

  const response = await api.delete(
    `/jobs/${jobId}`
  );

  return response.data;

};




const applyForJob = async (
  jobId,
  applicationData
) => {

  const response = await api.put(
    `/jobs/${jobId}/apply`,
    applicationData
  );

  return response.data;

};





const getMyJobs = async () => {

  const response = await api.get(
    "/jobs/my-jobs"
  );

  return response.data;

};




const getJobApplications = async (jobId) => {

  const response = await api.get(
    `/jobs/${jobId}/applications`
  );

  return response.data;

};

const getAllApplications = async () => {

  const response = await api.get(
    "/jobs/applications/all"
  );

  return response.data;

};

const getMyApplications = async () => {

  const response = await api.get(
    "/jobs/my-applications"
  );

  return response.data;

};

const selectFreelancer = async (jobId, freelancerId) => {

  const response = await api.put(
    `/jobs/${jobId}/select/${freelancerId}`
  );

  return response.data;

};



const jobService = {

  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  applyForJob,
  getMyJobs,
  getJobApplications,
  getAllApplications,
  selectFreelancer,
  getMyApplications

};


export default jobService;