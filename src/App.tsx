import AppThemeProvider from './AppThemeProvider';
import NavBar from './panels/navbar'
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import './App.css';

function App() {
  return (
    <AppThemeProvider>
      <>
        <NavBar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </>
    </AppThemeProvider>
  );
}

export default App;