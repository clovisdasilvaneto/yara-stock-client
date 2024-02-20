import { Box, Button, LinearProgress, Typography, } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { EWarehouseAction, Warehouse } from '../../types';
import { useState } from 'react';
import useOffCanvas from '../../../../components/OffCanvas/useOffCanvas';
import OffCanvas from '../../../../components/OffCanvas';
import MovementForm from '../MovementForm';
import WarehouseHistory from '../WarehouseHistory/WarehouseHistory';

const fixedColumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 60, sortable: false },
    {
        field: "name",
        headerName: "Name",
        width: 170,
    },
    {
        field: "maxAmount",
        headerName: "Max Amount",
        width: 120,
        align: "center",
    },
    {
        field: "capacity",
        headerName: "Capacity",
        width: 80,
        renderCell: ({ row }: { row: Warehouse }) =>
            <Box width="100%"> <Typography>{row.capacity}/{row.maxAmount}</Typography> <LinearProgress sx={{ width: "100%" }} variant="determinate" value={(row.capacity / row.maxAmount) * 100} /></Box>,
    },
    {
        field: "hasHazardous",
        headerName: "Has Har. Products",
        align: "center",
        width: 150,
        valueGetter: ({ row }: { row: Warehouse }) => `${row.hasHazardous ? "Yes" : "No"}`,
    },
];

interface WarehouseListProps {
    items: Warehouse[]
}

type warehouseAction = {
    action: EWarehouseAction,
    warehouse: Warehouse,
}

function WarehouseList({ items }: WarehouseListProps) {
    const [isMovementFormOpened, toggleMovementForm] = useOffCanvas()
    const [isWarehouseHistoryOpened, toggleWarehouseHistory] = useOffCanvas()
    const [movementAction, setMovementAction] = useState<warehouseAction>()
    const [selectedWarehouseHistory, setSelectedWarehouseHistory] = useState<Warehouse>()

    const onActionClick = (action: EWarehouseAction, warehouse: Warehouse) => () => {
        setMovementAction({
            action,
            warehouse
        })
        toggleMovementForm()
    }

    const onWarehouseHistoryClick = (warehouse: Warehouse) => () => {
        setSelectedWarehouseHistory(warehouse)
        toggleWarehouseHistory()
    }

    return (
        <>
            <DataGrid
                rows={items}
                columns={[
                    ...fixedColumns,
                    {
                        field: "actions",
                        headerName: "Actions",
                        width: 285,
                        renderCell: ({ row }: { row: Warehouse }) => <Box display="flex" columnGap={1}>
                            <Button size="small" color="success" variant='outlined' onClick={onActionClick(EWarehouseAction.IMPORT, row)}>Import</Button>
                            <Button size="small" disabled={!row.warehouseProduct.length} variant='outlined' onClick={onActionClick(EWarehouseAction.EXPORT, row)}>Export</Button>
                            <Button size="small" color="warning" onClick={onWarehouseHistoryClick(row)} variant='outlined'>View History</Button>
                        </Box>,
                    }
                ]}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[5, 8]}
            />


            <OffCanvas title={`${movementAction?.action === EWarehouseAction.IMPORT ? "Import" : "Export"} Product`} isOpen={isMovementFormOpened} onClose={toggleMovementForm}>
                {movementAction && <MovementForm warehouse={movementAction?.warehouse} action={movementAction?.action} onClose={toggleMovementForm} />}
            </OffCanvas>


            <OffCanvas title="Warehouse History" direction='left' isOpen={isWarehouseHistoryOpened} onClose={toggleWarehouseHistory}>
                {selectedWarehouseHistory && <WarehouseHistory warehouse={selectedWarehouseHistory} />}
            </OffCanvas>
        </>
    )
}

export default WarehouseList