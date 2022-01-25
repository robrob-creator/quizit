import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import classes from "./singleEasy.module.css";
import image from "../../assets/images/future.gif";
import { PlayCircleOutlined } from "@ant-design/icons";

function Singleplayer() {
  return (
    <div
      class={classes.container}
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
      <div class={classes.center}>
        <Button type="primary" block style={{ margin: 15 }}>
          <Link to="/single-player/easy">Easy</Link>
        </Button>
        <Button type="alert" block style={{ margin: 15 }}>
          <Link to="/single-player/moderate">Moderate</Link>
        </Button>
        <Button type="danger" block style={{ margin: 15 }}>
          <Link to="/single-player/hard">Hard</Link>
        </Button>
      </div>
    </div>
  );
}

export default Singleplayer;
