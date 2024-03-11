import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Interface } from "./components/Interface";

function App() {
  return (
    <>
      <Canvas>
        <ScrollControls pages={5} damping={0.05}>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
