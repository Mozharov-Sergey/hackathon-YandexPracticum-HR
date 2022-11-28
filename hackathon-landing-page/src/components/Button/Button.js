import './Button.css'

const Button = ({text, width, handleClick }) => {
  const handleSubmit = () => {
    handleClick()
  }

return (
    <button target='blank' className='button' style={{ width: width }} onclick={handleSubmit}>
      {text}
    </button>
  )
}

export default Button;