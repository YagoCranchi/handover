export default function GradientButton({ children, disabled = false }) {
  return (
    <button
      disabled={disabled}
      className="gradient-button"
    >
      {children}
    </button>
  );
}
