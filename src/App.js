import useLocalStorage from "./useLocalStorage";
import './style.css'

function App() {
  const [name, setName] = useLocalStorage("name", "");
  const handleChange = (e) => setName(e.target.value);
  return (
    <div className="App">
      <input type="text" value={name} onChange={handleChange} />
      <pre>{localStorage.getItem('name')}</pre>
    </div>
  );
}

export default App;
