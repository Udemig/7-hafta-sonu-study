import { useState } from 'react';
import { CarType } from '../../types';
import CustomButton from '../CustomButton';
import DetailModal from './DetailModal';
import { generateImage } from '../../utils/generateImage';

interface ICardProps {
  car: CarType;
}

const Card = ({ car }: ICardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="car-card group">
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* araba fiyatı */}
      <p className="flex mt-6 text-[32px]">
        <span className="text-[19px] font-semibold">₺</span>
        {Math.round(Math.random() * 5000) + 500}
        <span className="text-[14px] font-medium self-end">/gün</span>
      </p>

      {/* resim alanı */}
      <div className="relative w-full h-40 my-3">
        <img
          src={generateImage(car)}
          className="w-full h-full object-contain"
        />
      </div>

      {/* alt alan */}
      <div className="relative flex w-full mt-2">
        {/* ikonlar */}
        <div className="group-hover:invisible flex w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={25} src="/steering-wheel.svg" />
            <p className="text-[14px]">
              {car.transmission === 'a' ? 'Otomatik' : 'Manuel'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={25} src="/tire.svg" />
            <p className="text-[14px]">{car.drive}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={25} src="/gas.svg" />
            <p className="text-[14px]">{car.fuel_type}</p>
          </div>
        </div>
        {/* buton */}
        <div className="group-hover:flex hidden w-full absolute bottom-0 z-10">
          <CustomButton
            title="Daha Fazla"
            designs="w-full py-[16px]"
            rIcon="/right-arrow.svg"
            handleClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {/* modal */}
      <DetailModal
        car={car}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Card;
