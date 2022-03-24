import React from "react";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import fork from "../../../images/fork.svg";
import PieChart from "./PieChart";

const RepoDetail = ({ repoInfo }) => {
  const { stargazers_count, forks_count, languages_url } = repoInfo || "";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        borderTop: "1px solid",
        borderColor: "#ADBAC7",
      }}
    >
      <Box
        sx={{
          my: 2,
          mx: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "250px",
        }}
      >
        <StarIcon sx={{ fontSize: "3.2rem", color: "#DEBA6F" }} />
        <Typography
          sx={{
            mt: 1,
            px: "6px",
            minWidth: 20,
            fontSize: "12px",
            fontHeight: "12px",
            fontWeight: "400px",
            borderRadius: "2rem",
            textAlign: "center",
            backgroundColor: "#768390",
            color: "#ADBAC7",
          }}
        >
          {stargazers_count}
        </Typography>
      </Box>

      <Box
        sx={{
          my: 2,
          mx: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "250px",
          height: "100px",
        }}
      >
        <PieChart languages_url={languages_url} />
      </Box>

      <Box
        sx={{
          my: 2,
          mx: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "250px",
        }}
      >
        <CardMedia
          sx={{
            width: "48px",
          }}
          image={fork}
          component="img"
        />
        <Typography
          sx={{
            mt: 1,
            px: "6px",
            minWidth: 20,
            fontSize: "12px",
            fontHeight: "12px",
            fontWeight: "400px",
            borderRadius: "2rem",
            textAlign: "center",
            backgroundColor: "#768390",
            color: "#ADBAC7",
          }}
        >
          {forks_count}
        </Typography>
      </Box>
    </Box>
  );
};

export default RepoDetail;
