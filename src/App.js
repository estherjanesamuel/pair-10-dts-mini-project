import './App.css';
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Box,ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import theme from './themes/theme';
import Movies from './containers/Movies';
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="about" element={<Box sx={{mt:10}}>Halaman About</Box>}></Route>
          <Route path="indonesian" element={<Box sx={{mt:10}}>Halaman indonesian</Box>}></Route>
          <Route path="pricing" element={<Box sx={{mt:10}}>Halaman pricing</Box>}></Route>
        </Routes>
        <Movies></Movies>
      </div>
    </ThemeProvider>
  );
}

export default App;
