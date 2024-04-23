import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardActions, Button, Typography, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const API = "http://localhost:3000/";

const AdminPanel = () => {
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [statusFilter, setStatusFilter] = useState('all');
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/api/doc/doctors') // Endpoint to fetch all doctors
            .then(res => {
                setDoctors(res.data.data); // Assuming doctors data is inside 'data' key
                setFilteredDoctors(res.data.data); // Initially set filtered doctors to all doctors
            })
            .catch(err => console.error(err));
    }, []);

    const handleFilterChange = (status) => {
        setStatusFilter(status);
        if (status === 'all') {
            setFilteredDoctors(doctors);
        } else {
            const filtered = doctors.filter(doctor => doctor.status === status);
            setFilteredDoctors(filtered);
        }
    };

    const handleUpdateDoctor = (id, status) => {
        axios.put(`http://localhost:3000/api/doc/update/${id}`, { status }) // Endpoint to update doctor status
            .then(res => {
                setDoctors(doctors.map(doctor => 
                    doctor._id === id ? { ...doctor, status } : doctor
                ));
                setFilteredDoctors(filteredDoctors.filter(doctor => doctor._id !== id));
                setAlertSeverity('success');
                setAlertMessage(`Doctor ${status === 'accepted' ? 'accepted' : 'rejected'} successfully`);
                setAlertOpen(true);
            })
            .catch(err => {
                setAlertSeverity('error');
                setAlertMessage(`Failed to ${status === 'accepted' ? 'accept' : 'reject'} doctor`);
                setAlertOpen(true);
                console.error(err);
            });
    };

    const handleApprove = (id) => {
        handleUpdateDoctor(id, 'accepted');
    };

    const handleReject = (id) => {
        handleUpdateDoctor(id, 'rejected');
    };

    const handleCloseAlert = () => {
        setAlertOpen(false);
    };

    const handleDoctorClick = (doctor) => {
        setSelectedDoctor(doctor);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setSelectedDoctor(null);
        setDialogOpen(false);
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <div>
                <Button onClick={() => handleFilterChange('all')} variant={statusFilter === 'all' ? 'contained' : 'outlined'}>All</Button>
                <Button onClick={() => handleFilterChange('pending')} variant={statusFilter === 'pending' ? 'contained' : 'outlined'}>Pending</Button>
                <Button onClick={() => handleFilterChange('accepted')} variant={statusFilter === 'accepted' ? 'contained' : 'outlined'}>Accepted</Button>
                <Button onClick={() => handleFilterChange('rejected')} variant={statusFilter === 'rejected' ? 'contained' : 'outlined'}>Rejected</Button>
            </div>
            <Grid container spacing={3}>
                {filteredDoctors.map(doctor => (
                    <Grid item key={doctor._id} xs={12} sm={6} md={4}>
                        <DoctorCard doctor={doctor} onApprove={handleApprove} onReject={handleReject} onClick={() => handleDoctorClick(doctor)} />
                    </Grid>
                ))}
            </Grid>
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseAlert} severity={alertSeverity}>
                    {alertMessage}
                </MuiAlert>
            </Snackbar>
            <DoctorInfoDialog open={dialogOpen} onClose={handleCloseDialog} doctor={selectedDoctor} />
        </div>
    );
};

const DoctorCard = ({ doctor, onApprove, onReject, onClick }) => {
    const handleApproveClick = () => {
        onApprove(doctor._id);
    };

    const handleRejectClick = () => {
        onReject(doctor._id);
    };

    return (
        <Card onClick={onClick} style={{ cursor: 'pointer', width: '150px', height: '200px' }}> {/* Adjust width and height as needed */}
            <CardContent style={{ padding: '8px' }}>
                <Typography variant="h6" style={{ fontSize: '14px', marginBottom: '4px' }}>{doctor.name}</Typography> {/* Adjust font size and margin as needed */}
                <img src={`${API}${doctor.photo}`} alt={doctor.name} style={{ width: '100%', height: 'auto' }} /> {/* Set image width to 100% and height auto */}
                <Typography style={{ fontSize: '12px', marginTop: '4px' }}>Email: {doctor.email}</Typography> {/* Adjust font size and margin as needed */}
                <Typography style={{ fontSize: '12px', marginTop: '4px' }}>Contact: {doctor.contact}</Typography> {/* Adjust font size and margin as needed */}
            </CardContent>
            {doctor.status === 'pending' && (
                <CardActions style={{ justifyContent: 'center', padding: '8px' }}>
                    <Button onClick={handleApproveClick} variant="contained" color="primary" style={{ fontSize: '10px', marginRight: '4px' }}> {/* Adjust font size and margin as needed */}
                        Approve
                    </Button>
                    <Button onClick={handleRejectClick} variant="contained" color="error" style={{ fontSize: '10px' }}> {/* Adjust font size as needed */}
                        Reject
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};


const DoctorInfoDialog = ({ open, onClose, doctor }) => {
    if (!doctor) {
        return null; // Render nothing if doctor is null
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{doctor ? doctor.name : ''}</DialogTitle>
            <DialogContent>
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <img src={`${API}${doctor.photo}`} alt={doctor ? doctor.name : ''} style={{ width: '50px', height: '50px', float: 'left', marginRight: '10px' }} />
                    <div>
                        <Typography>Email: {doctor ? doctor.email : ''}</Typography>
                        <Typography>Contact: {doctor ? doctor.contact : ''}</Typography>
                        {/* Add more information here if needed */}
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AdminPanel;
