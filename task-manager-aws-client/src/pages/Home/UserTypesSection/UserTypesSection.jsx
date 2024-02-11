const UserTypesSection = () => {
  const userTypes = [
    {
      name: "Developers",
      description:
        "Enhance your productivity with our task management tools tailored for developers.",
      image: "/coding.png",
    },
    {
      name: "Corporate Professionals",
      description:
        "Streamline your workflow and stay organized with our powerful task manager.",
      image: "/professionals.png",
    },
    {
      name: "Bankers",
      description:
        "Manage your tasks efficiently and stay on top of your financial responsibilities.",
      image: "/banker.png",
    },
  ];

  return (
    <section className="px-2 py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold">
          Who <span className="text-yellow-500">Benefits</span> from Our{" "}
          <span className="text-yellow-500">TASKY</span>?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {userTypes.map((userType, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <img
                src={userType.image}
                alt={`${userType.name} Image`}
                className="w-20 h-20 mx-auto mb-4 rounded-[50%] object-cover object-center"
              />
              <h3 className="mb-2 text-xl font-semibold">{userType.name}</h3>
              <p className="text-gray-600">{userType.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
