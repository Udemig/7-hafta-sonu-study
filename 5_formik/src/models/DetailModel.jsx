import { MdEventAvailable, MdPriceChange } from 'react-icons/md';
import { SiCoinmarketcap } from 'react-icons/si';
import { FaPercent } from 'react-icons/fa';
import { RiStockFill } from 'react-icons/ri';

export class DetailModel {
  constructor(coin, history) {
    this.coin = coin;
    // arayüz kutuları için veriyi hazırla
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: 'Market Hacmi',
        value: this.coin?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: 'Tedarik',
        value: this.coin?.supply,
      },
      {
        icon: <MdPriceChange />,
        label: 'Tedarik',
        value: this.coin?.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: '24s Değişim (%)',
        value: this.coin?.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: '24s Hacim',
        value: this.coin?.volumeUsd24Hr,
      },
    ];

    this.chartData = {
      labels: history?.map((i) =>
        new Date(i.date).toLocaleDateString()
      ),
      datasets: [
        {
          label: 'Fiyat',
          data: history?.map((i) => +i.priceUsd),
        },
      ],
    };

    console.log(this.chartData);
  }
}

// elde ertememşiz gereken
// data={{
//       labels: ['Jun', 'Jul', 'Aug'],
//       datasets: [
//         {
//           id: 1,
//           label: '',
//           data: [5, 6, 7],
//         },
//       ],
//     }}
