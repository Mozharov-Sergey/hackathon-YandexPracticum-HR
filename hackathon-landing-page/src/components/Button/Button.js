import './Button.css'

const Button = ({text, height }) => {
  
return (
    <button target='blank' className='button' style={{ height: height }}>
      {text}
    </button>
  )
}

export default Button;