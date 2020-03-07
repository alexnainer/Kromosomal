import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./AddPersonModal.module.css";
import classNames from "classnames";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

class AddPersonModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Paper className={classNames(styles.paper, styles.content)}>
          <div className={styles.subtitle}>Add A Person</div>
          <div className={styles.textFieldContainer}>
            <InputBase
              className={styles.textField}
              value={this.state.name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
              // onFocus={() => this.setState({ emailError: false })}
              placeholder="Name"
              fullWidth
            />
          </div>
          <Button
            className={styles.button}
            // onClick={this.handleLogin}
            // disabled={this.state.loading}
          >
            <div>Add</div>
          </Button>
        </Paper>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  tree: state.tree
});

export default connect(mapStateToProps, null)(AddPersonModal);
