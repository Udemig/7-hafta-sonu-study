import { useFormik } from 'formik';
import InputField from '../components/InputField';
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
      console.log(values);
    },

    // doğrulama şeması: todo
    validationSchema: schema,
  });

  console.log(formik);
  return (
    <div>
      <div className="container">
        <h2 className="text-center my-5">Coinmania</h2>

        {/* form alanı */}
        <form>
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
