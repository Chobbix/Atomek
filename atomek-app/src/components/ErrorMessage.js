import React from "react";

const ErrorMessage = (props) => {
    const { message } = props;

    return (
        <p style={{color: 'tomato'}}>{message}</p>
    );
};

export default ErrorMessage;