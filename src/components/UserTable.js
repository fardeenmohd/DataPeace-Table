import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  changeSort,
  changePage,
  changeRowsPerPage,
  searchUser,
} from "../actions/userActions";
import { curateList } from "../utils";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import UserTableHead from "./UserTableHead";
import UserSearchBar from "./UserSearchBar";

const UserTable = () => {
  const { userList, searched, pagination, searchedUserList } = useSelector(
    (state) => state.users
  );

  let tableData = searched === "" ? userList : searchedUserList;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRequestSort = (event, property) => {
    dispatch(changeSort(event, property));
  };

  const handleChangePage = (event, newPage) => {
    dispatch(changePage(event, newPage));
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch(changeRowsPerPage(event));
  };

  const handleSearchChange = (event) => {
    dispatch(searchUser(event));
  };

  const rowClicked = (e, user) => {
    e.preventDefault();
    if (!["webLink", "webUri"].includes(e.target.id)) {
      dispatch(selectUser(user.id));
      navigate(`/users/${user.id}`);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <UserSearchBar
          searched={searched}
          handleSearchChange={handleSearchChange}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: "25rem", minHeight: "10rem" }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <UserTableHead
              order={pagination.order}
              orderBy={pagination.orderBy}
              onRequestSort={handleRequestSort}
              rowCount={pagination.count}
            />
            <TableBody>
              {curateList(tableData, pagination).map((row, index) => {
                return (
                  <TableRow
                    onClick={(e) => rowClicked(e, row)}
                    hover
                    key={row.id}
                  >
                    <TableCell component="th" scope="row">
                      {row.first_name}
                    </TableCell>
                    <TableCell align="left">{row.last_name}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell id={"webLink"} align="right">
                      <Link
                        id={"webUri"}
                        href="#"
                        onClick={() => {
                          window.open(row.web);
                        }}
                      >
                        {row.web}
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container>
          <Grid item xs={6}>
            <Pagination
              sx={{ mt: 1 }}
              count={Math.floor(pagination.count / pagination.rowsPerPage - 1)}
              page={pagination.page}
              onChange={handleChangePage}
            />
          </Grid>
          <Grid item xs={6}>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              component="div"
              count={pagination.count}
              rowsPerPage={pagination.rowsPerPage}
              page={pagination.page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default UserTable;
