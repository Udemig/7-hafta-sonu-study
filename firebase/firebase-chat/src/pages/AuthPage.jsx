import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './../firebase/config';

const AuthPage = ({ setIsAuth }) => {
  // google ile giriş
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        // oturmunu açık olduğunu uygulamada yönetmek için
        localStorage.setItem('token', res.user.refreshToken);
        // kulalnıcı yetkilid state'ini true ya çekme
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odası</h1>
        <p>Devam etmek için Griş Yapın</p>
        <button onClick={handleLogin}>
          <img src="/g-logo.png" alt="google-logo" />
          <span>Google İle Gir</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
