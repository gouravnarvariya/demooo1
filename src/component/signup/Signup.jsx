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
import ErrorMessage from "../../utils/ErrorMessage";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOtp} from "../../utils/TokenHandler";
import { toast } from "react-toastify";
import {ValidateRegister} from '../../utils/Validate';
import { clearRegisterData, RegisterUser } from "../store/slice/RegisterSlice";
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

export default function SignUp() {
  const [Inp, setInp] = React.useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms_condition: true,
    profilecreatedby: "Self",
    name: "",
    gender: "",
    dateofbirth: "",
    mobile_code: "+91",
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
    const errorMessage = ValidateRegister(Inp);
    setError(errorMessage);
    if(errorMessage.isValid) {
      dispatch(RegisterUser(Inp))
    }
  };


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const SignUpData = useSelector((store) => store.Registration.RegisterAdminData)

  React.useEffect(()=>{
console.log(SignUpData.data)
if (SignUpData.data) {
  setOtp(SignUpData.data)
  toast.success("now validate user by otp")
  navigate("/otp"  ,{
    state: {email: Inp.email }
  });
}
  },[SignUpData.data])

  React.useEffect(()=>{
    console.log(SignUpData.error)
    if (SignUpData.error) {
     dispatch(clearRegisterData())
     setInp({
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms_condition: true,
      profilecreatedby: "Self",
      name: "",
      gender: "",
      dateofbirth: "",
      mobile_code: "+91",
    })
    }
    toast.error(SignUpData?.error?.message)
      },[SignUpData.error])

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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={OnInputChanged}
                />
                <ErrorMessage errors={error} title={"name"} />
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
                  autoComplete="new-password"
                  onChange={OnInputChanged}
                />
              </Grid>
              <ErrorMessage errors={error} title={"password"} />
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirmpassword"
                  onChange={OnInputChanged}
                />
              </Grid>
              <ErrorMessage errors={error} title={"confirmPassword"} />
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="number"
                  id="phone"
                  autoComplete="phone number"
                  onChange={OnInputChanged}
                />
              </Grid>
              <ErrorMessage errors={error} title={"phone"} />
              <Grid item xs={12}>
                <InputLabel id="gender-select-label">Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender-select"
                  value={Inp.gender}
                  label="Gender"
                  name="gender"
                  onChange={OnInputChanged}
                  fullWidth
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                </Select>
              </Grid>
              <ErrorMessage errors={error} title={"gender"} />
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="dateofbirth"
                  type="date"
                  id="dateofbirth"
                  onChange={OnInputChanged}
                />
              </Grid>
              <ErrorMessage errors={error} title={"dateofbirth"} />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"}>Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
