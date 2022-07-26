import { App } from "./App";
import { createRoot } from 'react-dom/client';
const container = document.getElementById("root");
const root = container && createRoot(container);
root && root.render(<App/>);
