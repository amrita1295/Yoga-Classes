import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { db } from "../firebase";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlinedIcon';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NativeSelect from '@mui/material/NativeSelect';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
const Contact = () => {
    const [age, setAge] = useState("");
    const [fees, setFees] = useState("");
    const [name, setName]=useState("");
    const [batch, setBatch] = useState("");
    const [loader, setLoader] = useState(false);

const Complete_Payment = (e) => {
    e.preventDefault();
    setLoader(true);
    if ( (age <= 65 && age >= 18) && fees==="500" && batch!=null && name !=null){
       db.collection("contacts") // name of the collection
           .add({
               age: age,
               fees: fees,
               batch: batch,
               name: name,
           })
           .then(() => {
               setLoader(false);
               alert("Your message has been submitted👍");
           })
           .catch((error) => {
               alert(error.message);
               setLoader(false);
           });
   }else{
        alert("Age must me between 18 and 65 and Kindly pay 500 INR 👍");
       window.location.reload(false);
   }
    setAge("");
    setFees("");
    setBatch("");
    setName("");
};

const theme = createTheme();

// export default function Contact1() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccessAlarmIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register For Yoga Class
          </Typography>
          <Box component="form" noValidate onSubmit={Complete_Payment} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Full name"
                  label="Full name"
                  name="Full name"
                  autoComplete="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-age"
                  name="Age"
                  required
                  fullWidth
                  id="Age"
                  label="Age"
                  autoFocus
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Fees"
                  label="Fees"
                  name="Fees"
                  autoComplete="Enter Fees"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                />
              </Grid>
              
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
              <Grid item xs={12}>
                <NativeSelect  variant="standard" htmlFor="uncontrolled-native"
                    defaultValue={6 - 7 + 'AM'}
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    inputProps={{
                        name: 'batch',
                        id: 'uncontrolled-native',
                    }}>
                    <option value={"6 - 7 AM "}> 6-7 AM </option>
                    <option value={"7 - 8 AM "}> 7-8 AM </option>
                    <option value={"8 - 9 AM "}> 8-9 AM </option>
                    <option value={"5 - 6 PM "}> 5-6 PM </option>
                </NativeSelect>
                </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
};

export default Contact;