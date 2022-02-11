import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const SearchBase = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  width: "25rem",
}));

const UserSearchBar = (props) => {
  const { searched, handleSearchChange } = props;
  return (
    <SearchBase component="form">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by First Name or Last Name"
        value={searched}
        onChange={handleSearchChange}
      />
      <IconButton disabled={true} sx={{ p: "8px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </SearchBase>
  );
};

export default UserSearchBar;
