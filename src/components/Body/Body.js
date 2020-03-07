import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Body.module.css";
import Tree from "../Tree/Tree";
import AddPersonModal from "../AddPersonModal/AddPersonModal";
import Button from "@material-ui/core/Button";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AddPersonModal: false
    };
  }
  render() {
    console.log("tree", this.props.tree);
    return (
      <div className={styles.container}>
        <AddPersonModal open={this.state.showAddPersonModal} onClose={() => this.setState({ showAddPersonModal: false})}/>
        {Object.keys(this.props.tree).length > 0 ? (
          <Tree />
        ) : (
          <Button
            className={styles.addButton}
            onClick={() => this.setState({ showAddPersonModal: true })}
          >
            Add a Person
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tree: state.tree
});

export default connect(mapStateToProps, null)(Body);
