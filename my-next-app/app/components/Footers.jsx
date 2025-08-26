"use client";
export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white text-center py-16 mt-12 relative overflow-hidden">
      <div className="relative z-10">
        <p className="font-semibold text-lg mb-4 animate-fadeInDown">© 2025 Clothify. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2 animate-fadeInUp">
          <a href="#" className="hover:text-yellow-300 font-medium transition-colors">Facebook</a>
          <a href="#" className="hover:text-pink-400 font-medium transition-colors">Instagram</a>
          <a href="#" className="hover:text-blue-300 font-medium transition-colors">Twitter</a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulseSlow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulseSlow"></div>
      <style jsx>{`
        @keyframes fadeInDown {0% {opacity:0; transform:translateY(-20px);}100% {opacity:1; transform:translateY(0);}}
        @keyframes fadeInUp {0% {opacity:0; transform:translateY(20px);}100% {opacity:1; transform:translateY(0);}}
        @keyframes pulseSlow {0%,100% {transform:scale(1.05);}50% {transform:scale(1);}}
        .animate-fadeInDown {animation:fadeInDown 1s ease-out forwards;}
        .animate-fadeInUp {animation:fadeInUp 1s ease-out forwards;}
        .animate-pulseSlow {animation:pulseSlow 6s ease-in-out infinite;}
      `}</style>
    </footer>
  );
}
