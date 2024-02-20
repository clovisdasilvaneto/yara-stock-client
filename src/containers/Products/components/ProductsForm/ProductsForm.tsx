import { useMutation } from "@apollo/client";
import {
  Alert,
  AlertTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { FormEvent } from "react";
import { CREATE_PRODUCT } from "../../../../services/products/mutations";
import SubmitButton from "../../../../components/SubmitButton";

interface ProductsFormProps {
  onClose: () => void
}

function ProductsForm({ onClose }: ProductsFormProps) {
  const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: ["GetProducts"],
    onCompleted() {
      onClose()
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { productName, amount, isHazardous } = form;
    const variables = {
      name: productName.value,
      amount: parseInt(amount.value),
      isHazardous: isHazardous.value === "true",
    };

    await createProduct({
      variables,
    });

    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid item md={12} mb={2}>
        <TextField
          label="Name"
          required
          name="productName"
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item md={6} mb={2}>
        <TextField
          label="Amount"
          name="amount"
          required
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item md={6} xs={12} mb={2}>
        <FormControl>
          <FormLabel id="hazardous">Is Hazardous?</FormLabel>
          <RadioGroup
            aria-labelledby="hazardous"
            defaultValue={true}
            name="isHazardous"
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item mt={2} xs={12} mb={2}>
        {error && (
          <Alert sx={{ mb: 3 }} variant="filled" severity="error">
            <AlertTitle>Oops!</AlertTitle>
            {error?.message}
          </Alert>
        )}
        <SubmitButton loading={loading} label="Submit" />
      </Grid>
    </form>
  );
}

export default ProductsForm;
