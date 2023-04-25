import "./App.css";

const boobData = [
  {
    nameFirst: "Amber",
    nameLast: "Bullshittery",
    imageUrl:
      "https://images.unsplash.com/photo-1578910555658-62541451bace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    nameFirst: "Dolton",
    nameLast: "Smith",
    imageUrl:
      "https://images.unsplash.com/photo-1631242362679-d1d4d2d52af1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
  },
];

function App() {
  const boobImages = boobData.map((b) => (
    <div className="bitch">
      <h2>
        {b.nameFirst} {b.nameLast}
      </h2>
      <img src={b.imageUrl} alt={`${b.nameFirst} ${b.nameLast}`} />
    </div>
  ));
  return (
    <main>
      <h1>Photography Bullshittery!!!!</h1>
      {boobImages}
    </main>
  );
}

export default App;
