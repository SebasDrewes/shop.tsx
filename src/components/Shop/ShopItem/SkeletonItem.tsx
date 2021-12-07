import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function SkeletonItem() {
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
        width={330}
        height={280}
      />
      <Skeleton variant="text" animation="wave" width={330} height={70} />
      <Skeleton variant="text" animation="wave" width={330} height={50} />
      <Skeleton variant="text" animation="wave" width={330} height={80} />
    </Box>
  );
}
