import React, { Component } from 'react';
import logo from './assets/logo.jpg';
import txt from './txt.png';
import relatorio from './relatorio.png';
import database_icon from './database_icon.png';
import excel from './assets/excel.jpg';

import Select from '@material-ui/core/Select';
import { DrawerNavegacao } from './navegacao';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import { createBrowserHistory } from 'history';
import { TelaMateus } from './telaMateus.js';
import SaveIcon from '@material-ui/icons/Save';
import { Button, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import DataGrid, { Column, Export, GroupPanel, Selection } from 'devextreme-react/data-grid';
import { Chart, ArgumentAxis, ValueAxis, LineSeries } from '@devexpress/dx-react-chart-material-ui';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pergunta_sim: null,
      pergunta_nao: null,
      base: null,
      contador: 0,
      teste: null
    };
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  fazLogin = () => {
    const history = createBrowserHistory();
    history.replace('/relatorio');
  };

  fazLogin2 = () => {
    const history = createBrowserHistory();
    history.replace('/dados');
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="App">
          <img src={logo} style={{ margin: '20px' }} alt={'teste'} />
          <h1 style={{ margin: '20px', fontWeight: '30px' }}>Bem vindo(a).</h1>

          <h3 style={{ margin: '20px' }}>Ir para : </h3>
          <div>
            <Button
              onClick={e => this.fazLogin()}
              variant="contained"
              color="secondary"
              href="/relatorio"
            >
              <h4>Relatórios</h4>
              <img src={relatorio} style={{ margin: '20px', width: '150%' }} alt={'teste'} />
            </Button>
            <h4>Ou</h4>

            <Button
              variant="contained"
              color="primary"
              onClick={e => this.fazLogin2()}
              href="dados"
            >
              <h4>Dados brutos</h4>
              <img src={database_icon} style={{ margin: '20px' }} alt={'teste'} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
