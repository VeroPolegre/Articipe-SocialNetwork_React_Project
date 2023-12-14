import "./ConfigNav.scss";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/auth/authSlice";

const ConfigNav = ({ visible, onCancel }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toLogout = () => {
    dispatch(logout());

    navigate("/signin");
  };

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
      className="create-post-modal"
    >
      <ul className="ant-modal-header">
        <li onClick={toLogout}>
          <span className="material-symbols-outlined">logout</span>
          <h5 className="light">Logout</h5>
        </li>
        <li>
          <span className="material-symbols-outlined">settings</span>
          <h5 className="light">Settings and privacy</h5>
        </li>
        <li>
          <span className="material-symbols-outlined">bookmark</span>
          <h5 className="light">Saved posts</h5>
        </li>
        <li>
          <span className="material-symbols-outlined">star</span>
          <h5 className="light">Favourites</h5>
        </li>
        <li>
          <span className="material-symbols-outlined">archive</span>
          <h5 className="light">Archive</h5>
        </li>
      </ul>
    </Modal>
  );
};
export default ConfigNav;
