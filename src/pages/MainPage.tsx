import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import {useIntl} from 'react-intl';
import { useNavigate } from 'react-router-dom';
export default function MainPage() {
  const intl = useIntl();
  const navigate = useNavigate()


  const handleChangePage=(path:any)=>{
   
    navigate(path)

  }

  return (
<div>
      <div className="mt-5 grid card flex justify-content-center">
        <Card title={intl.formatMessage({
                        id: 'incomeCard',
                      })} className="bg-green-300 md:w-25rem" onClick={()=>{handleChangePage('/addBudget')}}>
          <p className="m-0">{intl.formatMessage({
                        id: 'incomeCardText',
                      })}</p>
        </Card>
      </div>
      <div className="mt-5 grid card flex justify-content-center">
        <Card title={intl.formatMessage({
                        id: 'expenseCard',
                      })} className="bg-red-300 md:w-25rem" onClick={()=>{handleChangePage('/expenseBudget')}}>
          <p className="m-0">{intl.formatMessage({
                        id: 'expenseCardText',
                      })}</p>
        </Card>
      </div>
      <div className="mt-5 grid card flex justify-content-center">
        <Card title={intl.formatMessage({
                        id: 'budgetCard',
                      })} className="bg-blue-300 md:w-25rem" onClick={()=>{handleChangePage('/budgetsDetail')}}
                      >
          <p className="m-0">{intl.formatMessage({
                        id: 'budgetCardText',
                      })}</p>
                      
        </Card>
      </div>
      </div>


  );
}
