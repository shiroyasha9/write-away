export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`disabled:bg-lemon/60  disabled:cursor-not-allowed rounded bg-lemon py-2 px-4 font-bold text-black hover:bg-lemon-dark ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
