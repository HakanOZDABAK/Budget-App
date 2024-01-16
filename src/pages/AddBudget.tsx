import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { useLoginStore } from "../store/useLoginStore";
import { BudgetService } from "../service/BudgetServices";
import moment from "moment";
export default function AddBudget() {
  const {token} = useLoginStore()
  const today = moment().format('YYYY-MM-DD');

  const intl=useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data: any) => {
   let budgetService = new BudgetService()
   const allData = {...data,addTime:today}
    return budgetService.addBudget(allData, token)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5 card flex justify-content-center">
        <Card title={intl.formatMessage({
                        id: 'addBudgetCardName',
                      })} className="bg-green-200 md:w-20rem">
          <InputText
            type="text"
            placeholder={intl.formatMessage({
              id: 'addBudgetInputNamePlace',
            })}
            {...register("budgetName", {})}
          />
          <InputText
            className="mt-3"
            type="text"
            placeholder={intl.formatMessage({
              id: 'addBudgetInputValue',
            })}
            {...register("budgetValue", { required: true, min: 0 })}
          />
          <div className="mt-3 flex flex-wrap gap-3">
          <label className="ml-2">
          {intl.formatMessage({
                        id: 'addBudgetRatio',
                      })}
              </label>
            <div className="flex align-items-center">
              <input
                value={intl.formatMessage({
                  id: 'addBudgetDaily',
                })}
                type="radio"
                {...register("budgetOften")}
                id="gunluk"
              />
              <label htmlFor="ingredient1" className="ml-2">
              {intl.formatMessage({
                        id: 'addBudgetDaily',
                      })}
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                type="radio"
                {...register("budgetOften")}
                value={intl.formatMessage({
                  id: 'addBudgetWeekly',
                })}
                id="haftalik"
              />
              <label htmlFor="ingredient2" className="ml-2">
              {intl.formatMessage({
                        id: 'addBudgetWeekly',
                      })}
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                type="radio"
                {...register("budgetOften")}
                value={intl.formatMessage({
                  id: 'addBudgetMonthly',
                })}
                id="aylik"
              />
              <label htmlFor="ingredient3" className="ml-2">
              {intl.formatMessage({
                        id: 'addBudgetMonthly',
                      })}
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                {...register("budgetOften")}
                value={intl.formatMessage({
                  id: 'addBudgetYearly',
                })}
                type="radio"
                id="yillik"
              />
              <label htmlFor="ingredient4" className="ml-2">
              {intl.formatMessage({
                        id: 'addBudgetYearly',
                      })}
              </label>
            </div>
          </div>
          <Button label={intl.formatMessage({
                        id: 'add',
                      })} className="mt-3" type="submit" />
        </Card>
      </div>
    </form>
  );
}
