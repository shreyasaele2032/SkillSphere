

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";


import { AuthProvider } from "./context/AuthContext";
import { SocketProvider } from "./context/SocketContext";
import { NotificationProvider } from "./context/NotificationContext";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FreelancerProfile from "./pages/FreelancerProfile";
import ClientProfile from "./pages/ClientProfile";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import MyApplications from "./pages/MyApplications";
import Profile from "./pages/Profile";
import MyGigs from "./pages/MyGigs";
import MyClients from "./pages/MyClients";
import About from "./pages/About";
import MyFreelancers from "./pages/MyFreelancers";
import ClientDashboardProfile from "./pages/ClientDashboardProfile";
import AdminUserDetails from "./pages/AdminUserDetails";


import CreateGig from "./pages/CreateGig";
import GigDetails from "./pages/GigDetails";

import Jobs from "./pages/Jobs";
import CreateJob from "./pages/CreateJob";
import FreelancerChats from "./pages/FreelancerChats";

import Portfolio from "./pages/Portfolio";
import Chat from "./pages/Chat";
import Milestones from "./pages/Milestones";
import Payments from "./pages/Payments";
import AdminDashboard from "./pages/AdminDashboard";
import CreateMilestone from "./pages/CreateMilestone";

function App() {

   useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }, []);
  return (
    <BrowserRouter>
      <AuthProvider>
        <SocketProvider>
          <NotificationProvider>

            <Navbar />

            <main className="bg-gray-50">
              <Routes>

              
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

            
                <Route 
  path="/dashboard" 
  element={<Dashboard />} 
/>

<Route 
  path="/dashboard/:userId" 
  element={<Dashboard />} 
/>

                <Route path="/profile/:userId" element={<Profile />} />

                <Route path="/profile" element={<Profile />} />

              
                <Route
  path="/freelancer-profile"
  element={<FreelancerProfile />}
/>




<Route
  path="/my-gigs"
  element={<MyGigs />}
/>

<Route
  path="/freelancer-chats"
  element={<FreelancerChats />}
/>

<Route
  path="/my-freelancers"
  element={<MyFreelancers />}
/>

                <Route
                  path="/client/:id"
                  element={<ClientProfile />}
                />

                <Route
 path="/applications"
 element={<Applications />}
/>


                <Route
                  path="/create-gig"
                  element={<CreateGig />}
                />

                <Route
                  path="/gigs"
                  element={<GigDetails />}
                />


<Route
  path="/client-profile"
  element={<ClientDashboardProfile />}
/>

<Route
  path="/client/edit"
  element={<ClientProfile />}
/>


                {/* Jobs */}
                <Route
                  path="/jobs"
                  element={<Jobs />}
                />





<Route
 path="/admin/user/:id"
 element={<AdminUserDetails />}
/>
                <Route
                  path="/create-job"
                  element={<CreateJob />}
                />

                <Route
  path="/jobs/:jobId/create-milestone/:freelancerId"
  element={<CreateMilestone />}
/>
<Route path="/about" element={<About />} />
             
                <Route
                  path="/portfolio"
                  element={<Portfolio />}
                />
                <Route path="/chat" element={<Chat />} />

                <Route path="/my-clients" element={<MyClients />} />

              
                <Route path="/chat/:chatId" element={<Chat />} />

              
                <Route
                  path="/milestones"
                  element={<Milestones />}
                />

             
                <Route
                  path="/payments"
                  element={<Payments />}
                />

           
                <Route
                  path="/admin-dashboard"
                  element={<AdminDashboard />}
                />

                <Route path="/my-applications" element={<MyApplications />} />

                <Route
                  path="/jobs/:id/apply"
                  element={<ApplyJob />}
                />

             
                <Route
                  path="*"
                  element={
                    <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                      Page Not Found
                    </div>
                  }
                />

              </Routes>
            </main>

            <Footer />

          </NotificationProvider>
        </SocketProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;