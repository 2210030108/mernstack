import MedicineList from "./pages/MedicineList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Auth/Login";
import "./App.css";
import DoctorReg from "./Auth/DoctorReg";
import EmployeeForm from "./Auth/Employeereg";
import UserRegistration from "./Auth/UserRegister";
import AdminLoginForm from "./Auth/AdminLoginForm";
import AdminRegistrationForm from "./Auth/AdminRegistrationForm";
import AdminDashboard from "./pages/AdminDashboard";
import UserPage from "./components/UsersPage";
import AddStore from "./pages/Addstore";
import StoreDashboard from "./pages/storedata";
import Home from "./pages/Home";
import MedicinePage from "./pages/MedicinePage";
import RackPage from "./pages/RackPage";
import LocationPage from "./pages/LocationPage";
import BillPage from "./pages/BillPage";
import Homepage from "./pages/Homepage";
import Emhome from "./pages/emhome";
import EnterDetails from "./pages/EnterDetails";
import SearchLocation from "./pages/SearchLocation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="med" element={<MedicineList />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/DocotorReg" element={<DoctorReg />}></Route>
        <Route path="/empreg" element={<EmployeeForm />}></Route>
        <Route path="/userreg" element={<UserRegistration />}></Route>
        <Route path="/admin" element={<AdminLoginForm />}></Route>
        <Route path="/adminreg" element={<AdminRegistrationForm />}></Route>
        <Route path="/dashboard" element={<AdminDashboard />}></Route>
        <Route path="/userdata" element={<UserPage />}></Route>
        <Route path="/Addstore" element={<AddStore />}></Route>
        <Route path="/storedata" element={<StoreDashboard />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/medicines" element={<MedicinePage />}></Route>
        <Route path="/racks" element={<RackPage />}></Route>
        <Route path="/locations" element={<LocationPage />}></Route>
        <Route path="/bills" element={<BillPage />}></Route>
        <Route path="/emhome" element={<Emhome/>}></Route>
        <Route path="/enterdetails" element={<EnterDetails />}></Route>
        <Route path="/search" element={<SearchLocation/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
