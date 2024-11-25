import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


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
  export default function Admin() {
    

    const [data,setData]=React.useState()
    
         const fetchData=async()=>{

           await axios.get('https://formpanel.onrender.com/api/v1/post').then((data)=> setData(data.data.data)).catch((error)=>console.log(error))
       console.log(data)
          }
      React.useEffect(()=>{
fetchData();
// eslint-disable-next-line
      },[data]);
          
              console.log(data)
           return (
            <>
         

    <TableContainer component={Paper} className='px-[3%]'>
        <h1 className='text-[25px] font-bold text-orange-400 text-center uppercase py-[2rem]'>Customer Information</h1>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">place</StyledTableCell>
         
           
            <StyledTableCell align="right">TransactionId</StyledTableCell>

            <StyledTableCell align="right">WhatsApp</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.length>0 && data?.map((row) => 
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.Phone}</StyledTableCell>
              <StyledTableCell align="right">{row.Interst}</StyledTableCell>
              <StyledTableCell align="right">{row.Course}</StyledTableCell>
              {/* <StyledTableCell align="right"><a href={`tel:${row.Phone}`} className='text-white font-bold bg-blue-500 px-3 py-2'>CallNow</a> </StyledTableCell> */}
            
              <StyledTableCell align="right"><a href={`https://wa.me/${row.Phone}`} className='text-white font-bold bg-green-500 px-3 py-2'>WhatsApp</a></StyledTableCell></StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>

    </>
  );
}