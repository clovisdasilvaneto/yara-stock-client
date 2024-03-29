import { useQuery } from '@apollo/client';
import { Box, Button, Typography } from '@mui/material'

import { WAREHOUSES_QUERY } from '../../services/warehouses/queries';
import WarehouseList from './components/WarehouseList';
import useOffCanvas from '../../components/OffCanvas/useOffCanvas';
import WarehouseForm from './components/WarehouseForm';
import OffCanvas from '../../components/OffCanvas';
import { LayoutDescription } from '../../layout/Layout/styled';



function Warehouses() {
    const { loading, error, data } = useQuery(WAREHOUSES_QUERY);
    const [isOpened, toggleIsOpened] = useOffCanvas();

    if (error) return <p>Error: {error.message}</p>;

    const warehouses = data?.warehouses;

    return (
        <Box>
            <LayoutDescription>
                <Typography variant="body2" fontStyle="italic">
                    Bellow the list of Warehouses that you have.
                </Typography>

                <Button onClick={toggleIsOpened} variant="outlined">
                    Add new warehouse
                </Button>
            </LayoutDescription>

            <WarehouseList loading={loading} items={warehouses} />

            <OffCanvas title="New Warehouse" isOpen={isOpened} onClose={toggleIsOpened}>
                <WarehouseForm onClose={toggleIsOpened} />
            </OffCanvas>
        </Box>
    )
}

export default Warehouses