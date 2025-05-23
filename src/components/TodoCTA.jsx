 import React from "react";

export const TodoCTA = (submittedData) => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="public\images\selfile.jpg"
              alt="Mobile app"
              className="w-full max-w-sm mx-auto rounded-lg shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Start Organizing Your Life Today
            </h2>
            <p className="text-gray-500 mb-6">
              Sign up now and transform your productivity with our intuitive
              to-do list platform!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 rounded-md bg-[#FE5A59] hover:bg-[#FE5A59]/90 text-white font-medium">
                Sign Up
              </button>
              <button className="px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto mt-16">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="p-3 text-sm font-medium text-gray-500">Name</th>
                <th className="p-3 text-sm font-medium text-gray-500">
                  Gender
                </th>
                <th className="p-3 text-sm font-medium text-gray-500">
                  Language
                </th>
                <th className="p-3 text-sm font-medium text-gray-500">Email</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="bg-white">
                <td className="p-3 text-sm"> </td>
                <td className="p-3 text-sm"> </td>
                <td className="p-3 text-sm"> </td>
                <td className="p-3 text-sm"> </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm"> </td>
                <td className="p-3 text-sm"> </td>
                <td className="p-3 text-sm"> </td>
                <td className="p-3 text-sm"> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
