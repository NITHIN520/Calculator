import React,{Component} from "react";
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true};
    }
    componentDidCatch(error, Info) {
        console.log("Error Caught by Error Boundary:", Info);
        this.setState({ errorMessage: error.toString() });
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong: {this.state.errorMessage}</h1>;
        }
        return this.props.children; 
    }
}
export default ErrorBoundary;