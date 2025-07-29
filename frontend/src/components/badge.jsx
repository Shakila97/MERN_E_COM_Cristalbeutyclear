export const Badge = ({ children, className = "", ...props }) => {
  return (
    <span
      className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
