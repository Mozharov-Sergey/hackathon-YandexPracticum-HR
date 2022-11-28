import './Button.css'

const Button = ({text }) => {
  
return (
    <button target='blank' className='button'>
      {text}
    </button>
  )
}

export default Button;