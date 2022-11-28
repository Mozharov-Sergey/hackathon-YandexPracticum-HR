import './Button.css'

const Button = ({text, width, handleClick }) => {
  const handleSubmit = () => {
    handleClick()
  }

return (
    <button target='blank' className='button' style={{ width: width }} onClick={handleSubmit}>
      {text}
    </button>
  )
}

export default Button;