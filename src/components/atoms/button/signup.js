import Button from "@mui/material/Button";


export default function SignUpButton({ handleSignup }) {
  
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => {
          handleSignup();
        }}
        sx={{
          backgroundColor: "white",
          width: "25rem",
          borderRadius: "15px",
          textTransform: "none",
        }}
      >
        Sign Up
      </Button>
    </div>
  );
}
