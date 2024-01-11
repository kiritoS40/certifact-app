import "./style.css";

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Certifact Logo" />
        <h1>Certifact</h1>
      </div>

      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
}

export default App;
