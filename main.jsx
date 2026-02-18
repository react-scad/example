import React from "react";
import {
  createRoot,
  Cylinder,
  Difference,
  Raw,
  Rotate,
  Translate,
  Union,
} from "@react-scad/core";

export const Lamp = () => {
  return (
    <Union>
      {/* Base on the ground */}
      <Cylinder h={3} r1={7} r2={6} />

      {/* Stand */}
      <Translate v={[0, 0, 3]}>
        <Cylinder h={50} r1={2} r2={2} />
      </Translate>

      {/* Shade on top */}
      <Translate v={[0, 0, 53]}>
        <Difference>
          <Cylinder h={20} r1={15} r2={12} />
          <Translate v={[0, 0, -0.1]}>
            <Cylinder h={21} r1={14} r2={11} />
          </Translate>
        </Difference>
      </Translate>

      {/* Arms at shade base */}
      {[0, 120, 240].map((k) => (
        <Translate key={k} v={[0, 0, 53.5]}>
          <Rotate a={[90, 0, k]}>
            <Cylinder h={12} r1={0.5} r2={0.5} />
          </Rotate>
        </Translate>
      ))}
    </Union>
  );
};

const root = createRoot("model.scad");

root.render(
  <>
    <Raw code="$fa = 2; $fs = 0.2;" />
    <Lamp />
  </>
);
