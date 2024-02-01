import Counter from "./components/Counter";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div className="">
        <h2>COUNTER APP</h2>
        <div className="">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default App;
