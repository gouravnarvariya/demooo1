import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ValidateUser } from "../../../utils/Validate";
import {  setData } from "../../../utils/TokenHandler";
import { toast } from "react-toastify";
import ErrorMessage from '../../../utils/ErrorMessage'
import { clearUserAuthLogin, VerifyUser } from "../../store/slice/AuthSlice";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function VerifyOtp() {

  const location = useLocation();
  const { email } = location.state || "";
  console.log(email)

  const [Inp, setInp] = React.useState({
    email: email,
    otp:""
  });

  const [error, setError] = React.useState({ isValid: false });

  const OnInputChanged = ({ target }) => {
    const { name, value } = target;

    setError((p) => {
      const obj = { ...p };
      obj?.errors && delete obj?.errors[name];
      return obj;
    });

    setInp((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorMessage = ValidateUser(Inp);
    setError(errorMessage);
    if(errorMessage.isValid) {
      dispatch((VerifyUser(Inp)))
    }
  };


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const VerifyOtpData = useSelector((store) => store.Authentication.UserAuthLogin)

  React.useEffect(()=>{
console.log(VerifyOtpData.data)
if (VerifyOtpData.data) {
  
  setData(VerifyOtpData.data)
  toast.success("user successful register ")
  navigate("/");
}
  },[VerifyOtpData.data])

  React.useEffect(()=>{
    console.log(VerifyOtpData.error)
    if (VerifyOtpData.error) {
     dispatch(clearUserAuthLogin())
     setInp({
      email: email,
      otp:""
    })
    }
    toast.error(VerifyOtpData?.error?.message)
      },[VerifyOtpData.error])

     

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register User
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={OnInputChanged}
                />
              </Grid>
              <ErrorMessage errors={error} title={"email"} />
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="otp"
                  label="otp"
                  type="number"
                  id="otp"
                  autoComplete="otp"
                  onChange={OnInputChanged}
                />
              </Grid>
              <ErrorMessage errors={error} title={"otp"} />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"} onClick={()=>{
                  dispatch(()=>{
                   clearUserAuthLogin()
                  })
                }}>Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
