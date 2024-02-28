import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import Home from './home';

function App() {
  return (
    <Home />
  );
}

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
