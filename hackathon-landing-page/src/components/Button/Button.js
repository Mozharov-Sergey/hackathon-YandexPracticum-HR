import './Button.css'

const Button = ({text, width, padding, handleClick }) => {
  const handleSubmit = () => {
    handleClick()
  }

return (
    <button target='blank' className='button' style={{ width: width, padding: padding }} onClick={handleSubmit}>
      {text}
    </button>
  )
}

export default Button;