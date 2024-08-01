import { useRef } from "react";
import Button from "./components/Button";
// import Container from "./components/Container";
import Input from "./components/Input";
import Form from "./components/Form";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Form>
        <Input id="name" label="Your name" type="text" ref={input} />
        <Input id="age" label="Your age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
