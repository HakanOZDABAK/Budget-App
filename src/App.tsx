import React from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Dashboard from "./layouts/Dashboard";
import { useLocaleStore } from "./store/useLocaleStore";
import { IntlProvider } from "react-intl";
import AppLocale from "./languages";
import moment from 'moment';

function App() {
  const { locale, setLocale } = useLocaleStore(); // Varsayılan dil, örneğin İngilizce
  const appLocale = AppLocale[locale];

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
    <IntlProvider locale={lang} messages={appLocale}>
   
        <Navbar />
        <Dashboard />

    </IntlProvider>
  );
}

export default App;
