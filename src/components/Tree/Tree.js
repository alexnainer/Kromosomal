import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tree from 'react-d3-tree';
// import styles from './Body.module.css';
// import Tree from '../Tree/Tree';

class Body extends Component {
  render() {
    return (
      <div>
        <Tree 
          data={this.props.tree}
          orientation='vertical'
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tree: state.tree,
});

export default connect(mapStateToProps, null)(Body);
