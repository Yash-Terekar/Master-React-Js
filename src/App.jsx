import React, { useState } from "react";
import Header from "./fundamentals/components/practice/02-multiple-components/Header";
import MainContent from "./fundamentals/components/practice/02-multiple-components/MainContent";
import Footer from "./fundamentals/components/practice/02-multiple-components/Footer";

const App = () => {
  return (
    <div style={{ margin: "0", padding: "0" }}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
