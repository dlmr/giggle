// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from './style.scss';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.loading;
    }

    render() {
        return (
            <div className={styles.main}>
                <Helmet
                  link={[{
                      rel: 'icon', href: '/favicon.png',
                  }]}
                  link={[{
                      rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                  }]}
                />
                <Navbar />
                { this.props.children }
                <Footer />
            </div>
        );
    }
}
