import React from "react";
import { Cylinder, Difference, Translate } from "@react-scad/core";

export const LampShade = () => (
  <Translate v={[0, 0, 53]}>
    <Difference>
      <Cylinder h={20} r1={15} r2={12} />
      <Translate v={[0, 0, -0.1]}>
        <Cylinder h={21} r1={14} r2={11} />
      </Translate>
    </Difference>
  </Translate>
);
