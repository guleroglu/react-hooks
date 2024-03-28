import { useState } from "react";
import useClickOutside from "./hooks/use-click-outside";
import useColorScheme from "./hooks/use-color-scheme";
import useFocusWithin from "./hooks/use-focus-within";
import useFullScreen from "./hooks/use-full-screen";

function App() {
  const [open, setOpen] = useState(false);

  const colorScheme = useColorScheme();
  const ref = useClickOutside(() => setOpen(false));
  const { ref: ref2, focused } = useFocusWithin();

  const { toggle, ref: fsRef, fullScreen } = useFullScreen();

  return (
    <>
      <div className={fullScreen && "full-screen"} ref={fsRef}>
        <h1>React Hooks</h1>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          {open ? "Kapat" : "Ac"}
        </button>

        <button onClick={toggle}>
          Full Screen {fullScreen ? "Kapat" : "Ac"}
        </button>
      </div>

      <p
        style={{
          background: colorScheme === "dark" ? "#000" : "#eee",
          color: colorScheme === "dark" ? "#fff" : "#333",
        }}
      >
        Color scheme = {colorScheme}
      </p>

      <div className="test" style={{ border: "1px solid red" }} ref={ref2}>
        burasi gozukecek
        <input type="text" />
        {focused ? "focus-within" : "no focus!"}
      </div>

      {open && (
        <div style={{ border: "1px solid red" }} ref={ref}>
          burasi gozukecek
        </div>
      )}
    </>
  );
}

export default App;
