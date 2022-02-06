import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ bgcolor: "#E7EBF0", boxShadow: 0 }}>
        <Toolbar  >
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1, color: 'text.primary' }}>
            Company name
          </Typography>
          <Button color="inherit" variant="text" sx={{ color: 'primary.main', textTransform: 'lowercase' }}>Features</Button>
          <Button color="inherit" variant="text" sx={{ color: 'primary.main', textTransform: 'lowercase' }}>Enterprise</Button>
          <Button color="inherit" variant="text" sx={{ color: 'primary.main', textTransform: 'lowercase' }}>Support</Button>
          <Button color="inherit" variant="outlined" sx={{ color: 'primary.main', textTransform: 'lowercase' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav;