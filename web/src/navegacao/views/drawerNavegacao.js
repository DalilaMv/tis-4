import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core/';

export const drawerNavegacao = props => {
  const { classes } = props;
  const rotaAtiva = props.location.pathname;
  const rotas = [
    { pathName: '/home', tituloPagina: 'Exportar Dados' },
    { pathName: '/exporta', tituloPagina: 'Exportar Relatórios' },
    { pathName: '/relatorio', tituloPagina: 'Montar Relatórios' }
  ];
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List id="menuNavegacao">
        {rotas.map((rota, index) => (
          <Link
            key={rota.pathName}
            to={rota.pathName}
            className={classes.rota}
            id={rota.pathName.replace('/', '')}
          >
            <ListItem button selected={rotaAtiva === rota.pathName}>
              <ListItemText primary={rota.tituloPagina} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

drawerNavegacao.propTypes = {
  classes: PropTypes.object.isRequired
};

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  rota: {
    textDecoration: 'none'
  }
});

export default withRouter(withStyles(styles)(drawerNavegacao));
