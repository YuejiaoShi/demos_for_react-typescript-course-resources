import { useRef } from "react";
import Button from "./components/Button";
// import Container from "./components/Container";
import Input from "./components/Input";
import Form from "./components/Form";

function App() {
  const custonForm = useRef(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    custonForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input id="name" label="Your name" type="text" />
        <Input id="age" label="Your age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
