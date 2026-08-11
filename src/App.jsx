import React, { useState } from "react";
import MainContent from "./fundamentals/components/practice/02-multiple-components/MainContent";
import Footer from "./fundamentals/components/practice/02-multiple-components/Footer";
import Header from "./fundamentals/components/practice/02-multiple-components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
