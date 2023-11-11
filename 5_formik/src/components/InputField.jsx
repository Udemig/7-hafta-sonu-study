const InputField = ({ formik, data }) => {
  const { label, name, type } = data;

  return (
    <div>
      <label>{label}</label>
      <input onChange={formik.handleChange} name={name} type={type} />
    </div>
  );
};

export default InputField;
