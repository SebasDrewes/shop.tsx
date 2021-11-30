import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function SkeletonCartItem() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "30px",
      }}
    >
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={340}
        height={300}
      />
      <Skeleton variant="text" animation="wave" width={340} height={50} />
      <Skeleton variant="text" animation="wave" width={340} height={30} />
      <Skeleton variant="text" animation="wave" width={340} height={80} />
    </Box>
  );
}
