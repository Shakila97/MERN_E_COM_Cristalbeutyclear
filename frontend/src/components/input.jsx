export const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 ${className}`}
      {...props}
    />
  );
};
