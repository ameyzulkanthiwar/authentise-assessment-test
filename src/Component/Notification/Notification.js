import React from "react";
import { Alert } from "antd";
import "./Notification.css";
function openNotification(props) {
    return (
        <Alert
            message={props.errorMessage}
            showIcon
            closable
            type="error"
            onClose={() => props.onClose()}
        />
    );
}

export default openNotification;
