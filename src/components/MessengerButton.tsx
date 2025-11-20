const MessengerButton = () => {
  return (
    <a
      href="https://m.me/buildaballer"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0084FF] hover:bg-[#0066CC] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on Messenger"
    >
      {/* Official Messenger Logo PNG */}
      <img 
        src="/Messenger-logo.png" 
        alt="Messenger" 
        className="w-8 h-8 object-contain"
      />
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#0084FF] animate-ping opacity-20" />
    </a>
  );
};

export default MessengerButton;

