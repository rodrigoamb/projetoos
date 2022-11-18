//import styles
import { ContainerHome } from "./styles";

//import assets
import logo from "../../assets/img/logo.png";

//import hooks react
import { useEffect, useState } from "react";

//import auth
import { auth } from "../../firebase/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

//navigate
import { Link, useNavigate } from "react-router-dom";

//import components
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyLogged = () => {
      const userLogged = localStorage.getItem("@detailUser");

      if (userLogged) {
        setIsLoggedIn(true);
      }
    };
    verifyLogged();
  }, []);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (email !== "" && password !== "") {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail("");
          setPassword("");
          setMsg(false);
          setLoading(false);

          navigate("/admin");
        })
        .catch((error) => {
          setLoading(false);
          setMsg(true);
          console.log(error);
        });
    } else {
      setEmail("");
      setPassword("");
      setMsg(true);
    }

    setLoading(false);
  };

  return (
    <>
      <ContainerHome>
        {loading && <LoadingScreen />}
        <img src={logo} alt='logo' />
        <form onSubmit={handleSignIn}>
          <label>
            Login:
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Digite seu email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Senha:
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Digite sua senha...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {msg && (
            <p>
              Usuário ou senha não encontrado! Verifique seu Login ou senha e
              tente novamente.
            </p>
          )}
          <button typeof='submit'>Acessar</button>
        </form>
        {isLoggedIn && (
          <div className='container-isLogged'>
            <span>
              ATENÇÃO! Você ainda está logado, retorne para o sistema e aperte
              sair:
            </span>
            <Link to={"/admin"}>
              <button>Voltar para o sistema</button>
            </Link>
          </div>
        )}
      </ContainerHome>
    </>
  );
};

export default Login;
