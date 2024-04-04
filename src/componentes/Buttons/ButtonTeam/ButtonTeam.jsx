// ButtonTeam.jsx
function ButtonTeam(props) {
    return (
      <button className="w-full max-w-[270px] text-lg font-semibold uppercase text-white cursor-pointer h-12 text-center border-none bg-red-600 rounded-full mt-2 shadow-md hover:shadow-lg">{props.texto}</button>
    );
  }
  
  export default ButtonTeam;
  