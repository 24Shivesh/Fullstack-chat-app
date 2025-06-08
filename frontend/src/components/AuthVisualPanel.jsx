const AuthVisualPanel = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-300 p-12">
      <div className="max-w-md text-center">
        {/* Pattern Grid */}
        <div className="grid grid-cols-4 gap-2 mb-8">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl ${
                i % 3 === 0 ? "bg-primary/20 animate-pulse" : "bg-primary/10"
              }`}
            />
          ))}
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold text-primary mb-3">{title}</h2>
        <p className="text-base text-base-content/70 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthVisualPanel;
