import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box ,Snackbar,Alert} from '@mui/material';
import { useNavigate,useLocation } from 'react-router-dom';
import { useLocalStorage } from '../context/LocalStorageContext';
const UserForm: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [openSnackbar,setOpenSnackbar]=useState(false);
    const  navigate=useNavigate();
    const location = useLocation();
const {login} =useLocalStorage();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (name && phone && email) {
            login({name,phone,email});
            setOpenSnackbar(true);
            
            setName('');
            setPhone('');
            setEmail('');
            navigate('/table')
        }
    };
    const handlecloseSnackbar=()=>{
        setOpenSnackbar(false);
    }

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
           

            <Box
                sx={{
                    width: '80%',
                    maxWidth: 600, 
                    bgcolor: 'background.paper',
                    p: 4,
                    boxShadow: 3,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                   <Typography variant="h4" gutterBottom>
                    User Information Form
                </Typography>
                {location.state?.message && (
                    <Typography variant="body1" color="error" gutterBottom>
                        {location.state.message}
                    </Typography>
                )}
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
            <Snackbar 
                open={openSnackbar} 
                autoHideDuration={2000} 
                onClose={handlecloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert onClose={handlecloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Form submitted successfully! You can now go to view Page
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default UserForm;
