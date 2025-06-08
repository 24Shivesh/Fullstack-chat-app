import  authVisual  from "../assets/Whisprr.png";
 // Adjust path if needed

const AuthVisualPanel = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-300 p-12">
      <div className="max-w-md text-center">
        {/* Local Image */}
        <div className="mb-8">
          <img
            src={authVisual}
            alt="Authentication Visual"
            className="w-48 h-48 object-cover mx-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold text-primary mb-3">{title}</h2>
        <p className="text-base text-base-content/70 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthVisualPanel;
