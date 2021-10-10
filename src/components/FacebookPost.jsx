import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function FacebookPost({ title, timeAgo, profilePic, postPic ,content}) {
  return (
    <Card sx={{ maxWidth: 500, m: 2 }}>
      <CardHeader
        avatar={
          <Avatar
            alt=""
            src={
              profilePic
                ? profilePic
                : "https://images.unsplash.com/photo-1618160083098-6196f5349b62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            }
          />
        }
        title={title ? title : "Ted"}
        timeAgo={timeAgo ? timeAgo : "4 hours ago"}
      />
      {
        <CardMedia
          component="img"
          height="140"
          image={
            postPic
              ? postPic
              : "https://images.unsplash.com/photo-1550041531-e84975c43ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=867&q=80"
          }
          alt="..............."
        />
      }

      <CardContent>
        {
          <Typography variant="body2" color="text.secondary" component="p">
            {
              content?content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          </Typography>
        }
      </CardContent>
    </Card>
  );
}
export default FacebookPost;
