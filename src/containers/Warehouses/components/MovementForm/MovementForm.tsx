import { useMutation, useQuery } from "@apollo/client";
import {
  Alert,
  AlertTitle,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import { FormEvent } from "react";
import SubmitButton from "../../../../components/SubmitButton";
import { MOVEMENT_PRODUCT } from "../../../../services/warehouses/mutations";
import { DatePicker } from "@mui/x-date-pickers";
import { EWarehouseAction, Warehouse } from "../../types";
import dayjs from "dayjs";
import { PRODUCTS_QUERY } from "../../../../services/products/queries";
import { Product } from "../../../Products/types";

interface MovementFormProps {
  onClose: () => void
  warehouse: Warehouse
  action: EWarehouseAction
}

function MovementForm({ onClose, warehouse, action }: MovementFormProps) {
  const { loading: loadingProduct, data } = useQuery(PRODUCTS_QUERY);
  const [movementProduct, { loading, error }] = useMutation(MOVEMENT_PRODUCT, {
    refetchQueries: ["GetWarehouses"],
    onCompleted() {
      onClose()
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { productId, amount } = form;
    const variables = {
      date: dayjs(form.date.value).toISOString(),
      productId: productId.value,
      warehouseId: warehouse.id,
      amount: parseInt(amount.value),
      action
    };

    await movementProduct({
      variables,
    });

    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <DatePicker name="date" sx={{ width: "100%" }} label="Chose the date" />
        </Grid>

        <Grid item sm={12} mb={2}>
          <TextField
            label="Amount"
            name="amount"
            required
            type="number"
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item sm={12}>
          <FormControl fullWidth>
            <InputLabel id="product">Select the product</InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: 'productId',
                id: 'product',
              }}
            >
              {action === EWarehouseAction.EXPORT ? warehouse.warehouseProduct.map(({ amount, product }) => (
                <option key={product.id} value={product.id}>{product.name} - {amount}</option>
              )) : (loadingProduct ? (
                <option>Loading products...</option>
              ) : data.products.map(({ id, name, amount }: Product) => (
                <option key={id} value={id}>{name} - {amount} </option>
              )))}
            </NativeSelect>
          </FormControl>
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

export default MovementForm;
