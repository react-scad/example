import { createRoot, Union } from "@react-scad/core";
import { LampArms } from "./components/lamp-arms";
import { LampBase } from "./components/lamp-base";
import { LampShade } from "./components/lamp-shade";
import { LampStand } from "./components/lamp-stand";

export const Lamp = () => (
  <Union>
    <LampBase />
    <LampStand />
    <LampShade />
    <LampArms />
  </Union>
);

const root = createRoot("model.scad");

root.render(<Lamp />);
