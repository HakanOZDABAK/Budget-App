import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import {useIntl} from 'react-intl';

export default function MainPage() {
  const intl = useIntl();

  return (
 <>
      <div className="mt-5 grid card flex justify-content-center">
        <Card title={intl.formatMessage({
                        id: 'incomeCard',
                      })} className="bg-red-200 md:w-25rem" onClick={()=>{}}>
          <p className="m-0">{intl.formatMessage({
                        id: 'incomeCardText',
                      })}</p>
        </Card>
      </div>
      <div className="mt-5 grid  card flex justify-content-center">
        <Card title={intl.formatMessage({
                        id: 'expenseCard',
                      })} className="bg-blue-200 md:w-25rem" onClick={()=>{}}>
          <p className="m-0">{intl.formatMessage({
                        id: 'expenseCardText',
                      })}</p>
        </Card>
      </div>
      <div className="mt-5 grid  card flex justify-content-center">
        <Card title={intl.formatMessage({
                        id: 'budgetCard',
                      })} className="bg-green-200 md:w-25rem" onClick={()=>{}}>
          <p className="m-0">{intl.formatMessage({
                        id: 'budgetCardText',
                      })}</p>
        </Card>
      </div></>


  );
}
