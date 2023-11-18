import { useFormik } from 'formik';
import InputField from './InputField';
import { inputs } from '../constant';
import { schema } from '../schema';

const Auth = () => {
  // useFormik > formik çzelliklerini kullanamamız sağlayan hook
  const formik = useFormik({
    // formda tutulacak veirleri belirle
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },

    // form gönderlince çalışır
    onSubmit: (values, actions) => {
      localStorage.setItem('user', JSON.stringify(values));

      // bütün value'ları sıfırlar
      actions.resetForm();
    },

    // doğrulama şeması: todo
    validationSchema: schema,
  });

  return (
    <div className="auth-page">
      <div className="container">
        <h2 className="d-flex gap-3 justify-content-center align-items-center text-center my-5">
          <img height={60} src="/c-logo.png" alt="logo" />
          <span>Coinmania</span>
        </h2>

        {/* form alanı */}
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputField formik={formik} data={data} />
          ))}

          <button type="submit">Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
