import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { Component } from 'react';
import './App.css';
import { TelaLogin } from './telaLogin.js';
import { TelaExportacoes } from './telaExportacoes.js';
import { TelaExportacoesRelatorios } from './telaExportacoesRelatorios.js';
import { TelaRelatorios } from './telaRelatorios.js';
import { TelaMateus } from './telaMateus.js';
import { Home } from './home.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirebaseService from './firebaseService/firebaseServirce';
import { FireSQL } from 'firesql';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pergunta_sim: null,
      pergunta_nao: null,
      base: null,
      contador: 0,
      teste: null,
      firebase: null,
      contagemPorEstados: [
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
      ]
    };
  }

  geraTotal(fireSQL) {
    let beste = [];
    let total = 0;
    fireSQL.query('SELECT * FROM usuario ').then(documents => {
      documents.forEach(doc => {
        total++;
        beste.push(doc);
      });
      this.setState({
        contador: total,
        teste: beste
      });
    });
  }

  geraTotalPorEstado(fireSQL) {
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
    let auxArray = {
      AC: 0,
      AL: 0,
      AM: 0,
      AP: 0,
      BA: 0,
      CE: 0,
      DF: 0,
      ES: 0,
      GO: 0,
      MA: 0,
      MT: 0,
      MS: 0,
      MG: 0,
      PA: 0,
      PB: 0,
      PR: 0,
      PE: 0,
      PI: 0,
      RJ: 0,
      RN: 0,
      RO: 0,
      RS: 0,
      RR: 0,
      SC: 0,
      SE: 0,
      SP: 0,
      TO: 0
    };
    for (let i = 0; i < 27; i++) {
      let aux = 0;
      fireSQL.query('SELECT * FROM usuario WHERE estado ="' + estados[i] + '"').then(documents => {
        documents.forEach(doc => {
          aux++;
        });
        auxArray[estados[i]] = aux;

        if (i === 26) {
          this.setState({ contagemPorEstados: auxArray });
        }
      });
    }
  }

  geraTotalSimNao(fireSQL) {
    let respostasSim = [];
    let respostasNao = [];
    let sim = 0;
    let nao = 0;
    for (let i = 0; i < 6; i++) {
      fireSQL
        .query('SELECT * FROM usuario WHERE pergunta_' + (i + 1) + '="sim"')
        .then(documents => {
          documents.forEach(doc => {
            sim++;
          });
          //console.log(sim);
          nao = this.state.contador - sim;
          respostasSim[i] = sim;
          respostasNao[i] = nao;
          sim = 0;
          nao = 0;
          if (i === 5) {
            this.setState({
              pergunta_sim: respostasSim,
              pergunta_nao: respostasNao
            });
          }
        });
    }
  }

  async componentDidMount() {
    const fb = new FirebaseService();
    const dbRef = fb.db;
    const fireSQL = new FireSQL(dbRef);
    this.setState({
      firebase: fb
    });
    await this.geraTotal(fireSQL);
    await this.geraTotalPorEstado(fireSQL);
    await this.geraTotalSimNao(fireSQL);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <TelaLogin teste={this.state.firebase} />} />
          <Route id="home" exact path="/home" render={() => <Home />} />
          <Route
            id="relatorio"
            exact
            path="/relatorio"
            render={() => (
              <TelaExportacoes
                pergunta_sim={this.state.pergunta_sim}
                pergunta_nao={this.state.pergunta_nao}
                estados={this.state.contagemPorEstados}
              />
            )}
          />
          <Route id="exporta" exact path="/exporta" render={() => <TelaExportacoesRelatorios />} />
          <Route
            id="dados"
            exact
            path="/dados"
            render={() => (
              <TelaMateus
                teste={this.state.contador}
                beste={this.state.teste}
                pergunta_sim={this.state.pergunta_sim}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
