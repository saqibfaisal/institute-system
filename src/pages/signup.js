
import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import CSButton from "../component/CSButton"
import CSTextField from "../component/CSTextField";
import { signUpUser } from "../config/firebasemethod";
function SignUp() {
  const [model, setmodel] = useState({});
  let navigate = useNavigate()
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
  };

  let signin = () => {
    signUpUser(model)
      .then((success) => {
        console.log(success);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let locate = () => {

      navigate('/login')
  }
  return (
    <div className="header box">
      <Box sx={{ width: "45%", pt: 2 }}>
        <Box sx={{ border: "2px solid white", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            SignUp
          </Typography>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item md={12}>
              <CSTextField
                label="UserName"
                required={true}
                value={model.username}
                onChange={(e) => fillmodel("username", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Email"
                required={true}
                value={model.email}
                type={"email"}
                onChange={(e) => fillmodel("email", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Password"
                required={true}
                value={model.password}
                type={"password"}
                onChange={(e) => fillmodel("password", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSButton
                label={'Create Account'}
                color={"success"}
                variant={"contained"}
                fullwidth
                onClick={signin}
              />
            </Grid>
          </Grid>
          <Grid sx={{ p: 1.5 }}>
            <Typography variant="span">Already Have An Account ? </Typography>
            <Typography variant="span" onClick={locate} sx={{ textDecoration: "underline",cursor:"pointer" }}>
              Login
            </Typography>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
export default SignUp;

