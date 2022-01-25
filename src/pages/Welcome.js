import { Button } from "antd";
import React from "react";
import image from "../assets/images/chill.gif";
import classes from "./Welcome.module.css";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        minHeight: 490,
        padding: 24,
        backgroundSize: "100%",
        backgroundPositionX: 34,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <div class={classes.container}>
        <div class={classes.center}>
        <Link to="/single-player" style={{ color: "inherit" }}>
          <Button
            icon={<PlayCircleOutlined />}
            className={classes.start}
            type="default"
            style={{ alignItems: "center", justifyContent: "center" }}
            ghost
          >    
              Play
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
