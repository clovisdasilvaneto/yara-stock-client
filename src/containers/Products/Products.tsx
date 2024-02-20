import { Box, Button, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { DataGrid } from "@mui/x-data-grid";

import { Product } from "./types";

import { PRODUCTS_QUERY } from "../../services/products/queries";
import useOffCanvas from "../../components/OffCanvas/useOffCanvas";
import OffCanvas from "../../components/OffCanvas";
import ProductsForm from "./components/ProductsForm";

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
    valueGetter: ({ row }: { row: Product }) => `${row.isHazardous ? "yes" : "no"}`,
  },
];

export default function Products() {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);
  const [isOpened, toggleIsOpened] = useOffCanvas();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products;

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mb={3}
        alignItems="center"
      >
        <Typography variant="body2" fontStyle="italic">
          Find all the products you have on your account.
        </Typography>

        <Button onClick={toggleIsOpened} variant="outlined">
          Add new product
        </Button>
      </Box>

      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 8]}
      />

      <OffCanvas title="New Product" isOpen={isOpened} onClose={toggleIsOpened}>
        <ProductsForm onClose={toggleIsOpened} />
      </OffCanvas>
    </Box>
  );
}
