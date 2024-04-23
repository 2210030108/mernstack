import MedicineList from "./pages/MedicineList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Auth/Login";
import "./App.css";
import DoctorReg from "./Auth/DoctorReg";
import EmployeeForm from "./Auth/Employeereg";
import UserRegistration from "./Auth/UserRegister";
import AdminLoginForm from "./Auth/AdminLoginForm";
import AdminRegistrationForm from "./Auth/AdminRegistrationForm";

import UserPage from "./components/UsersPage";
import AddStore from "./pages/Addstore";
import StoreDashboard from "./pages/storedata";

import MedicinePage from "./pages/MedicinePage";
import RackPage from "./pages/RackPage";

import BillPage from "./pages/BillPage";
import Homepage from "./pages/Homepage";
import Emhome from "./pages/emhome";
import EnterDetails from "./pages/EnterDetails";
import SearchLocation from "./pages/SearchLocation";
import DoctorList from "./pages/doctordata";
import AdminPanel from "./admin/adminpage";
import FindDoctorPage from "./user/FindDoctorPage";
import Appointment from "./user/Appointment";
import MessageForm from "./user/MessageForm";
import Bloodhome from "./home/blooddontaionpage/bloodHome";
import VolunteerPage from "./home/blooddontaionpage/VolunteerPage";
import InsurancePage from "./home/InsurancePage/InsurancePage";
import InsurancePlan from "./home/InsurancePage/insuranceplain";
import MedicalRecordForm from "./Billingsec/MedicalRecordForm";
import MedicalRecordsView from "./Billingsec/MedicalRecordsView";
import MedicalRecordEdit from "./Billingsec/MedicalRecordEdit";
import MedicalRecordsViewOnly from "./Billingsec/MedicalRecordsViewOnly";
import MapContainer from "./home/findlocation/MapContainer";
import ContentPage from "./home/ContentPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/med" element={<MedicineList />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/DocotorReg" element={<DoctorReg />}></Route>
        <Route path="/empreg" element={<EmployeeForm />}></Route>
        <Route path="/userreg" element={<UserRegistration />}></Route>
        <Route path="/admin" element={<AdminLoginForm />}></Route>
        <Route path="/adminreg" element={<AdminRegistrationForm />}></Route>
        
        <Route path="/userdata" element={<UserPage />}></Route>
        <Route path="/Addstore" element={<AddStore />}></Route>
        <Route path="/storedata" element={<StoreDashboard />}></Route>
        
        <Route path="/medicines" element={<MedicinePage />}></Route>
        <Route path="/racks" element={<RackPage />}></Route>
        <Route path="/Content" element={<ContentPage/>}></Route>
        <Route path="/bills" element={<BillPage />}></Route>
        <Route path="/emhome" element={<Emhome/>}></Route>
        <Route path="/enterdetails" element={<EnterDetails />}></Route>
        <Route path="/search" element={<SearchLocation/>}></Route>
        <Route path="/d1" element={<DoctorList/>}></Route>
        <Route path="/dlist" element={<AdminPanel/>}></Route>
        <Route path="/find-doctor" element={<FindDoctorPage/>}></Route>
        <Route path="/make-appointment" element={<Appointment/>}></Route>
        <Route path="/Blood" element={<Bloodhome/>}></Route>
        <Route path="/in" element={<InsurancePage/>}></Route>
        <Route path="/volunteer" element={<VolunteerPage/>}></Route>
        <Route path="/plan" element={<InsurancePlan/>}></Route>
        <Route path="/medform" element={<MedicalRecordForm/>}></Route>
        <Route path="/medform/view" element={<MedicalRecordsView/>}></Route>
        <Route path="/medform/view/only" element={<MedicalRecordsViewOnly/>}></Route>
        <Route path="/medform/edit/:id" element={<MedicalRecordEdit/>}></Route>
        <Route path="/locations" element={<MapContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
