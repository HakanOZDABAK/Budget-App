import moment from "moment";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { BudgetService } from "../service/BudgetServices";
import { useLoginStore } from "../store/useLoginStore";
export default function ExpenseBudget() {
  const { token } = useLoginStore();
  const today = moment().format("YYYY-MM-DD");

  const intl = useIntl();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data: any) => {
    let budgetService = new BudgetService();
    const allData = { ...data, addTime: today };
    console.log(allData);
    return budgetService.addBudget(allData, token);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5 card flex justify-content-center">
        <Card
          title={intl.formatMessage({
            id: "expenseBudgetCardName",
          })}
          className="bg-red-200 md:w-25rem"
        >
          <InputText
            type="text"
            placeholder={intl.formatMessage({
              id: "expenseBudgetInputName",
            })}
            {...register("budgetName", {})}
          />
          <InputText
            className="mt-3"
            type="text"
            placeholder={intl.formatMessage({
              id: "expenseBudgetInputValue",
            })}
            {
              ...register("budgetValue", {
                required: true,
                setValueAs: (value) => {
                  const numericValue = parseFloat(value);
                  return isNaN(numericValue) ? "" : numericValue === 0 ? "0" : `-${Math.abs(numericValue)}`;
                },
              })
            }
          />
          <div className="mt-3 flex flex-wrap gap-3">
            <label className="ml-2">
              {intl.formatMessage({
                id: "expenseBudgetRatio",
              })}
            </label>
            <div className="flex align-items-center">
              <input
                value={intl.formatMessage({
                  id: "expenseBudgetDaily",
                })}
                type="radio"
                {...register("budgetOften")}
                id="gunluk"
              />
              <label htmlFor="ingredient1" className="ml-2">
                {intl.formatMessage({
                  id: "expenseBudgetDaily",
                })}
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                type="radio"
                {...register("budgetOften")}
                value={intl.formatMessage({
                  id: "expenseBudgetWeekly",
                })}
                id="haftalik"
              />
              <label htmlFor="ingredient2" className="ml-2">
                {intl.formatMessage({
                  id: "expenseBudgetWeekly",
                })}
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                type="radio"
                {...register("budgetOften")}
                value={intl.formatMessage({
                  id: "expenseBudgetMonthly",
                })}
                id="aylik"
              />
              <label htmlFor="ingredient3" className="ml-2">
                {intl.formatMessage({
                  id: "expenseBudgetMonthly",
                })}
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                {...register("budgetOften")}
                value={intl.formatMessage({
                  id: "expenseBudgetYearly",
                })}
                type="radio"
                id="yillik"
              />
              <label htmlFor="ingredient4" className="ml-2">
                {intl.formatMessage({
                  id: "expenseBudgetYearly",
                })}
              </label>
            </div>
          </div>
          <Button
            label={intl.formatMessage({
              id: "add",
            })}
            className="mt-3"
            type="submit"
          />
        </Card>
      </div>
    </form>
  );
}
