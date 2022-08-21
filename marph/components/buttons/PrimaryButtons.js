// 

const PrimaryButtons = ({name}) => {
  return (
   <button className="border-green-700 border-2 px-14 py-3 rounded-full hover:scale-105 transition-all duration-300 font-semibold text-sm animate-bounce hover:bg-green-700 hover:text-white shadow-2xl">
   {name}
   </button>
  )
}

export default PrimaryButtons