import api from "./api";



const getGigs = async () => {

  const response = await api.get(
    "/gigs"
  );

  return response.data;

};


const searchGigs = async (category) => {

  const response = await api.get(
    `/gigs/search?category=${encodeURIComponent(category)}`
  );

  return response.data;

};




const getGigById = async (gigId) => {

  const response = await api.get(
    `/gigs/${gigId}`
  );

  return response.data;

};




const createGig = async (gigData) => {

  const response = await api.post(
    "/gigs",
    gigData
  );

  return response.data;

};




const updateGig = async (gigId, gigData) => {

  const response = await api.put(
    `/gigs/${gigId}`,
    gigData
  );

  return response.data;

};




const deleteGig = async (gigId) => {

  const response = await api.delete(
    `/gigs/${gigId}`
  );

  return response.data;

};




const getMyGigs = async () => {

  const response = await api.get(
    "/gigs/my-gigs"
  );

  return response.data;

};



const gigService = {

  getGigs,
  searchGigs,
  getGigById,
  createGig,
  updateGig,
  deleteGig,
  getMyGigs,

};

export default gigService;