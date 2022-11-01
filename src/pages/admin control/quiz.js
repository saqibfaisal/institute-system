import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getData } from "../../config/firebasemethod";
function Quiz() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData("quiz")
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {data.map((e, i) => {
        <div>
          <Typography variant="h1">{e.qurestion}</Typography>
          <Typography variant="h1">{e.option_1}</Typography>
          <Typography variant="h1">{e.option_2}</Typography>
          <Typography variant="h1">{e.option_3}</Typography>
          <Typography variant="h1">{e.option_4}</Typography>
        </div>;
      })}
      {/* // <h1>HELLO</h1> */}
    </>
  );
}
export default Quiz;
