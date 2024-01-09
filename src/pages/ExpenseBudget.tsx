import { useForm } from "react-hook-form";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { useIntl } from "react-intl";
export default function ExpenseBudget() {
const intl= useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(Object.keys(errors).length === 0 ? data : errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5 card flex justify-content-center">
        <Card title={intl.formatMessage({
                        id: 'expenseBudgetCardName',
                      })}className="bg-red-200 md:w-25rem">
          <InputText
            type="text"
            placeholder={intl.formatMessage({
              id: 'expenseBudgetInputName',
            })}
            {...register("incomeName", {})}
          />
          <InputText
            className="mt-3"
            type="text"
            placeholder={intl.formatMessage({
              id: 'expenseBudgetInputValue',
            })}
            {...register("incomeValue", { required: true, min: 0 })}
          />
          <div className="mt-3 flex flex-wrap gap-3">
          <label className="ml-2">
          {intl.formatMessage({
                        id: 'expenseBudgetRatio',
                      })}
              </label>
            <div className="flex align-items-center">
              <input
                value={intl.formatMessage({
                  id: 'expenseBudgetDaily',
                })}
                type="radio"
                {...register("incomeRoutine")}
                id="gunluk"
              />
              <label htmlFor="ingredient1" className="ml-2">
              {intl.formatMessage({
                        id: 'expenseBudgetDaily',
                      })}
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                type="radio"
                {...register("incomeRoutine")}
                value={intl.formatMessage({
                  id: 'expenseBudgetWeekly',
                })}
                id="haftalik"
              />
              <label htmlFor="ingredient2" className="ml-2">
              {intl.formatMessage({
                        id: 'expenseBudgetWeekly',
                      })}
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                type="radio"
                {...register("incomeRoutine")}
                value={intl.formatMessage({
                  id: 'expenseBudgetMonthly',
                })}
                id="aylik"
              />
              <label htmlFor="ingredient3" className="ml-2">
              {intl.formatMessage({
                        id: 'expenseBudgetMonthly',
                      })}
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                {...register("incomeRoutine")}
                value={intl.formatMessage({
                  id: 'expenseBudgetYearly',
                })}
                type="radio"
                id="yillik"
              />
              <label htmlFor="ingredient4" className="ml-2">
              {intl.formatMessage({
                        id: 'expenseBudgetYearly',
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