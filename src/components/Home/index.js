import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Box from '@mui/material/Box';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Count from "../Features/Counts";
import SearchBar from "material-ui-search-bar";
import Filter from "../Features/Filter";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

// import { DataGrid } from '@material-ui/data-grid';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Home = ({ contacts }) => {

  const [rows, setRows] = useState(contacts);
  const [searched, setSearched] = useState("");
  const [pageSize, setPageSize] = useState(5);

  const requestSearch = (searchedVal) => {
    const filteredRows = contacts.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.subject.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.city.toLowerCase().includes(searchedVal.toLowerCase());;
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  // const [modifyUserData, setModifyUserData] = useState([])
  // useEffect(() => {
  //   if (contacts.length != 0)
  //     setModifyUserData(contacts)
  // }, [contacts, modifyUserData])

  return (
    <div className="mrg">
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          className="srch"
        />
        <Count />
        <Filter rowsObject={{ "rows": rows, "setRows": setRows }} />
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button btn btn-success mb-3 excel"
          table="table-to-xls"
          filename="StudentDetail"
          sheet="StudentDetail"
          buttonText="Export Data to Excel Sheet" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table" id="table-to-xls">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right">Subject</StyledTableCell>
                <StyledTableCell align="right">City</StyledTableCell>
                <StyledTableCell align="right">Start Date</StyledTableCell>
                <StyledTableCell align="right">End Date</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 ? (
                rows.map((rows, id) => (
                  <StyledTableRow key={id}>
                    <StyledTableCell component="th" scope="row">{id + 1}</StyledTableCell>
                    <StyledTableCell align="right">{rows.name}</StyledTableCell>
                    <StyledTableCell align="right">{rows.email}</StyledTableCell>
                    <StyledTableCell align="right">{rows.phone}</StyledTableCell>
                    <StyledTableCell align="right">{rows.subject}</StyledTableCell>
                    <StyledTableCell align="right">{rows.city}</StyledTableCell>
                    <StyledTableCell align="right">{rows.S_Date}</StyledTableCell>
                    <StyledTableCell align="right">{rows.E_Date}</StyledTableCell>
                  </StyledTableRow>
                ))) : null}
            </TableBody>
          </Table>
        </TableContainer>
        {/* } */}
        {/* /> */}
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: state,
});
export default connect(mapStateToProps)(Home);





