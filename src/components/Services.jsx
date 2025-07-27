import Card from "./Card";

export default function Services() {
  const services = [
    {
      icon: "🎨",
      title: "UI Design",
      description: "Clean, modern, and intuitive designs for web & mobile apps."
    },
    {
      icon: "🔍",
      title: "UX Research",
      description: "Understanding user needs to design meaningful experiences."
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Building responsive, fast, and scalable websites."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <Card 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
