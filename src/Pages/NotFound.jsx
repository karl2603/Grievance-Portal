import React from 'react';

export default function NotFound() {
  return (
    <div className="container">
      {/* Normal CSS Styles */}
      <style>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          background-color: #f8f9fa;
          color: #212529;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          padding: 20px;
        }

        .error-code {
          font-size: 6rem;
          font-weight: 700;
          margin: 0;
          color: #343a40;
          line-height: 1;
        }

        .title {
          font-size: 1.5rem;
          font-weight: 400;
          margin: 10px 0 20px 0;
        }

        .description {
          color: #6c757d;
          margin-bottom: 30px;
          max-width: 400px;
          line-height: 1.5;
        }
      `}</style>

      <h1 className="error-code">404</h1>
      <h2 className="title">Page not found</h2>
      <p className="description">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
    </div>
  );
}