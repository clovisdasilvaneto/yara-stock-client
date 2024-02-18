import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import WarehouseIcon from "@mui/icons-material/Warehouse";

function Sidebar() {
  return (
    <Paper>
      <Typography
        align="center"
        marginBottom={6}
        component="h1"
        variant="h5"
        fontWeight={500}
      >
        Yara Warehouses
      </Typography>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ProductionQuantityLimitsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Products</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <WarehouseIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>Warehouses</ListItemText>
        </MenuItem>
        <Divider />
      </MenuList>
    </Paper>
  );
}

export default Sidebar;
