import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width:"60%",
  height:"30%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "20px",
  zIndex: 1000,
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
};

const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  buttom: 0,
  width:"100%",
  height:"100%",
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,

};
const optionBox={
    display:"flex",
    justifyContent:"space-between",
    
}
const notes = {fontStyle:"italic",
color:"grey",
}
const Modal = ({ survey, open, onClose,onDelete }) => {
  const { title } = survey;
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <div>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLE}>
        <h5>Are you sure you want to delete the survey?</h5>
        <h6 style={{fontWeight:"bold"}}>{title}</h6>
        <p style={notes}>*survey cannot be recovered</p>
        <div style={optionBox}>
        <button className="waves-effect waves-light orange btn" onClick={onClose}>No</button>
        <button className="waves-effect waves-light red btn" onClick={onDelete}>Yes</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
