import api from "./api";


// Get all gigs
const getGigs = async () => {

  const response = await api.get(
    "/gigs"
  );

  return response.data;

};

// Search gigs by category
const searchGigs = async (category) => {

  const response = await api.get(
    `/gigs/search?category=${encodeURIComponent(category)}`
  );

  return response.data;

};



// Get single gig details
const getGigById = async (gigId) => {

  const response = await api.get(
    `/gigs/${gigId}`
  );

  return response.data;

};



// Create a new gig (Freelancer)
const createGig = async (gigData) => {

  const response = await api.post(
    "/gigs",
    gigData
  );

  return response.data;

};



// Update gig
const updateGig = async (gigId, gigData) => {

  const response = await api.put(
    `/gigs/${gigId}`,
    gigData
  );

  return response.data;

};



// Delete gig
const deleteGig = async (gigId) => {

  const response = await api.delete(
    `/gigs/${gigId}`
  );

  return response.data;

};



// Get gigs created by a freelancer
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