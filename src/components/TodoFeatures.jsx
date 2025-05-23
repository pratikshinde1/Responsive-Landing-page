 import React from "react";

export const TodoFeatures = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Transform Your Productivity with Our
            <span className="block">Innovative To-Do List Features</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <FeatureCard
            number="01"
            icon={<UserInterfaceIcon />}
            title="User Friendly Interface"
            description="Our platform offers intuitive task management to boost your efficiency"
          />
          <FeatureCard
            number="02"
            icon={<CollaborateIcon />}
            title="Collaborate & Share Effectively"
            description="Invite team members to work together and achieve your goals faster"
          />
          <FeatureCard
            number="03"
            icon={<CollaborationIcon />}
            title="Effortless Collaboration"
            description="Invite team members to work together and achieve your goals faster"
          />
          <FeatureCard
            number="04"
            icon={<AccessIcon />}
            title="Seamless Access"
            description="Stay connected and manage your tasks on the go with our mobile tools!"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ number, icon, title, description }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="text-xl font-semibold text-gray-400 mb-4">{number}</div>
      <div className="mb-4 text-[#FE5A59]">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

const UserInterfaceIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 9L10 12L7 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16H17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CollaborateIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 8C17 10.2091 15.2091 12 13 12C10.7909 12 9 10.2091 9 8C9 5.79086 10.7909 4 13 4C15.2091 4 17 5.79086 17 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M1 20.5C1 15.8056 4.80558 12 9.5 12H16.5C21.1944 12 25 15.8056 25 20.5V21H1V20.5Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M13 8H22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M18 3L18 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CollaborationIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M20 14C20 11.7909 18.2091 10 16 10C13.7909 10 12 11.7909 12 14"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 14C12 11.7909 10.2091 10 8 10C5.79086 10 4 11.7909 4 14"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M4 19L20 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 14L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const AccessIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="4"
      width="12"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M10 6H14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);
