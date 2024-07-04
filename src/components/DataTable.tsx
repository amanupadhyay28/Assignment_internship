import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, CircularProgress, Typography } from '@mui/material';
import { fetchPosts } from '../services/postService';
import { Post } from '../interfaces/Post';

const columns: GridColDef[] = [
  { field: 'userId', headerName: 'User ID', width: 100 },
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 500 },
];

const DataTable: React.FC = () => {
  const [rows, setRows] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setRows(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ height: 600, width: '70%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

export default DataTable;
