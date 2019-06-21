import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    clickedItems: {}
  };

  handleClick = (event, name) => {
    event.preventDefault()
    console.log(this.state.clickedItems);
    if (name in this.state.clickedItems) {
      console.log("test");
      this.setState({
        score: 0
      })
    } else {
      let newScore = this.state.score
      newScore++
      let newClickedItems = this.state.clickedItems
      newClickedItems[name] = true;
      this.setState({
        score: newScore,
        clickedItems: newClickedItems
      })
    }
    const array = this.state.friends;
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    this.setState({ friends: shuffledArray })
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score}>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          // occupation={friend.occupation}
          // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
