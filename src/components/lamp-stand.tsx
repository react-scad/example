import React from "react";
import { Cylinder, Translate } from "@react-scad/core";

export const LampStand = () => (
  <Translate v={[0, 0, 3]}>
    <Cylinder h={50} r1={2} r2={2} />
  </Translate>
);
