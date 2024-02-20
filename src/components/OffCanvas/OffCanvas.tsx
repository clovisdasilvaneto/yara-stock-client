import { Button, Drawer, Typography } from "@mui/material";
import React from "react";

interface OffCanvasProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  direction?: 'right' | 'left';
  children: React.ReactNode;
}

function OffCanvas({ isOpen, direction = 'right', title, onClose, children }: OffCanvasProps) {
  return (
    <Drawer
      anchor={direction}
      PaperProps={{
        sx: {
          width: "min(100vw, 500px)",
        },
      }}
      open={isOpen}
      onClose={onClose}
    >
      {Boolean(title) && (
        <Typography variant="h6" paragraph>
          {title}
        </Typography>
      )}

      {children}

      <Button color="error" onClick={onClose}>Go Back</Button>
    </Drawer>
  );
}

export default OffCanvas;
