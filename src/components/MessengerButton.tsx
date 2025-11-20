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
        viewBox="0 0 512 512"
        className="w-8 h-8 fill-white"
      >
        <path d="M256.5 0C114.7 0 0 114.7 0 256.5c0 113.8 73.9 209.8 175.8 243.2v-65.3h-52.8v-81h52.8v-60.4c0-52.2 31.1-81.1 78.7-81.1 22.8 0 46.7 4.1 46.7 4.1v51.3h-26.3c-25.9 0-34 16.1-34 32.6v39.1h57.6l-9.2 81h-48.4v65.3C438.1 466.3 512 370.3 512 256.5 512 114.7 397.3 0 256.5 0z" />
        <path d="M256 128l-96 128h64l-16 128 128-160h-80l16-96z" fill="white"/>
      </svg>
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#0084FF] animate-ping opacity-20" />
    </a>
  );
};

export default MessengerButton;

