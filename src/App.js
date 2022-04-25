import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import Info from "./components/Info/Info";
import gentlemenList from "./gentlemenList";

function App() {
  const image = "./img/bertin.jpg";
  // const [gentlemen, setGentlemen] = useState(gentlemenList);

  // const checkAll = () => {};

  // // const printGentlemen = (gentlemen) => {
  // //   gentlemen.forEach(gentleman => {
  // //     <Gentleman gentleman={gentleman}/>
  // //   });
  // // }

  // const selectGentleman = () => {
  //   setGentlemen(gentlemen)
  // }

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentleman</h1>
      </header>
      <section className="controls">
        <Info />
        <Button text="Mostrar todos" /*action={checkAll}*/ />
      </section>
      <main className="main">
        <ul className="gentlemen">
          <Gentleman gentleman={gentlemenList[0]} image={image} />
        </ul>
      </main>
    </div>
  );
}

export default App;
