import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { loadUsers } from "../actions/userActions";
import UserTable from "../components/UserTable";

const UsersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <UserTable />
      </Grid>
    </Grid>
  );
};

export default UsersPage;
