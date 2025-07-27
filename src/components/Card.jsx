export default function Card({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
      
      {/* Icon */}
      <div className="flex justify-center items-center w-16 h-16 mx-auto bg-indigo-100 text-indigo-600 rounded-full text-4xl mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <button className="mt-5 px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-indigo-700 transition">
        Learn More
      </button>
    </div>
  );
}


