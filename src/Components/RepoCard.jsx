import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ToggleButton from "@mui/material/ToggleButton";
import language_match from "../json/language_match.json";
import fork from "../images/fork.png";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";

const liStyled = {
  display: "flex",
  width: "100%",
  borderTop: "1px solid #444c56",
  alignItems: "center",
  justifyContent: "space-between",
};

const RepoCard = ({ repo, i }) => {
  const [loved, setLoved] = useState(false);
  let language_color = "red";
  let status_color = "#9CD08F";
  const {
    name,
    description,
    visibility,
    language,
    forks,
    pushed_at,
    stargazers_count,
    watchers_count,
  } = repo;
  const timeObj = new Date(pushed_at);
  const timeStr = timeObj.toDateString().split(" ");

  for (const item in language_match) {
    if (item === language) {
      language_color = language_match[item].color;
      break;
    } else {
      language_color = "#768390";
    }
  }

  return (
    <li style={liStyled}>
      <Box
        sx={{
          p: 3,
        }}
      >
        <Typography
          sx={{
            color: "red",
          }}
        >
          {i}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              fontSize: 22,
              color: "#6EA4BF",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: 1,
              ml: 1,
              mr: 1,
              p: "0 7px",
              color: `${status_color}`,
              border: `1px solid ${status_color}`,
              borderRadius: "2rem",
            }}
          >
            {visibility.match("^[a-z]")
              ? visibility.charAt(0).toUpperCase() + visibility.substring(1)
              : visibility}
          </Typography>

          <Tooltip
            title={`update on ${timeStr[2]} ${timeStr[1]} ${timeStr[3]}`}
            placement="top"
          >
            <InfoIcon
              sx={{
                color: "#768390",
                width: "15px",
                height: "15px",
              }}
            />
          </Tooltip>
        </Box>

        <Box sx={{ mb: 1, maxWidth: "400px" }}>
          <Typography sx={{ color: "#768390", fontSize: "10px" }}>
            {description}
          </Typography>
        </Box>

        <Box
          sx={{
            fontSize: 1,
            color: "#768390",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: `${language_color}`,
              mr: "4px",
              mt: "1px",
            }}
          ></Box>
          {language || "-"}

          <CardMedia
            sx={{
              ml: 2,
              mr: 0.5,
              width: "18px",
              height: "18px",
            }}
            image={fork}
            component="img"
          />
          {forks}

          <StarBorderIcon
            sx={{
              ml: 2,
              mr: 0.5,
              width: "18px",
              height: "18px",
              color: "#768390",
            }}
          />
          {stargazers_count}

          <VisibilityIcon
            sx={{
              ml: 2,
              mr: 0.5,
              width: "18px",
              height: "18px",
              color: "#768390",
            }}
          />
          {watchers_count}
        </Box>
      </Box>
      <ToggleButton
        sx={{
          mx: 2,
          backgroundColor: "#373E47",
          color: "#ADBAC7",
          height: "35px",
          borderRadius: 3,
        }}
        value="check"
        selected={loved}
        onChange={() => {
          setLoved(!loved);
        }}
      >
        <FavoriteIcon sx={{ fontSize: "18px" }} className="favorite" />
        <Typography sx={{ mx: 1, fontSize: "13px" }}>
          {loved ? "Loved" : "Love"}
        </Typography>
      </ToggleButton>
    </li>
  );
};

export default RepoCard;
