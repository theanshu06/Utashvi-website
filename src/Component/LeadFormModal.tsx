import { Modal, Box } from "@mui/material";

interface LeadFormModalProps {
  open: boolean;
  onClose: () => void;
  initialTab: "home" | "commercial" | "housing";
}

function LeadFormModal({ open, onClose, initialTab }: LeadFormModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="lead-form-modal"
      aria-describedby="lead-form-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 500 },
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Lead Form - {initialTab}</h2>
        <p>Lead form content will go here</p>
        <button onClick={onClose}>Close</button>
      </Box>
    </Modal>
  );
}

export default LeadFormModal;

