import { Box, Typography } from "@mui/material";

interface IntroducirRemuneracionProps {
  context: any;
  title: string;
  dispatchType: string;
  stateName: string;
}

export const IntroducirFecha: React.FC<IntroducirRemuneracionProps> = ({
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
        type="date"
        onChange={(e) =>
          dispatch({
            type: dispatchType,
            payload: {
              ...state,

              [stateName]: new Date(e.target.value),
            },
          })
        }
        style={{
          border: "1px solid white",
          borderRadius: "5px",
          padding: "5px",
          backgroundColor: "#f5f5f5",
        }}
      />
    </Box>
  );
};
