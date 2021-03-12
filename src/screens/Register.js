import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Register.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginLeft: 82,
    marginBottom: 20,
    marginTop: 0,
  },
  button: {
    "&:hover": {
      backgroundColor: "#0069d9",
      border: "dashed",
    },
  },
}));

class Form extends Component{

}

const Register = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item md={3} />
        <Grid item md={6} className="register" style={{ marginTop: 60 }}>
          <h2></h2>
          <Card className="card">
            <CardContent className="cardcontent">
              <form>
                <Avatar src="/broken-image.jpg" className={classes.large} />

                <TextField
              id="filled-basic"
              label="your name"
              variant="filled"
             className="text-field"
           style={{  width: 280, marginBottom:45, marginTop:0}}
            /><br></br>
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
             className="text-field"
              style={{  width: 280, marginBottom:45, marginTop:20}}
            /><br></br>
            <TextField
              id="filled-basic"
              label="password"
              variant="filled"
             className="text-field"
              style={{  width: 280, marginBottom:45, marginTop:20}}
            /><br>
            </br>
            <TextField
              id="filled-basic"
              label="phone"
              variant="filled"
             className="text-field"
              style={{  width: 280, marginBottom:50, marginTop:20}}
            />
              </form>
              <Button
                className={classes.button}
                variant="contained"
                style={{
                  backgroundColor: "#4747d1",
                  color: "white",
                  width: 100,
                  marginBottom: 20,
                }}
              >
                Reset
              </Button>
              <Link to="/reg" style={{ textDecoration: "none" }}>
                <Button
                  className={classes.button}
                  variant="contained"
                  style={{
                    backgroundColor: "#4747d1",
                    color: "white",
                    width: 100,
                    marginLeft: 51,
                    marginBottom: 20,
                  }}
                >
                  Submit
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} />
      </Grid>
    </div>
  );
};

export default Register;
