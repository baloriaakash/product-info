import React from "react";
export class Userclass extends React.Component {
  constructor(props) {
    console.log("called");
    super(props);
    this.state = {
      count: 0,
    };

    this.state = { userdata: {} };
  }
  componentDidMount() {
    this.fetchdata();
  }

  async fetchdata() {
    const data = await fetch("https://api.github.com/users/baloriaakash");
    const responsedata = await data.json();
    console.log(responsedata);
    this.setState({ userdata: responsedata });
  }

  render() {
    // const { name, destination } = this.props;
    const { userdata } = this.state;
    const {
      login,
      name,
      avatar_url,
      bio,
      public_repos,
      followers,
      following,
      html_url,
    } = userdata;

    return (
      <>
        {/* <h1>welcome {name}</h1>
        <p>show {destination}</p> */}
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          click
        </button>
        <p>{login}</p>
        <img src={avatar_url}></img>
        <p>{public_repos}</p>
      </>
    );
  }
}
