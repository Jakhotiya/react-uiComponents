import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  render() {

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className='container'>
          <h1>Hey there,Looks like you caught us before we are ready!!</h1>
          <h4>Thank you for showing interest in Productive. If you would like
            us to notify you when we are all set, leave your email below.
          </h4>
          <div className="admin__field">
            <label className="admin__field-label">
              <span>Email</span>
            </label>
            <div className="admin__field-control admin__control-fields">
              <input style={{width:'60%'}} className="admin__control-text" name='email' type='email'/>
            </div>
            <br/>
            <button className='btn primary'>Notify me</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;