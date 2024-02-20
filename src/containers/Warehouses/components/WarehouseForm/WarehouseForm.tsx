import { useMutation } from "@apollo/client";
import {
  Alert,
  AlertTitle,
  Grid,
  TextField,
} from "@mui/material";
import { FormEvent } from "react";
import SubmitButton from "../../../../components/SubmitButton";
import { CREATE_WAREHOUSE } from "../../../../services/warehouses/mutations";

interface WarehouseFormProps {
  onClose: () => void
}

function WarehouseForm({ onClose }: WarehouseFormProps) {
  const [createWarehouse, { loading, error }] = useMutation(CREATE_WAREHOUSE, {
    refetchQueries: ["GetWarehouses"],
    onCompleted() {
      onClose()
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { warehouseName, maxAmount } = form;
    const variables = {
      name: warehouseName.value,
      maxAmount: parseInt(maxAmount.value),
    };

    await createWarehouse({
      variables,
    });

    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <TextField
            label="Name"
            required
            name="warehouseName"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item md={12}>
          <TextField
            label="Max. Amount"
            name="maxAmount"
            required
            type="number"
            fullWidth
            variant="outlined"
          />
        </Grid>


        <Grid item mt={2} xs={12}>
          {error && (
            <Alert sx={{ mb: 3 }} variant="filled" severity="error">
              <AlertTitle>Oops!</AlertTitle>
              {error?.message}
            </Alert>
          )}

          <SubmitButton loading={loading} label="Submit" />
        </Grid>
      </Grid>
    </form>
  );
}

export default WarehouseForm;
