import { LangType } from "./values/langs";
import en_US from "./values/en_US"
import tr_TR from "./values/tr_TR";

export default{
    tr_TR,
    en_US
}

export type AppLocaleType={

    tr_TR: LangType;
    en_US: LangType;
}

export const LanguageOptions=[
    {label:'Türkçe',id:'tr_TR'},
    {label:'English',id:'en_US'}
]