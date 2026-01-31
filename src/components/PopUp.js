import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PopupMessage = ({ message, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        if (typeof onClose === 'function') {
          onClose();
        }
      }, 300);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`popup-message ${show ? 'show' : ''}`}>
      <p>{message}</p>
    </div>
  );
};

PopupMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

export default PopupMessage;