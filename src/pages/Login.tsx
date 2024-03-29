import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router";
import { LoginService } from "../service/LoginService";
import { useLoginStore } from "../store/useLoginStore";

interface ProfileData {
  email: string;
  password: string;
}

export default function Login() {
  const intl = useIntl();
  const {setLogin, setToken } = useLoginStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);


  const Login = async (email: string, password: string) => {
    const profileInformation = { email, password };
    let loginService = new LoginService();

    const result = await loginService.login(profileInformation);

    if (checked) {
      // Eğer "Remember me" işaretliyse, bilgileri localStorage'a kaydet
      localStorage.setItem("rememberMeEmail", email);
      localStorage.setItem("rememberMePassword", password);
    } else {
      // Eğer "Remember me" işaretli değilse, localStorage'daki bilgileri sil
      localStorage.removeItem("rememberMeEmail");
      localStorage.removeItem("rememberMePassword");
    }

    setToken(result.data.accessToken);
    setLogin(true);
    navigate("/home"); // login başarılı olduktan sonra /home sayfasına yönlendir
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberMeEmail");
    const storedPassword = localStorage.getItem("rememberMePassword");

    if (storedEmail && storedPassword) {
      // Eğer bilgiler saklanmışsa, localStorage'dan çek
      setEmail(storedEmail);
      setPassword(storedPassword);
      setChecked(true);
    }
  }, []);

  return (
    <div className=" card  ">
      <div className="grid flex justify-content-center md:flex-row">
        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">
              {intl.formatMessage({ id: "email" })}
            </label>
            <InputText
              id="username"
              type="text"
              className="w-12rem"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">
              {intl.formatMessage({ id: "password" })}
            </label>
            <InputText
              id="password"
              type="password"
              className="w-12rem"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex items-center">
           
              {intl.formatMessage({ id: "rememberMe" })}

            <Checkbox
              className="grid mt-1 ml-2"
              onChange={(e) => setChecked(e.checked || false)}
              checked={checked}
            ></Checkbox>
          </div>
          <Button 
            onClick={() => {
              Login(email, password);
            }}
            label={intl.formatMessage({id:"login"})}
            icon="pi pi-user"
            className=" flex items-center w-10rem mx-auto "
          ></Button>
        </div>

      </div>
    </div>
  );
}
