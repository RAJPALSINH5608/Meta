import React from "react";
import { useState } from "react";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";

import { brokerLeadership } from "./api";
import { useEffect } from "react";

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

const BrokerLeader = () => {
  const [users, setUsers] = useState([]);

  var option = "";

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(e.target.innerHTML);

    if (!option) {
      if (e.target.innerHTML == "Total NFTs Minted") {
        option = "nft";
      } else {
        option = "tiles";
      }
      console.log(option);
      let response = await brokerLeadership(option);
      setUsers(response.data);
      // console.log(response.data);
    } else {
      option = "";
    }
  };

  useEffect(() => {
    LeaderBroker();
  }, []);

  const LeaderBroker = async () => {
    let response = await brokerLeadership();
    console.log(response.data)
    setUsers(response.data);
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
        <TableCell>Serial no</TableCell>
          <TableCell>Username</TableCell>
          <TableCell onClick={handleClick} value="nft">
            Total NFTs Minted
          </TableCell>

          <TableCell onClick={handleClick} value="tiles">
            Total Tiles Minted
          </TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user,index) => (
          <TBody key={user._id}>
          <TableCell>{index + 1}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.totalNFTMinted}</TableCell>
            <TableCell>{user.totalTilesMinted}</TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default BrokerLeader;
