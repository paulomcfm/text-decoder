import React from 'react';
import '../styles/encryptedMsg.css';
import EmptyMessage from '../assets/EmptyMessage.svg';

const EncryptedMsg = ({ message }) => {
  return (
    <div className="message-div">
      {message ?
        <div className="enc-msg-div">
          <div className="enc-message">{message}</div>
          <button className="copy-button" onClick={() => navigator.clipboard.writeText(message)}>Copiar</button>
        </div>
        :
        <div className="empty-message">
          <img src={EmptyMessage} alt="Empty Message" />
          <h4>Nenhuma mensagem encontrada</h4>
          <p>Digite um texto que você deseja criptografar ou descriptografar</p>
        </div>
      }
    </div>
  );
};

export default EncryptedMsg;
