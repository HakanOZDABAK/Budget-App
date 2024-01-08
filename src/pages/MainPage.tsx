import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function MainPage() {

  return (
    <>
      <div className="my-5 card flex justify-content-center">
        <Card title="Gelir Ekle" className="bg-red-200 md:w-25rem" onClick={()=>{}}>
          <p className="m-0">Gelir Durumlarınızı Eklemek için Tıklayın!</p>
        </Card>
      </div>
      <div className="my-5  card flex justify-content-center">
        <Card title="Gider Ekle" className="bg-blue-200 md:w-25rem" onClick={()=>{}}>
          <p className="m-0">Gider Durumlarınızı Eklemek için Tıklayın</p>
        </Card>
      </div>
      <div className="my-5 card flex justify-content-center">
        <Card title="Bütçe Gidişatı" className="bg-green-200 md:w-25rem" onClick={()=>{}}>
          <p className="m-0">Bütçe Durumunuzu Öğrenmek için Tıklayın</p>
        </Card>
      </div>
    </>
  );
}
