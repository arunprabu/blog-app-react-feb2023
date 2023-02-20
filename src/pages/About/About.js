// class component
import { Component } from "react";
import ErrorBoundary from "../../shared/ErrorBoundary/ErrorBoundary";
import Calculator from "./Calculator/Calculator";

class About extends Component {
  constructor() {
    // optional to have constructor
    super();
    console.log("======1. Inside Constructor======");
    // ideal place for you initial comp-wide data
    this.state = {
      isLoading: true,
      isError: false,
      featureName: "",
    };
  }

  // lifecycle hook
  componentDidMount() {
    // this method will be executed ONLY ONE after initial render
    // this method will be called when the component's UI comes into the view
    // ideal place for you to send rest api calls
    console.log("======3. Inside componentDidMount=======");
    // you can update the state here
    // this.state.isLoading = false; // Do not mutate state directly. Use setState().
    // mocking the api call with the timeout
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isError: false,
        featureName: "Life Cycle Hook!",
      });
      // upon getting error
      // this.setState({
      //   isLoading: false,
      //   isError: true
      // });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // when the state is update -- this will be be called
    // it must return either true or false
    // compare the prevState (this.state) and the new state (nextState)
    // if changes found, then return true else return false
    console.log("===== 4. Inside shouldComponentUpdate======");
    // console.log(nextProps);
    console.log(this.state); // prevState
    console.log(nextState); // new state
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // called immediately after the UPDATE in JSX (re-rendering)
    // NOT CALLED AFTER INITIAL RENDERING
    console.log("======6. Inside componentDidUpdate======");
    console.log(prevProps);
    console.log(prevState);
    // You may call setState() immediately in componentDidUpdate() but...
    // note that it must be wrapped in a condition.
    // otherwise it will become an infinite loop
    //  this.setState({
    //    isLoading: false,
    //    isError: false,
    //    featureName: "Life Cycle Hook!",
    //  });
  }

  componentWillUnmount(){
    // whenever this comp is going out of the view -- this will be called
    // ideal place for you to clearInterval, clearTimeout
    // ideal place for you to clear the data also
    console.log("====== Inside componentWillUnmount ======");
  }

  render() {
    console.log("======2. & 5. Inside Render======");

    if (this.state.isLoading) {
      return <div className="spinner-border text-success"></div>;
    }

    if (this.state.isError) {
      return (
        <div className="alert alert-danger">
          Unable to Fetch data! Try later!
        </div>
      );
    }

    return (
      <div>
        <h1>About {this.state.featureName}</h1>
        <ErrorBoundary>
          <Calculator/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default About;
