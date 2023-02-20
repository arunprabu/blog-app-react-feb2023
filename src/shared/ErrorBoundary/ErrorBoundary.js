import React, { Component } from 'react'

// it must be class comp
class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  // to catch error 
  static getDerivedStateFromError(error) {
    console.log('Some err occurred');
    console.log(error);
    // update the state from here
    // must return state -- here's it is updated state
    return {
      hasError: true
    }
  }

  // life cyle hook
  // only when a runtime error occurs -- this will be called
  componentDidCatch(error, errorInfo) {
    console.log("Inside componentDidCatch");
    console.log(error); // the error in original source code 
    console.log(errorInfo); // the error in compiled bundle js 
    // this is the right place for you connect with 
    // logRocket kind of third party logging service
  }

  render() {
    // Let's return the fallback UI when error occurs in child comp of ErrorBoundary
    if(this.state.hasError){
      return (
        <div className="alert alert-danger">
          <h2>Some Error Occurred</h2>
          <p>
            Try again after sometime. Contact Admin at admin@example.com if
            issue persists!
          </p>
        </div>
      );
    } else {
      return <div>{this.props.children}</div>;
    }

   
  }
}

export default ErrorBoundary