const Button = ({ text, action }) => {
  return <button text={text} className="button" onClick={action}></button>;
};

export default Button;
