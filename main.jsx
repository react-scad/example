import React from "react";
import { createRoot, Cube, Sphere, Union } from "@react-scad/core";

const root = createRoot("model.scad");

root.render(
  <Union>
    <Cube size={[10, 10, 10]} center />
    <Sphere r={6} />
  </Union>
);
