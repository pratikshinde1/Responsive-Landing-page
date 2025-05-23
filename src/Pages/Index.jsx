import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Welcome to the App
        </h1>
        <p className="text-slate-600 mb-8">
          Check out our Todo App implementation
        </p>
        <Link 
          to="/todo" 
          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#FE5A59] hover:bg-[#FE5A59]/90 text-white font-medium"
        >
          View Todo App
        </Link>
      </div>
    </div>
  );
};
export default Index;
     