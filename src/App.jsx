import { useState } from "react";
import "./App.css";
import useClickOutside from "./hooks/use-click-outside";
import useColorScheme from "./hooks/use-color-scheme";

function App() {
  const [open, setOpen] = useState(false);

  const colorScheme = useColorScheme();
  const ref = useClickOutside(() => setOpen(false));

  return (
    <>
      <div id="test">
        <h1>React Hooks!</h1>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          {open ? "Kapat" : "Ac"}
        </button>
      </div>

      <p
        style={{
          background: colorScheme === "dark" ? "#000" : "#eee",
          color: colorScheme === "dark" ? "#fff" : "#333",
        }}
      >
        Color Scheme = {colorScheme}
      </p>

      {open && (
        <div style={{ border: "1px solid red" }} ref={ref}>
          Burası gözüküyor
          <button>test</button>
        </div>
      )}
    </>
  );
}

export default App;