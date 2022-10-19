const Button = ({text}) => {
  return (
    <button
      type="submit"
      className="bg-blue-700 py-3 px-4 rounded-md text-white max-w-sm mt-3 h-full"
    >
      {text}
    </button>
  );
};

export default Button;
