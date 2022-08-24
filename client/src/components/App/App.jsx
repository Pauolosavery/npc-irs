// import { useDispatch, useSelector } from 'react-redux';

// import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import {
  Grid, Container,
  // Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button,
} from '@mui/material';
import Main from '../Main/Main.jsx';
import Capability from '../Capability/Capability.jsx';

import Navigation from '../Navigation/Navigation.jsx';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container maxWidth='lg' style={{ padding: '0' }}>
          <Grid container>
            <Grid item id="logo" xs={12} sm={6} md={4} lg={3} style={{ backgroundColor: '#f5f5f5' }}>
            <Link style={{ textDecoration: 'none' }} to="/">ГЛАВНАЯ</Link>
              <Navigation />
            </Grid>
            <Grid item id="logo" xs={12} sm={6} md={8} lg={9} style={{ backgroundColor: '#fafafa' }}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/capability" element={<Capability />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </BrowserRouter>
    </div>
  );
}
