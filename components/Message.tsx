import React, { useState, useEffect } from 'react';
import './Message.css'; 

export default function Message () {
  const [isVisible, setIsVisible] = useState(false);

  const showMessage = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  useEffect(() => {
    // Clean up after the component is unmounted
    return () => clearTimeout(showMessage);
  }, []);

  return (
    <div className={`message-container ${isVisible ? 'visible' : ''}`}>
      <p className="message">완료되었습니다.</p>
    </div>
  );
};

