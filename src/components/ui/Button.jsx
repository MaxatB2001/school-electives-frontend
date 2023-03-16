const Button = ({ size, variant, children, className, onClick }) => {
  const btnStyle = `${className} rounded-sm font-bold py-2 px-4 ${
    size === "sm" ? "text-xs" : size === "lg" ? "text-xl" : "text-xs"
  }
    ${
      variant == "primary"
        ? "bg-sky-500 text-white"
        : variant == "danger"
        ? "bg-red-500 text-white"
        : "bg-blue-700 text-white"
    }`;
  return <button onClick={onClick} className={btnStyle}>{children}</button>;
};

export default Button;
