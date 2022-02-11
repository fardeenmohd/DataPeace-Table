import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
const UserItem = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const UserDetail = () => {
  let navigate = useNavigate();
  let {
    first_name,
    last_name,
    company_name,
    city,
    state,
    zip,
    email,
    web,
    age,
  } = useSelector((state) => state.users.selectedUser);

  return (
    <Paper sx={{ p: 1 }}>
      <Grid container>
        <Grid item xs={0.5}>
          <IconButton onClick={() => navigate("/users")} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item xs={11.5}>
          <Typography variant="h5" component="div" gutterBottom>
            Details: {first_name} {last_name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <UserItem variant="body1" gutterBottom>
            First Name: <b>{first_name}</b>
          </UserItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <UserItem variant="body1" gutterBottom>
            Last Name: <b>{last_name}</b>
          </UserItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <UserItem variant="body1" gutterBottom>
            Company Name: <b>{company_name}</b>
          </UserItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <UserItem variant="body1" gutterBottom>
            City: <b>{city}</b>
          </UserItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <UserItem variant="body1" gutterBottom>
            State: <b>{state}</b>
          </UserItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <UserItem variant="body1" gutterBottom>
            Zip: <b>{zip}</b>
          </UserItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <UserItem variant="body1" gutterBottom>
            Email: <b>{email}</b>
          </UserItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <UserItem variant="body1" gutterBottom>
            Web: <b>{web}</b>
          </UserItem>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <UserItem variant="body1" gutterBottom>
            Age: <b>{age}</b>
          </UserItem>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserDetail;
