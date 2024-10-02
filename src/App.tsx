import "./App.css";
import Button from "./components/shared/Button/Button";
import Category from "./components/shared/Category/Category";
import Dropdown from "./components/shared/Dropdown/Dropdown";
import TextField from "./components/shared/TextField/TextField";

function App() {
  return (
    <>
      Привет мир
      <Button>Button</Button>
      <Category>Name</Category>
      <TextField heading="Heading" placeholder="Information" id="info" />
      <Dropdown>asdasd</Dropdown>
    </>
  );
}

export default App;
