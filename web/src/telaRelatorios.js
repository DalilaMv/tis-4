import React, { Component } from 'react';
import logo from './assets/logo.jpg';

import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Select from '@material-ui/core/Select';
import { DrawerNavegacao } from './navegacao';
import MenuItem from '@material-ui/core/MenuItem';

export class TelaRelatorios extends Component {
  state = {
    tipoArquivo: '',
    dataArquivo: ''
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleMonta = () => {
    if (this.state.dataArquivo === '') alert('Selecione o período');
    else alert('Montar relatório dos últimos ' + this.state.dataArquivo + ' dias');
  };

  render() {
    return (
      <div>
        <div className="App">
          <img src={logo} style={{ margin: '20px' }} alt={'teste'} />
          <h3 style={{ margin: '20px' }}>Montar relatórios do(s) último(s): </h3>
          <Select
            style={{ width: 300, margin: '20px' }}
            value={this.state.dataArquivo}
            onChange={this.handleChange('dataArquivo')}
            inputProps={{
              dataArquivo: 'dataArquivo'
            }}
          >
            <MenuItem value={1}>1 Dia</MenuItem>
            <MenuItem value={3}>3 Dias</MenuItem>
            <MenuItem value={30}>1 Mes</MenuItem>
            <MenuItem value={90}>3 Meses</MenuItem>
            <MenuItem value={100}>Desde o início</MenuItem>
          </Select>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: '20px', width: 200, height: 50 }}
            onClick={e => this.handleMonta()}
          >
            Exportar em pdf
          </Button>
        </div>
      </div>
    );
  }
}

export default TelaRelatorios;
