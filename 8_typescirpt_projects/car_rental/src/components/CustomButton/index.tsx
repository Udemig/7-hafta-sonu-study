import { ButtonPropsType } from '../../types';

// Component
const CustomButton = ({
  disabled,
  designs,
  btnType,
  title,
  handleClick,
}: ButtonPropsType) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={btnType}
      className={`${designs} custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
