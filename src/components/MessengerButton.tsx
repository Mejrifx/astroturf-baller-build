const MessengerButton = () => {
  return (
    <a
      href="https://m.me/buildaballer"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0084FF] hover:bg-[#0066CC] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on Messenger"
    >
      {/* Official Messenger Logo SVG - Lightning Bolt */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-8 h-8 fill-white"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        <path d="M13.5 6.5L9 13h3.5l-1.5 4.5L16.5 11H13l.5-4.5z" fill="white"/>
      </svg>
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#0084FF] animate-ping opacity-20" />
    </a>
  );
};

export default MessengerButton;

