import React from "react";
import "./App.css";
import { Table } from "./components/Table/table";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Table numberOfColumns={10} numberOfRows={21} />
      </main>
    </div>
  );
}

export default App;
