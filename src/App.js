import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Carlist from './components/Carlist';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
       <Toolbar>
        <Typography variant="h6">
            Ecom-Client
        </Typography>
       </Toolbar>
      </AppBar>
      <Carlist />
      <Login />
    </div>
  );
}

export default App;
