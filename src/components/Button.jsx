const Button = ({ size = '', ...props}) => {
  const classSize = size && `btn-${size}`
  // если true -> возвращается последнее значение

  return (
    <button type="button" className={`btn btn-primary ${classSize}`.trim()} {...props}>
      {props.children}
    </button>
  )
}

export default Button
