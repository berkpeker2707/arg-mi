import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/userActions";
import PropTypes from "prop-types";
import UserModel from "./UserModel";
import { Button } from "reactstrap";

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.user;
    return (
      <div className="container-mostouter">
        <div className="container-post">
          <div className="container-outer">
            <div className="container-inner">
              <UserModel />

              <table>
                <tr>
                  <th>ID and Username</th>
                </tr>
                <tr>
                  {users.map(({ _id, username }) => (
                    <td>{_id ,username}</td>
                  ))}
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(Users);
