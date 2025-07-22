import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomButton from './components/CustomButton';

function App() {
  const handleClick = () => alert('Button clicked!');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 font-sans">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Welcome to My Tailwind React App
        </h2>
        <p className="max-w-xl text-gray-600 text-lg leading-relaxed">
          This is a beautifully styled React app using Tailwind CSS. Enjoy the smooth design, responsiveness, and accessibility.
        </p>
        <CustomButton label="Click Me" onClick={handleClick} />
      </main>
      <Footer />
    </div>
  );
}


export default App;
