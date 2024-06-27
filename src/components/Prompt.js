import React, { useState } from 'react';
import '../styles/prompt.css';
import ExclamationCircle from '../assets/ExclamationCircle.svg';

const Prompt = ({ onEncode, onDecode }) => {
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hasMessage, setHasMessage] = useState(false); 
  const errorMsg = "Há letras maiúsculas, com acento ou não há letras.";

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const decodeButtonClass = hasMessage ? "decode-button decode-button-with-message" : "decode-button";

  const validateText = (text) => {
    const trimmedText = text.trim(); 
    const regex = /^[^A-ZÁÉÍÓÚÀÈÌÒÙÄËÏÖÜÂÊÎÔÛãõ]*[a-z]+[^A-ZÁÉÍÓÚÀÈÌÒÙÄËÏÖÜÂÊÎÔÛãõ]*$/;
    return regex.test(trimmedText);
  };

  const handleEncode = () => {
    if (validateText(text)) {
      setErrorMessage('');
      onEncode(text);
      setHasMessage(true); 
    } else {
      setErrorMessage(errorMsg);
    }
  };

  const handleDecode = () => {
    if (validateText(text)) {
      setErrorMessage('');
      onDecode(text);
      setHasMessage(false);
    } else {
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="prompt">
      <textarea className="prompt-message" value={text} onChange={handleChange} placeholder="Digite seu texto" />
      <div className="warning-message">
        <img src={ExclamationCircle} alt="Exclamation Circle" className="exclamation-circle" />
        <p>Apenas letras minúsculas e sem acento.</p>
      </div>
      <div className="enc-dec-buttons">
        <button className="encode-button" onClick={handleEncode}>Criptografar</button>
        <button className={decodeButtonClass} onClick={handleDecode}>Descriptografar</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Prompt;