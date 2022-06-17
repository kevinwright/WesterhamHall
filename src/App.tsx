import AppThemeProvider from './AppThemeProvider';
import NavBar from './panels/navbar'
import { Outlet } from "react-router-dom";

import './App.css';

function App() {
  return (
    <AppThemeProvider>
      <>
        <NavBar />
        <Outlet />
      </>
    </AppThemeProvider>
  );
}

export default App;