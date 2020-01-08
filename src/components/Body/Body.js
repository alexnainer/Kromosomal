import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Body.module.css';
import Tree from '../Tree/Tree';

class Body extends Component {
  render() {
    console.log("tree", this.props.tree);
    return (
      <div className={styles.container}>
        {Object.keys(this.props.tree).length > 0 ? <Tree /> :
        <button className={styles.addButton}>Add a Person</button>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tree: state.tree,
});

export default connect(mapStateToProps, null)(Body);
