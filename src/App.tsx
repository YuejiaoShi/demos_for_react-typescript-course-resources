import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>

      <Input id="name" label="Your name" type="text" ref={input} />
      <Input id="age" label="Your age" type="number" />
      <Container element={Button} onClick={() => {}} type="button">
        Clickme
      </Container>
    </main>
  );
}

export default App;
