// ButtonInfinity.jsx
function ButtonInfinity(props) {
    return (
      <button className="w-full max-w-[270px] text-lg font-semibold uppercase text-white cursor-pointer h-12 text-center border-2 border-red-600 rounded-full mt-2 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-opacity-50">{props.texto}</button>
    );
  }
  
  export default ButtonInfinity;
  