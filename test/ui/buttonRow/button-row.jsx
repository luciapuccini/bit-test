
import { Button } from "@my-scope/test/ui.button";

const ButtonRow = () => (
  <div
    style={{ display: "flex", justifyContent: "space-between", width: "80px" }}
  >
    <Button text="button1" />
    <Button text="button2" />
  </div>
);

export default ButtonRow;
