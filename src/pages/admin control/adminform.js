// function admin (){
// return (
//     <h1>HELLO </h1>
// )
// }
// export default admin

import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import CSButton from "../../component/CSButton"
import CSTextField from "../../component/CSTextField"
import { sendData } from "../../config/firebasemethod";
function Admin() {
  const [model, setmodel] = useState({});
  let Navigate = useNavigate();
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  const coursedata = () => {
    fillmodel("status", true);
    sendData(model, "Courses/")
      .then((success) => {
        Navigate("/adminquiz")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="adminbg box">
      <Box sx={{ p: 2, width: "50%" }}>

        <Box sx={{ border: "2px solid white", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            Courses
          </Typography>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item md={12}>
              <CSTextField
                label="Course Name"
                required={true}
                value={model.coursename}
                onChange={(e) => fillmodel("coursename", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Duration"
                required={true}
                value={model.duration}
                onChange={(e) => fillmodel("duration", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="fee"
                required={true}
                value={model.fee}
                onChange={(e) => fillmodel("fee", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="noofQuiz"
                required={true}
                value={model.noofquiz}
                onChange={(e) => fillmodel("noofquiz", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Lead Trainer"
                required={true}
                value={model.leadtrainer}
                onChange={(e) => fillmodel("leadtrainer", e.target.value)}
              />
            </Grid>

            <Grid item md={12}>
              <CSTextField
                label="Assistant 1"
                required={true}
                value={model.assistant_1}
                onChange={(e) => fillmodel("assistant_1", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Assistant 2"
                required={true}
                value={model.assistant_2}
                onChange={(e) => fillmodel("assistant_2", e.target.value)}
              />
            </Grid>

            <Grid item md={12}>
              <CSButton
                label={"Send Data"}
                color={"primary"}
                variant={"contained"}
                fullwidth
                onClick={coursedata}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Admin;