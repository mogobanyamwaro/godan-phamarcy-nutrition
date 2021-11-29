import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

import logo from './images/logo.jpg';
import { NewsCards, Modal } from './components';
import useStyles from './styles';

function News({ activeArticle, newsArticles, isOpen, setIsOpen }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null}
        <img src={logo} className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Created by
            <a
              className={classes.link}
              href="https://www.linkedin.com/in/douglas-nyamwaro-993517192/"
            >
              {' '}
              Douglas Mogoba
            </a>{' '}
            -
            <a className={classes.link} href="#">
              {' '}
              Faina Tech Company
            </a>
          </Typography>
          <img className={classes.image} src={logo} height="50px" alt=" logo" />
        </div>
      ) : null}
    </div>
  );
}

export default News;
