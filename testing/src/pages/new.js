import { useEffect, useState } from "react";
import { getUsers } from "./api";
import { Link } from "react-router-dom";
import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Table,
  Button,
} from "@mui/material";

const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;
const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Username</TableCell>
          <TableCell>firstname</TableCell>
          <TableCell>lastname</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>country</TableCell>
          <TableCell>parent</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody key={user._id}>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.firstname}</TableCell>
            <TableCell>{user.lastname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.country}</TableCell>
            <TableCell>{user.parent}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                <Link to="/brokerprofile">Edit</Link>
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default User;
