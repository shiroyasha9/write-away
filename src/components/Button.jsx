export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`rounded bg-lemon py-2 px-4 font-bold text-black hover:bg-lemon-dark ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
