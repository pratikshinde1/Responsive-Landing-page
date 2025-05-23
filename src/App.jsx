import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import TodoApp from "./Pages/TodoApp";
 

const App = () => (
  <div className="relative min-h-screen">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todo" element={<TodoApp />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;