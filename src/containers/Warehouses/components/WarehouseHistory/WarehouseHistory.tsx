import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { EWarehouseAction, Warehouse, WarehouseHistory, WarehouseProduct } from '../../types';
import { useQuery } from '@apollo/client';
import { WAREHOUSE_HISTORY_QUERY } from '../../../../services/warehouses/queries';
import { Box, Typography } from '@mui/material';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 60, sortable: false },
    {
        field: "name",
        headerName: "Name",
        valueGetter: ({ row }: { row: WarehouseProduct }) => row.product.name,
    },
    {
        field: "amount",
        headerName: "Amount",
        width: 70,
        align: "center",
    },
    {
        field: "date",
        headerName: "Date",
        width: 120,
    },
    {
        field: "action",
        headerName: "Action",
        width: 170,
        renderCell: ({ row }: { row: WarehouseHistory }) => <Typography color={row.action === EWarehouseAction.IMPORT ? 'success.main' : 'primary'}>{row.action}</Typography>
    },
];

interface WarehouseHistoryListProps {
    warehouse: Warehouse
}

function WarehouseHistoryList({ warehouse }: WarehouseHistoryListProps) {
    const { loading, error, data } = useQuery(WAREHOUSE_HISTORY_QUERY, {
        variables: {
            id: warehouse.id
        }
    });

    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Typography variant="body2" paragraph>Bellow you can find the history list for the warehouse: {warehouse.name}</Typography>

            <Box maxHeight={500} mb={2}>
                <DataGrid
                    rows={data?.warehouse?.warehouseHistory || []}
                    loading={loading}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 100 },
                        },
                    }}
                    pageSizeOptions={[50, 100]}
                />
            </Box>
        </>
    )
}

export default WarehouseHistoryList