import React, { Component } from "react";
import { Navbar, Form, FormControl, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { restoList, selectResto } from "../redux/actions/resto.action";

class Home extends Component {
  state = {
    search: "",
    loading: false,
    message: "",
  };
  componentDidMount() {
    this.props.restoList();
  }
  search = async (event) => {
    this.setState({ loading: true, [event.target.name]: event.target.value });
    await this.props.restoList(event.target.value);
    this.setState({ loading: false });
  };
  render() {
    const { data } = this.props.resto;
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Form inline className="ml-auto">
            <FormControl
              name="search"
              onChange={(event) => this.search(event)}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Form>
        </Navbar>
        {this.state.loading ? (
          <Spinner animation="grow" variant="dark" />
        ) : data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <Link to={`/detail/${item.name}`}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        ) : (
          <p>no data</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  resto: state.resto,
});

const mapDispatchToProps = { restoList, selectResto };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
