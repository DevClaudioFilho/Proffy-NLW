import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
          <header>
            <img 
              src="https://avatars3.githubusercontent.com/u/53623914?s=460&u=dd48ce77830daf259dabbdde3edad231603c5405&v=4" 
              alt=""
            />
            <div>
              <strong>Claudio</strong>
              <span>Vida</span>
            </div>
          </header>
          <p>
            Espezializado em fazer cagadas
            <br/><br/>
            COm mais de 22anos de experiencia na arte de viveer e ensinando a ser foda
          </p>
          <footer>
            Preço/hora
            <strong>R$80,00</strong>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;