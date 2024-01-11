import React from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Dashboard from "./layouts/Dashboard";
import { useLocaleStore } from "./store/useLocaleStore";
import { IntlProvider } from "react-intl";
import AppLocale from "./languages";
import moment from 'moment';
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { locale, setLocale } = useLocaleStore(); // Varsayılan dil, örneğin İngilizce
  const appLocale = AppLocale[locale];
  const {themeStatus} = useThemeStore(state => state);

  React.useLayoutEffect(() => {
    setLocale("tr_TR");
    return () => {};
  }, []);

  const lang = React.useMemo(() => {
    const lang = locale.split?.('_')?.[0] || 'en';
    moment.locale(lang);
    return lang;
  }, [locale]);
  return (
    
    <><link
      rel="stylesheet"
      type="text/css"
      href={themeStatus ? '/css/light.css' : '/css/dark.css'} /><IntlProvider locale={lang} messages={appLocale}>

        <Navbar />
        <Dashboard />

      </IntlProvider></>
  );
}

export default App;
