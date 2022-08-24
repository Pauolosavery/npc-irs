/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {
  Box, Typography, TextField, Container, Grid,
} from '@mui/material';

export default function Capability() {
  return (
        <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
        >
            <div>
                {/* <Container maxWidth='lg' style={{ padding: '0' }}>
            <Grid container>
                <Grid item id="logo" xs={12} sm={6} md={4} lg={3} style={{ backgroundColor: '#f5f5f5' }}> */}

                <Typography>
                    Введите параметры
                </Typography>
                <TextField fullWidth label="Номер п.п.">
                <TextField fullWidth label="Объект">

                </TextField>
                {/* </Grid>
            </Grid>
        </Container> */}
            </div>
        </Box>
  );
}
