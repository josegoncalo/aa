import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content">
    <div className="footer__social">
        <a href="">
          Instagran
        </a>
        <a href="">
          Facebook
        </a>
      </div>
      <p className="footer__copyright">Engenharia de Software - Progrmação Web</p>
  </div>
);

export default Footer;
