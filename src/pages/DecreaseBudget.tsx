import { useForm } from "react-hook-form";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";

export default function DecreaseBudget() {
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
      <div className="my-5 card flex justify-content-center">
        <Card title="Gider Ekle" className="bg-red-200 md:w-25rem">
          <InputText
            type="text"
            placeholder="Gider İsmi"
            {...register("incomeName", {})}
          />
          <InputText
            className="mt-3"
            type="text"
            placeholder="Gider Değeri"
            {...register("incomeValue", { required: true, min: 0 })}
          />
          <div className="mt-3 flex flex-wrap gap-3">
          <label className="ml-2">
                Bu Gideri Ne Kadar Sürede Ödüyorsunuz?
              </label>
            <div className="flex align-items-center">
              <input
                value="Günlük"
                type="radio"
                {...register("incomeRoutine")}
                id="gunluk"
              />
              <label htmlFor="ingredient1" className="ml-2">
                Günlük
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                type="radio"
                {...register("incomeRoutine")}
                value="Haftalık"
                id="haftalik"
              />
              <label htmlFor="ingredient2" className="ml-2">
                Haftalık
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                type="radio"
                {...register("incomeRoutine")}
                value="Aylık"
                id="aylik"
              />
              <label htmlFor="ingredient3" className="ml-2">
                Aylık
              </label>
            </div>
            <div className="flex align-items-center">
              <input
                {...register("incomeRoutine")}
                value="Yıllık"
                type="radio"
                id="yillik"
              />
              <label htmlFor="ingredient4" className="ml-2">
                Yıllık
              </label>
            </div>
          </div>
          <Button label="Ekle" className="mt-3" type="submit" />
        </Card>
      </div>
    </form>
  );
}