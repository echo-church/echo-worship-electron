// @flow
import React, { Component } from 'react';
import { ipcRenderer, screen } from 'electron';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  static handleClick() {
    // console.log('this is:', this);
    ipcRenderer.send('open-echo');
  }


  static screens() {
    const displays = screen.getAllDisplays();
    console.log(displays);
  }

  componentDidMount() {
    Home.screens();
  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2><a href="#" onClick={(e) => Home.screens(e)}>ECHO Worship</a></h2>
        <a href="#" onClick={(e) => Home.handleClick(e)}>
          Run ECHO
        </a>
      </div>
    );
  }
}
