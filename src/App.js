import "./style.css";

function App() {
  const appTitle = "Certifact";

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68" width="68" alt="Certifact Logo" />
          <h1>{appTitle}</h1>
        </div>

        <button className="btn btn-large btn-open">Share a fact</button>
      </header>

      <NewFactForm />
      <main class="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  return <aside>Category Filter</aside>;
}

function FactList() {
  return <section>Facts List</section>;
}

export default App;
