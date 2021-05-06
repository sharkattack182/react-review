import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends React.Component {

  state = {
    friends: friends
  };


  deleteFriend = (id) => {
    const friends = this.state.friends.filter(friend => friend.id !== id);

    this.setState({ friends })
  }


  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {
          this.state.friends.map(friend => {
            return <FriendCard  name = {friend.name} occupation = {friend.occupation} location ={friend.location} image = {friend.image} id = {friend.id} deleteFriend = {this.deleteFriend}/>
          })
        }
      </Wrapper>
    );
  }
}

export default App;
