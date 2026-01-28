const Button = ({ children, variant = "primary", onClick }) => {
  const getVariantClasses = () => {
    if (variant === "primary") return "bg-[#00ADB5] text-white"

    if (variant === "ghost") return " text-[#818181]"
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-md px-3 py-1 text-xs font-semibold transition hover:opacity-75 ${getVariantClasses()}`}
    >
      {children}
    </button>
  )
}

export default Button
