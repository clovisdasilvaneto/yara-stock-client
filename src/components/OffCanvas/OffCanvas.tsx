import { Drawer, Typography } from "@mui/material";
import React from "react";
import { PaperStyles } from "../../theme";

interface OffCanvasProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

function OffCanvas({ isOpen, title, onClose, children }: OffCanvasProps) {
  return (
    <Drawer
      anchor="right"
      PaperProps={{
        sx: {
          ...PaperStyles,
          width: "min(100vw, 500px)",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
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
    </Drawer>
  );
}

export default OffCanvas;
