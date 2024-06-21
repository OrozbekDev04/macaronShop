import MainFall from "../../assets/img/Mainfall.png";
import Contest from "../../assets/img/Contest.png";
import Express from "../../assets/img/Express.png";
import HoverScaleImage from "./HowerScaleImage";
import { useNavigate } from "react-router-dom";

export const NewsComponent = () => {
  const navigate = useNavigate();
  return (
    <div data-aos="zoom-in">
      <div className="flex gap-[10px] mt-[41px] justify-center ">
        <p
          className="text-blue-400 cursor-pointer "
          onClick={() => {
            navigate(`/`);
          }}
        >
          Главная
        </p>
        <p>» </p>
        <p>Новости</p>
      </div>
      <h1 className="text-4xl text-center mb-[40px] mt-[22px]">Новости</h1>
      <div className="flex gap-[30px] justify-center mb-[30px]">
        <div className="w-[370px] border-2 rounded-md  ">
          <HoverScaleImage imageUrl={MainFall} alt="Image 1" />
          <div className="w-[330px] m-auto">
            <p className="text-gray-400 mb-[10px]">25.10.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Скоро главный праздник весны!
            </h4>
            <p className="text-gray-500">
              Девушки любят, когда вкусно, красиво и натурально. Смотрите больше
              наборов с десертами ручной работы
            </p>
          </div>
        </div>
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={Contest} alt="Image 2" />
          <div className="w-[330px] m-auto">
            <p className="text-gray-400 mb-[10px]">17.02.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Конкурс на 23 февраля!
            </h4>
            <p className="text-gray-500">
              День Защитника Отечества уже совсем скоро! Порадуйте своего
              сладкоежку с помощью аппетитных наборов от МакаронШоп
            </p>
          </div>
        </div>
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={Express} alt="Image 3" />
          <div className="w-[330px] m-auto mb-[20px]">
            <p className="text-gray-400 mb-[10px]">11.02.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Экспресс-конкурс ко дню Святого Валентина
            </h4>
            <p className="text-gray-500">
              Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи
              о своих чувствах с помощью сладкой валентинки от МакаронШоп
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] justify-center mb-[30px]">
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={Contest} alt="Image 4" />
          <div className="w-[330px] m-auto">
            <p className="text-gray-400 mb-[10px]">17.02.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Конкурс на 23 февраля!
            </h4>
            <p className="text-gray-500">
              День Защитника Отечества уже совсем скоро! Порадуйте своего
              сладкоежку с помощью аппетитных наборов от МакаронШоп
            </p>
          </div>
        </div>
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={MainFall} alt="Image 5" />
          <div className="w-[330px] m-auto">
            <p className="text-gray-400 mb-[10px]">25.10.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Скоро главный праздник весны!
            </h4>
            <p className="text-gray-500">
              Девушки любят, когда вкусно, красиво и натурально. Смотрите больше
              наборов с десертами ручной работы
            </p>
          </div>
        </div>
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={Express} alt="Image 6" />
          <div className="w-[330px] m-auto mb-[20px]">
            <p className="text-gray-400 mb-[10px]">11.02.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Экспресс-конкурс ко дню Святого Валентина
            </h4>
            <p className="text-gray-500">
              Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи
              о своих чувствах с помощью сладкой валентинки от МакаронШоп
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] justify-center mb-[30px]">
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={MainFall} alt="Image 7" />
          <div className="w-[330px] m-auto">
            <p className="text-gray-400 mb-[10px]">25.10.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Скоро главный праздник весны!
            </h4>
            <p className="text-gray-500">
              Девушки любят, когда вкусно, красиво и натурально. Смотрите больше
              наборов с десертами ручной работы
            </p>
          </div>
        </div>
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={Express} alt="Image 8" />
          <div className="w-[330px] m-auto mb-[20px]">
            <p className="text-gray-400 mb-[10px]">11.02.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Экспресс-конкурс ко дню Святого Валентина
            </h4>
            <p className="text-gray-500">
              Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи
              о своих чувствах с помощью сладкой валентинки от МакаронШоп
            </p>
          </div>
        </div>
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={Contest} alt="Image 9" />
          <div className="w-[330px] m-auto">
            <p className="text-gray-400 mb-[10px]">17.02.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Конкурс на 23 февраля!
            </h4>
            <p className="text-gray-500">
              День Защитника Отечества уже совсем скоро! Порадуйте своего
              сладкоежку с помощью аппетитных наборов от МакаронШоп
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] justify-center mb-[30px]">
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={Contest} alt="Image 10" />
          <div className="w-[330px] m-auto">
            <p className="text-gray-400 mb-[10px]">17.02.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Конкурс на 23 февраля!
            </h4>
            <p className="text-gray-500">
              День Защитника Отечества уже совсем скоро! Порадуйте своего
              сладкоежку с помощью аппетитных наборов от МакаронШоп
            </p>
          </div>
        </div>
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={Express} alt="Image 11" />
          <div className="w-[330px] m-auto mb-[20px]">
            <p className="text-gray-400 mb-[10px]">11.02.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Экспресс-конкурс ко дню Святого Валентина
            </h4>
            <p className="text-gray-500">
              Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи
              о своих чувствах с помощью сладкой валентинки от МакаронШоп
            </p>
          </div>
        </div>
        <div className="w-[370px] border-2 rounded-md ">
          <HoverScaleImage imageUrl={MainFall} alt="Image 12" />
          <div className="w-[330px] m-auto">
            <p className="text-gray-400 mb-[10px]">25.10.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Скоро главный праздник весны!
            </h4>
            <p className="text-gray-500">
              Девушки любят, когда вкусно, красиво и натурально. Смотрите больше
              наборов с десертами ручной работы
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default NewsComponent;