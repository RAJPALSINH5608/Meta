import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import { leader } from "./api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const THead = styled(TableRow)`
  background: #0091ea;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;
const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const UserLeader = () => {
  const [users, setUsers] = useState([]);
  const [option, setOption] = useState("");

  const handleClick = async (optionValue) => {
    if (!option) {
      if (optionValue === "Total NFTs Minted") {
        setOption("nft");
      } else {
        setOption("tiles");
      }
    } else {
      setOption("");
    }
  };

  useEffect(() => {
    handleClick("Total NFTs Minted");
  }, []);

  useEffect(() => {
    if (option) {
      leader(option).then((response) => setUsers(response.data));
    }
  }, [option]);

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Serial No.</TableCell>
          <TableCell>Username</TableCell>
          <TableCell
            onClick={() => handleClick("Total NFTs Minted")}
            value="nft"
          >
            Total NFTs Minted
          </TableCell>
          <TableCell
            onClick={() => handleClick("Total Tiles Minted")}
            value="tiles"
          >
            Total Tiles Minted
          </TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user, index) => (
          <TBody key={user._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.noOfNFT}</TableCell>
            <TableCell>{user.noOfTiles}</TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default UserLeader;
