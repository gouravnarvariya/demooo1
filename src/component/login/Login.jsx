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
import { ValidateLogin } from "../../utils/Validate";
import { AuthLogin, clearUserAuthLogin } from "../store/slice/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../utils/TokenHandler";
import { toast } from "react-toastify";
import ErrorMessage from '../../utils/ErrorMessage'
import { Link, useNavigate } from "react-router-dom";
import { addAccessToken } from "../api/Api";

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

export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [Inp, setInp] = React.useState({
    email: "",
    password:""
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
    const errorMessage = ValidateLogin(Inp);
    setError(errorMessage);
    if(errorMessage.isValid) {
      dispatch((AuthLogin(Inp)))
    }
  };




  const UserAuthLoginData = useSelector((store) => store.Authentication.UserAuthLogin)

  React.useEffect(()=>{
console.log(UserAuthLoginData.data)
if (UserAuthLoginData.data) {
  
  setData(UserAuthLoginData.data)
  toast.success("user login successful ")
  // addAccessToken(AuthLoggedIn.accessToken)
  navigate("/");
}
  },[UserAuthLoginData.data])

  React.useEffect(()=>{
    console.log(UserAuthLoginData.error)
    if (UserAuthLoginData.error) {
     dispatch(clearUserAuthLogin())
     setInp({
      email: "",
      otp:""
    })
    }
    toast.error(UserAuthLoginData?.error?.message)
      },[UserAuthLoginData.error])

     

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
            Login 
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  onChange={OnInputChanged}
                />
              </Grid>
              <ErrorMessage errors={error} title={"password"} />
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
                <Link to={"/signup"} onClick={()=>{
                  dispatch(()=>{
                   clearUserAuthLogin()
                  })
                }}>Dont have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
