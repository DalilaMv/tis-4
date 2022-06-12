import React, { Component } from 'react';
import logo from './assets/logo.jpg';
import { Button, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { createBrowserHistory } from 'history';
import { Home } from './home.js';
import { Delete, Edit, Link } from '@material-ui/icons';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
let total = 0;
const pergunta_sim = [];
const pergunta_nao = [];

const estados = [
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RO',
  'RS',
  'RR',
  'SC',
  'SE',
  'SP',
  'TO'
];
const contagemPorEstados = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];

function respostas(sim, nao, i) {
  pergunta_sim[i] = sim;
  pergunta_nao[i] = nao;
}

function contaEstados(contagem, i) {
  contagemPorEstados[i] = contagem;
  console.log(estados[i] + ' Ccntagem: ' + contagemPorEstados[i]);
}

export class TelaLogin extends Component {
  state = {
    login: '',
    senha: '',
    showPassword: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  fazLogin = async () => {

      const history = createBrowserHistory();
      this.props.teste.login_email(this.state.login, this.state.senha);
      const user =  this.props.teste.getUser();

      if (user != null) {
        history.replace('/home');
        window.location.reload();
      }
      else alert('Usuário e/ou senha incorreto(s)!!!');


  };

  render() {
    console.log(this.props.teste);
    return (
      <div className="App">
        <h1 style={{ margin: '20px' }}>Bem Vindo(a)!</h1>
        <img src={logo} style={{ margin: '20px' }} alt={'logo'} />
        <form onSubmit="return false;">
          <div>
            <TextField
              id="standard-name"
              label="Login"
              margin="normal"
              value={this.state.login}
              onChange={this.handleChange('login')}
              style={{ width: 300, margin: '20px' }}
            />
          </div>
          <div>
            <TextField
              id="standard-password-input"
              label="Senha"
              type={this.state.showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              margin="normal"
              value={this.state.senha}
              onChange={this.handleChange('senha')}
              style={{ width: 300, margin: '20px' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: '20px', width: 200, height: 50 }}
            //onClick={e => console.log(this.state)}
            onClick={e => this.fazLogin()}
            //href="/home"
          >
            Entrar
          </Button>
        </form>
      </div>
    );
  }
}

export default TelaLogin;
