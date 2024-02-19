import { Button, CircularProgress } from "@mui/material";

interface SubmitButtonProps {
  loading: boolean;
  label: string;
}

function SubmitButton({ loading, label }: SubmitButtonProps) {
  return (
    <Button
      disabled={loading}
      type="submit"
      size="large"
      variant="contained"
      fullWidth
    >
      {loading && <CircularProgress size={20} sx={{ marginRight: 1 }} />}
      {label}
    </Button>
  );
}

export default SubmitButton;
