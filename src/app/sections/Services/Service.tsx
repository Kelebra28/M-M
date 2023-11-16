"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Header, ListItem, List } from "@/app/components/index";

import { SERVICES } from "@/app/constant/index";

import styles from "./services.module.scss";

const Services = () => {
  const [selectedServiceData, setSelectedServiceData] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState<string>("");

  const handleItemClick = (selectedServiceName: string) => {
    const selectedService = SERVICES.find(
      (service) => service.name === selectedServiceName
    );

    if (selectedService) {
      setActiveItem(selectedService.name);
      setSelectedServiceData(selectedService.data);
    }

  };

  useEffect(() => {
    const timer = setTimeout(() => {
       setActiveItem('');
    }, 5 * 60 * 1000); 

    return () => clearTimeout(timer);
}, [activeItem]);

  return (
    <div id="services" className={styles["services-container"]}>
      <div>
        <Header title="Servicios" square />
      </div>
      <div className={styles["list-container"]}>
        <div className={styles["list-info"]}>
          {activeItem === "" ? (
            <div className={styles["list-logo"]}>
                 <Image 
                src="/icons/logo.svg" 
                alt='Maquila y Manofactura de suajes'
                width={200}
                height={200}
            />
            </div>
          ) : (
            <ul>
              {selectedServiceData.map((service: any) => (
                <li className={styles['slide-in-down']} key={service}>{service}</li>
              ))}
            </ul>
          )}
        </div>
        <List>
          {SERVICES.map((service, index) => (
            <ListItem
              key={service.name}
              position={`0${index + 1}`}
              title={service.name}
              onClick={() => handleItemClick(service.name)}
              active={activeItem === service.name}
            />
          ))}
        </List>
      </div>
      <div className={styles["pay-container"]}>
        <div>
          <Image
            src="/icons/card.svg"
            alt="Tarjeta forma de pago"
            width={150}
            height={150}
          />
        </div>
        <div className={styles["pay-header"]}>
          <Header title="Formas de pago" />
          <p>Tarjetas de crédito , debito, Transferencia, efectivo, deposito</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
