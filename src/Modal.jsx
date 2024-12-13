import { useState } from "react";
import { ModalComponent } from "./Modalcomponent";

export function XModal() {
  const [openmodal, setopenmodal] = useState(false);
  const handleclick = () => {
    setopenmodal(true);
  };
  const closemodal = () => {
    setopenmodal(false);
  };
  return (
    <div className="modal">
      <h1>User Details Modal</h1>
      <button onClick={handleclick}>Open Form</button>
      {openmodal ? <ModalComponent closemodal={closemodal} /> : null}
    </div>
  );
}
