import React, { Component } from 'react';
import logo from './assets/logo.jpg';

import pdf from './assets/pdf.jpg';

import Select from '@material-ui/core/Select';
import { DrawerNavegacao } from './navegacao';
import MenuItem from '@material-ui/core/MenuItem';

export class TelaExportacoesRelatorios extends Component {
  state = {
    tipoArquivo: '',
    dataArquivo: ''
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleExport = name => event => {
    //this.setState({ 'tipoArquivo']: name });
    //  if (this.state.dataArquivo == '') alert('Selecione o período');
    //  else alert(this.state.tipoArquivo + ' ' + this.state.dataArquivo);
  };

  render() {
    return (
      <div>
        <div className="App">
          <img src={logo} style={{ margin: '20px' }} alt={'teste'} />
          <h3 style={{ margin: '20px' }}>Exportar relatórios do(s) último(s): </h3>
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
            <MenuItem value={0}>Desde o início</MenuItem>
          </Select>
          <h3 style={{ margin: '20px' }}>Exportar em: </h3>
          <img
            src={pdf}
            href
            onClick={this.handleExport('pdf')}
            style={{ margin: '20px' }}
            alt={'teste'}
          />
        </div>
      </div>
    );
  }
}

export default TelaExportacoesRelatorios;
