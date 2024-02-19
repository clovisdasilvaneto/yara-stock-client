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
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        height: "100%",
        borderRadius: 5,
        padding: 2,
        paddingY: 5,
      }}
    >
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
        <MenuItem onClick={() => navigate("/")}>
          <ListItemIcon>
            <ProductionQuantityLimitsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Products</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => navigate("/warehouses/")}>
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
