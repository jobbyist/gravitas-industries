interface AdPlaceholderProps {
  size: "banner" | "sidebar" | "square";
  className?: string;
}

const AdPlaceholder = ({ size, className = "" }: AdPlaceholderProps) => {
  const sizeClasses = {
    banner: "w-full h-24 md:h-32",
    sidebar: "w-full h-64",
    square: "w-full aspect-square max-w-[300px]"
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${className} border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-card/30 backdrop-blur-sm`}
    >
      <p className="text-muted-foreground text-sm font-medium tracking-wide">
        Ad Space
      </p>
    </div>
  );
};

export default AdPlaceholder;
