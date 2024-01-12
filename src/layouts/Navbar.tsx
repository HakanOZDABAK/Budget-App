import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { AppLocaleType, LanguageOptions } from "../languages";
import { useLocaleStore } from "../store/useLocaleStore";
export default function Navbar() {
    const menuLeft = useRef<Menu>(null)
    const intl = useIntl()
    const navigate = useNavigate()

    const handleGoPath = (path:any) =>{
      navigate(path)
    }
   
      let {locale, setLocale} = useLocaleStore();
      const [title, setTitle] = useState<String>();
      
      useEffect(() => {
          setTitle(LanguageOptions.find(item => item.id === locale)?.label || '');
        }, [locale]);
      
      const items: MenuItem[] = LanguageOptions.map((item) => ({
          label: item.label,
          icon: 'pi pi-flag', // İsteğe bağlı, bir bayrak ikonu ekleyebilirsiniz
          command: () => setLocale(item.id as keyof AppLocaleType), // setLocale fonksiyonunu çağırarak dil değiştirme
        }));
      
      const start = (
        <img
          alt="logo"
          src="https://primefaces.org/cdn/primereact/images/logo.png"
          height="40"
          className="mr-2"
          onClick={()=>{navigate("/home")}}
        ></img>
      );
      const end = (
        <div className="flex align-items-center gap-2">
          <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
            <Button
              label={intl.formatMessage({id: 'languages'})}
              icon="pi pi-align-left"
              className="mr-2"
              onClick={(event) => menuLeft.current?.toggle(event)}
              aria-controls="popup_menu_left"
              aria-haspopup
            />
          <Avatar
          
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
        </div>
      );
  return (
    <div className="card ">
      <Menubar className="menubar" start={start} end={end} />
    </div>
  );
}
