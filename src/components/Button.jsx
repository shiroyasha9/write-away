export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`rounded  bg-lemon py-2 px-4 font-semibold text-black hover:bg-lemon-dark disabled:cursor-not-allowed disabled:bg-lemon/60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
