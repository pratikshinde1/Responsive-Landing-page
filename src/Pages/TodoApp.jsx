import React from "react";
import { TodoNav } from "../components/TodoNav";
import { TodoHero } from "../components/TodoHero";
import { TodoFeatures } from "../components/TodoFeatures";
import { TodoTestimonials } from "../components/TodoTestimonials";
import { TodoCTA } from "../components/TodoCTA";
import { TodoFooter } from "../components/TodoFooter";

const  App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TodoNav />
      <main className="flex-1">
        <TodoHero />
        <TodoFeatures />
        <TodoTestimonials />
        <TodoCTA />
      </main>
      <TodoFooter />
    </div>
  );
};

export default  App;
     