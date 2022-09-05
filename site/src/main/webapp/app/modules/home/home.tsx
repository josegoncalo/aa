import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        <h2>Bem vindo, Site Programação web - Site em construção!</h2>
        <p className="lead">Esta é a página principal</p>
        {account?.login ? (
          <div>
            <Alert color="success">Você está logado como &quot;{account.login}&quot;.</Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              Se deseja
              <span>&nbsp;</span>
              <Link to="/login" className="alert-link">
                entrar
              </Link>
              , utilize as seguintes contas padrões:
              <br />- Administrador (usuário=&quot;admin&quot; and senha=&quot;admin&quot;) <br />- Usuário (usuário=&quot;user&quot; e
              senha=&quot;user&quot;).
            </Alert>
          </div>
        )}

      </Col>
    </Row>
  );
};

export default Home;
