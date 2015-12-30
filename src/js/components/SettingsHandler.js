import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';
import Firebase from 'firebase';

import Word from './Word';

import styles from '../../css/components/settings.css';

class SettingsHandler extends Component {

  render() {
    const { available, words } = this.props;

    return (
      <div>

        <Tabs>

          <Tab label="Add words">

            <div className={styles.heading}>Available words</div>

            <div ref="available" className={styles.wordGroup}>
              {available.map((id) => {
                return words.find((w) => w.id === id);
              }).sort((a, b) => {
                return a.text > b.text ? 1 : (a.text < b.text ? -1 : 0);
              }).map(function (word) {
                return <Word key={word.id} text={word.text} />;
              })}
            </div>

            <div className={styles.addWords}>
              <TextField floatingLabelText="Add words separated by newlines" multiLine={true} ref="newwords" />
              <IconButton iconClassName="material-icons" tooltip="Save" style={{display: "block"}} onClick={() => {
                this.addWords();
              }}>done</IconButton>
            </div>

          </Tab>

          <Tab label="Your phrases"></Tab>

        </Tabs>

      </div>
    );
  }

  addWords() {
    const firebase = new Firebase('https://reword.firebaseio.com').child('words'),
      { store } = this.context;

    // push words to the store one by one because we need the firebase ID that is created
    // as a result of firebase.push
    this.refs.newwords.getValue().split('\n').filter((word) => {
      // remove empty strings
      return word;
    }).forEach((word) => {
      store.dispatch({
        type: 'ADD_WORD',
        id: firebase.push({text: word}).key(),
        text: word
      });
    });

    // clear TextField
    this.refs.newwords.clearValue();

    // redirect to view phrases page
    this.props.history.push("/");
  }
}

SettingsHandler.contextTypes = {
  store: React.PropTypes.object
};

SettingsHandler.propTypes = {
  settings: PropTypes.object,

  words: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,

  available: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default connect(state => {
  return {
    settings: state.settings,
    words: state.words,
    available: state.creation.available
  };
})(SettingsHandler);