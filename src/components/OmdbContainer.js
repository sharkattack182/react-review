import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    API.search("The Matrix")
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err))
  }
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
  
    this.setState({
      [name]: value
    })

  }

  handleFormSubmit = (event) => {
  
    event.preventDefault();

    API.search(this.state.search)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title ? (
                <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
              ) : (
                <h3>No Results to display</h3>
              )}
              
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
