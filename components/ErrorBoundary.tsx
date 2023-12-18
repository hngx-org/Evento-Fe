import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

class ErrorBoundary extends React.Component {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    // Define a state variable to track whether is an error or not
    this.state = { hasError: false } as { hasError: boolean };
  }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render() {
    // Check if the error is thrown
    if ((this.state as any)?.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          {/* This can be customized to fit the theme style */}
          <div className="w-full h-screen flex flex-col items-center justify-center">
            <FaExclamationTriangle className="text-red-200 text-4xl mb-2" />
            <h2 className="text-white text-xl mb-4">Oops, there is an error!</h2>
            <button
              type="button"
              onClick={() => {
                window && window.location.reload();
              }}
              className="w-auto px-5 py-3 rounded-md flex items-center justify-center text-center bg-dark-100 text-white ppR text-sm"
            >
              Try again?
            </button>
          </div>
        </>
      );
    }

    // Return children components in case of no error
    return (this.props as any).children;
  }
}

export default ErrorBoundary;
