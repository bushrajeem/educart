

function Button({text}) {
  return (
    <button
    className='bg-primary py-4 px-9 rounded-full text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'
    >
         {text}
    </button>
  )
}

export default Button
