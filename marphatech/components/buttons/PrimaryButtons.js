// 

const PrimaryButtons = ({name}) => {
  return (
   <button className="border-green-500 border-2 px-14 py-3 rounded-full hover:scale-105 transition-all duration-300 font-semibold  animate-bounce hover:bg-green-500 hover:text-white shadow-2xl text-lg">
  {name}
   </button>
  )
}

export default PrimaryButtons