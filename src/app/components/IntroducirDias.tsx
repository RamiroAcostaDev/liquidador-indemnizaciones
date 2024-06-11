import { Box, Typography } from "@mui/material";

interface IntroducirDiasProps {
  context: any;
  title: string;
  dispatchType: string;
  stateName: string;
}

export const IntroducirDias: React.FC<IntroducirDiasProps> = ({
  context,
  title,
  dispatchType,
  stateName,
}) => {
  const { dispatch, ...state } = context;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={1}
      p={2}
      bgcolor={"#424769"}
      borderRadius={5}
    >
      <Typography variant="body2" color="white">
        {title}
      </Typography>
      <input
        type="number"
        max={7}
        min={1}
        onChange={(e) =>
          dispatch({
            type: dispatchType,
            payload: {
              ...state,
              [stateName]: Number(e.target.value),
            },
          })
        }
        style={{ border: "1px solid black", borderRadius: "5px" }}
      />
    </Box>
  );
};
