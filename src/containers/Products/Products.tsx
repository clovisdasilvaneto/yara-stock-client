import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70, sortable: false },
  {
    field: "name",
    headerName: "Name",
    width: 160,
  },
  { field: "amount", headerName: "Amount", width: 90 },
  {
    field: "isHazardous",
    headerName: "Is Hazardous",
    width: 130,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    valueGetter: (params: any) => `${params.row.isHazardous ? "yes" : "no"}`,
  },
];

const rows = [
  { id: 1, name: "Snow", amount: 2, isHazardous: false },
  { id: 2, name: "Lannister", amount: 2, isHazardous: false },
  { id: 3, name: "Lannister", amount: 2, isHazardous: false },
  { id: 4, name: "Stark", amount: 2, isHazardous: false },
  { id: 5, name: "Targaryen", amount: 2, isHazardous: false },
  { id: 6, name: "Melisandre", amount: 2, isHazardous: false },
  { id: 7, name: "Clifford", amount: 2, isHazardous: false },
  { id: 8, name: "Frances", amount: 2, isHazardous: false },
  { id: 9, Name: "Roxie", amount: 13, isHazardous: false },
];

export default function Products() {
  return (
    <Box>
      <Typography mb={3} variant="body2" fontStyle="italic">
        Find all the products you have on your account.
      </Typography>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}
