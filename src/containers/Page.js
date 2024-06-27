import React, { useState } from 'react';
import Prompt from '../components/Prompt';
import EncryptedMsg from '../components/EncryptedMsg';
import '../styles/page.css';
import Logo from '../assets/Logo.svg';

const Page = () => {
  const [message, setMessage] = useState('');

  const encodeMessage = (text) => {
    let encodedText = text
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
    setMessage(encodedText);
  };

  const decodeMessage = (text) => {
    let decodedText = text
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
    setMessage(decodedText);
  };

  return (
    <div className="page">
      <div className="logo-section">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="prompt-section">
        <Prompt onEncode={encodeMessage} onDecode={decodeMessage} />
      </div>
      <div className="message-section">
        <EncryptedMsg message={message} />
      </div>
    </div>
  );
};

export default Page;
