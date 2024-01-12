import { Card } from "primereact/card";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
export default function MainPage() {
  const intl = useIntl();
  const navigate = useNavigate();

  const handleChangePage = (path: any) => {
    navigate(path);
  };

  return (
    <div>
      <div className="mt-5 grid card flex justify-content-center">
        <Card
          title={intl.formatMessage({
            id: "incomeCard",
          })}
          className="bg-green-400 md:w-25rem"
          onClick={() => {
            handleChangePage("/addBudget");
          }}
        >
          <b>
            <p className="m-0">
              {intl.formatMessage({
                id: "incomeCardText",
              })}
            </p>
          </b>
        </Card>
      </div>
      <div className="mt-5 grid card flex justify-content-center">
        <Card
          title={intl.formatMessage({
            id: "expenseCard",
          })}
          className="bg-red-400 md:w-25rem"
          onClick={() => {
            handleChangePage("/expenseBudget");
          }}
        >
          <b>
            {" "}
            <p className="m-0">
              {intl.formatMessage({
                id: "expenseCardText",
              })}
            </p>
          </b>
        </Card>
      </div>
      <div className="mt-5 grid card flex justify-content-center">
        <Card
          title={intl.formatMessage({
            id: "budgetCard",
          })}
          className="bg-blue-400 md:w-25rem"
          onClick={() => {
            handleChangePage("/budgetsDetail");
          }}
        >
          <b>
            {" "}
            <p className="m-0">
              {intl.formatMessage({
                id: "budgetCardText",
              })}
            </p>
          </b>
        </Card>
      </div>
    </div>
  );
}
