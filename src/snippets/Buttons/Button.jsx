
const Button = ({ title, onClick, className , icon:Icon  }) => {
  return (
    <button className={className} onClick={onClick}>
      
      {title}  
      {Icon && <Icon />}
    </button>
  )
};

export default Button;
