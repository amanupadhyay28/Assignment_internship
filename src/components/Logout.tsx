import { Button,Box, Typography } from '@mui/material'

import { useLocalStorage } from '../context/LocalStorageContext';
import { useNavigate } from 'react-router';

const Logout = () => {
  const navigate=useNavigate();
    const {logout} =useLocalStorage();
    const handleLogout=()=>{
        
       logout();
       navigate('/')
        
    }
  return (
    <>
     
     <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 ,flexDirection:'column',alignItems:'center'}}>
     <Typography variant="h4" gutterBottom>
                    Thanks for visiting !
                    contact me:aman2833617@gmail.com !!
                    Have A Nice Day!!
                </Typography>
                        <Button type="submit" variant="contained" color="primary" onClick={handleLogout}>
                            Logout
                        </Button>
                    </Box>
      
    </>
  )
}

export default Logout
