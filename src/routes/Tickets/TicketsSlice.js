import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import Otel from '../../assets/Otel.png';
import Otel2 from '../../assets/n1.jpg';
import Otel3 from '../../assets/n2.webp';
let TiketsStore = JSON.parse(localStorage.getItem('catalog')) || [];

let TiketsSlice = createSlice({
  name: 'tickets',
  initialState: TiketsStore,
  reducers: {
    createTikets: (state) => {
        let tickets = [
            {
              id: nanoid(),
              img: Otel,
              title: 'Agon Hotel',
              from: 'Москва',
              city: 'Кемер',
              country: 'Турция',
              date: '2024-12-12',
              nights: 7,
              tourists: 2,
              cost: 100000,
              info: 'Кемер - центр, Кемер, 600 м до моря',
              description: 'Отель с сезонным открытым бассейном, рестораном и баром расположен в городе Кемер. Скромные номера с кондиционером и телевизором. Прогулка до моря займет 10-15 минут. Подойдет для экономичной поездки.',
            },
            {
              id: nanoid(),
              img: Otel2,
              title: 'Another Hotel',
              from: 'Москва',
              city: 'Хайнань',
              country: 'Китай',
              date: '2024-12-12',
              nights: 5,
              tourists: 2,
              cost: 100000,
              info: 'Хайнань, 500 м до моря',
              description: 'Отель с великолепным видом на море и прекрасным сервисом.',
            },
            {
              // id: nanoid(),
              // img: Otel3,
              // title: 'Budget Hotel',
              // from: 'Мухосранск',
              // city: 'Кемер',
              // country: 'Турция',
              // date: '2024-12-12',
              // nights: 3,
              // tourists: 1,
              // cost: 100000,
              // info: 'Кемер, 1 км до моря',
              // description: 'Экономичный отель с базовыми удобствами.',
            },
          ];
      state.push(...tickets);
      localStorage.setItem('catalog', JSON.stringify(state));
    },
  },
});

export default TiketsSlice.reducer

export let { createTikets } = TiketsSlice.actions