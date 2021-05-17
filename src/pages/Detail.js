import React, { Component } from "react";
import { Navbar, Form, FormControl, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { restoList, selectResto } from "../redux/actions/resto.action";

class Detail extends Component {
  state = {
    search: "",
    loading: false,
    message: "",
  };
  componentDidMount() {
    const { search } = this.props.match.params;
    this.props.selectResto();
    this.props.restoList(search);
  }
  render() {
    const { data } = this.props.resto;
    return (
      <div>
        <p>{data.name}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  resto: state.resto,
});

const mapDispatchToProps = { restoList, selectResto };

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
