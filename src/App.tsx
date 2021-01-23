import React from "react";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Buttons
      </h1>
      <br />
      <div className="display-box_container">
        <div className="display-box">
          <pre>{`<Button />`}</pre>
          <Button>Hello World</Button>
        </div>
        <div className="display-box">
          <pre>{`<Button variant=”outline” />`}</pre>
          <Button variant="outline">Hello World</Button>
        </div>
        <div className="display-box">
          <pre>{`<Button variant=”text” />`}</pre>
          <Button variant="text">Hello World</Button>
        </div>
      </div>
      <div className="display-box_container">
        <div className="display-box">
          <pre>{`<Button disableShadow />`}</pre>
          <Button disableShadow>Hello World</Button>
        </div>
        <div className="display-box">
          <pre>{`<Button disabled />`}</pre>
          <Button disabled>Hello World</Button>
        </div>
      </div>
      <div className="display-box_container">
        <div className="display-box">
          <pre>{`<Button startIcon=”local_grocery_store” />`}</pre>
          <Button startIcon="local_grocery_store">Hello World</Button>
        </div>
        <div className="display-box">
          <pre>{`<Button endIcon=”local_grocery_store” />`}</pre>
          <Button endIcon="local_grocery_store">Hello World</Button>
        </div>
      </div>
      <div className="display-box_container">
        <div className="display-box">
          <pre>{`<Button size="sm" />`}</pre>
          <Button size="sm">Hello World</Button>
        </div>
        <div className="display-box">
          <pre>{`<Button size="md" />`}</pre>
          <Button size="md">Hello World</Button>
        </div>
        <div className="display-box">
          <pre>{`<Button size="lg" />`}</pre>
          <Button size="lg">Hello World</Button>
        </div>
      </div>
      <div className="display-box_container">
        <div className="display-box">
          <pre>{`<Button color="primary" />`}</pre>
          <Button color="primary">Hello World</Button>
        </div>
        <div className="display-box">
          <pre>{`<Button color="secondary" />`}</pre>
          <Button color="secondary">Hello World</Button>
        </div>
        <div className="display-box">
          <pre>{`<Button color="danger" />`}</pre>
          <Button color="danger">Hello World</Button>
        </div>
      </div>
      <footer>Nikolay Rademacher</footer>
    </>
  );
}

export default App;
