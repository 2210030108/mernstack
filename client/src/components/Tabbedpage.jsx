import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import MedicalRecordEdit from '../Billingsec/MedicalRecordEdit';
import MedicalRecordForm from '../Billingsec/MedicalRecordForm';
import MedicalRecordsView from '../Billingsec/MedicalRecordsView';
import MedicalRecordsViewOnly from '../Billingsec/MedicalRecordsViewOnly';
import Addstore from '../pages/Addstore';
import MedicineList from '../pages/MedicineList';
import StoreData from '../pages/storedata';
import BillPage from '../pages/BillPage';
import Employeereg from '../Auth/Employeereg';
import UsersPage from '../components/UsersPage';
import SearchLocation from '../pages/SearchLocation';
import MedicinePage from '../pages/MedicinePage';
import Emhome from '../pages/emhome';
import AdminPanel from '../admin/adminpage';
// Import other pages similarly

const TabbedPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Medical Record Edit" />
          <Tab label="Medical Record Form" />
          <Tab label="Medical Records View" />
          <Tab label="Medical Records View Only" />
          <Tab label="Add Store" />
          <Tab label="Medicine List" />
          <Tab label="Store Data" />
          <Tab label="Bill Page" />
          <Tab label="Employee Registration" />
          <Tab label="Users Page" />
          <Tab label="Search Location" />
          <Tab label="Medicine Page" />
          <Tab label="Emhome" />
          <Tab label="Admin Panel" />
          {/* Add labels for other pages */}
        </Tabs>
      </AppBar>
      <div role="tabpanel" hidden={activeTab !== 0}>
        {activeTab === 0 && <MedicalRecordEdit />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 1}>
        {activeTab === 1 && <MedicalRecordForm />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 2}>
        {activeTab === 2 && <MedicalRecordsView />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 3}>
        {activeTab === 3 && <MedicalRecordsViewOnly />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 4}>
        {activeTab === 4 && <Addstore />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 5}>
        {activeTab === 5 && <MedicineList />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 6}>
        {activeTab === 6 && <StoreData />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 7}>
        {activeTab === 7 && <BillPage />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 8}>
        {activeTab === 8 && <Employeereg />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 9}>
        {activeTab === 9 && <UsersPage />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 10}>
        {activeTab === 10 && <SearchLocation />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 11}>
        {activeTab === 11 && <MedicinePage />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 12}>
        {activeTab === 12 && <Emhome />}
      </div>
      <div role="tabpanel" hidden={activeTab !== 13}>
        {activeTab === 13 && <AdminPanel />}
      </div>
      {/* Add other page components similarly */}
    </div>
  );
};

export default TabbedPage;
