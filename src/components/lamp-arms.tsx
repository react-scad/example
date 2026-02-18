import { Cylinder, Rotate, Translate } from "@react-scad/core";

export const LampArms = () => (
  <>
    {[0, 120, 240].map((k) => (
      <Translate key={k} v={[0, 0, 53.5]}>
        <Rotate a={[90, 0, k]}>
          <Cylinder h={12} r1={0.5} r2={0.5} />
        </Rotate>
      </Translate>
    ))}
  </>
);
