import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'Number',
    headerName: 'Phone',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Degree',
    headerName: 'Degree',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'Year',
    headerName: 'Year',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'CGPA / Percentage',
    headerName: 'percentage',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'PG_College',
    headerName: 'PG_College',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'PG',
    headerName: 'Post graduation',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'PG_Yaer',
    headerName: 'PG_YEAR',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'PG_PERCENTAGE',
    headerName: 'PG_PERCENTAGE',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];
const rows = [
  { id: 1,firstName: 'Jon', age: 14 },
 
];

export default function Admin() {
   const [data,setData]= React.useState([])
    const fetchData=async()=>{
          const res= await axios.get('https://form-87465-default-rtdb.firebaseio.com/form.json')
          if(!res.ok){
          console.log("not");
         
          }
         
            console.log(res.data['-NqbU89RsCnLMZRj7FF3'])
 setData(res.data)
           }
    React.useEffect(()=>{
        fetchData()
    },[])
    console.log(data)
  return (
    <>
    <Box sx={{ height: 400, width: '100%' }}>
        {data.map((data)=>{  
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    })}
    </Box>
    {/* {data.map((data)=>{
        <h1>{data}</h1>
    })} */}
    </>
  );
}