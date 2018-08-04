import React, { Component } from 'react';
import * as actions from './actions';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount(){
    this.props.fetchExample();
  }

  render() {
    console.log(this.props);
    if(this.props.example == undefined){
      return <div>Loading...</div>
    }
    return (
      <div>
        {this.props.example.text}
      </div>
    );
  }
}

function mapStateToProps({ example }){
  return { example }
}

export default connect(mapStateToProps, actions)(App);
