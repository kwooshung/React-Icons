import IconProvider from './icons/IconProvider';
import { IIconList } from './icons/interfaces';
import Icon from './icons';
import Symbol from './icons/symbol';

const icons: IIconList[] = [
  {
    id: 'aaa',
    className: 'bbb',
    viewBox: '0 0 1024 1024',
    icons: [
      <Symbol
        name='1'
        viewBox='0 0 1024 1024'
        type='fill'
        key='1'
        path={{
          d: 'M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z'
        }}
      />,
      <Symbol
        name='2'
        viewBox='0 0 1024 1024'
        type='fill'
        key='2'
        path={{
          d: 'M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z'
        }}
      />
    ]
  },
  {
    viewBox: '0 0 1024 1024',
    icons: [
      <Symbol
        name='earth'
        key='earth'
        viewBox='0 0 1024 1024'
        type='fill'
        className='ABC'
        path={[
          {
            className: 'abc',
            d: 'M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zM337.6 924.8c-53.3-22.6-101.3-54.9-142.4-96-41.2-41.2-73.5-89.1-96-142.4C75.8 631.2 64 572.5 64 512c0-29 2.7-57.6 8.1-85.5 6.5 2.5 13.8 3.9 20.9 3.9 9.7 0 19.3-2.4 27.1-7.6 8-5.3 17.3-8.1 26.5-8.1 7.9 0 15.8 2.1 22.8 6.4 8.1 5 13.8 11.6 13.8 22.8 0 81.6 2.8 168.7 76.9 169.9 2.2 0 41.2 14.9 59.8 63.3 2.2 5.6 6.4 7.4 12.2 7.4 11.5 0 29-7.4 47.6-7.4 13.9 0 0 23.6 0 74.5C379.8 802 489 880.1 489 880.1c-0.6 32 0.9 58.5 3.3 79.4-53.5-2.2-105.5-13.9-154.7-34.7z m491.2-96c-41.2 41.2-89.1 73.5-142.4 96-24.4 10.3-49.4 18.4-75 24.1-1.5-0.3-3.2-0.4-5-0.4-3.5 0-7.5 0.5-12 1.7 15.5-65.5 22.9-102.4 54.9-130.2 44-38.2 9.7-80.4-24-80.4-1.9 0-3.9 0.1-5.8 0.4-1.5 0.2-2.8 0.3-4 0.3-22.2 0-7.5-34.9-31.1-36.9-24.8-2.1-57.3-51.4-93.4-68.5-19-9-37.5-33.2-67-34.5h-1.7c-18.6 0-42.3 11.1-54.4 11.1-4.8 0-7.8-1.8-7.8-6.7 0-57.1-5.9-97.7-6.8-113.8-0.4-5.5-2-7.1-1.1-7.1 1.2 0 7.2 3.2 27.8 3.7h0.5c18.6 0 9.7-38.5 28.1-40 0.8-0.1 1.6-0.1 2.4-0.1 16.4 0 47.5 11.8 63.8 11.8 3.4 0 6.1-0.5 7.9-1.7 0.2-0.1 0.4-0.2 0.7-0.2 8.8 0 43.4 86.3 62.8 86.3 8 0 13.4-14.7 13.4-56 0-17.1-9-46.9 0-63.3 35.1-64.2 67.9-116.7 65.1-124.1-0.9-2.3-11.3-4.4-25-4.4-11.7 0-25.7 1.5-38.3 5.6-9.4 3.1 2.8 17.7-10.2 20.8-8.7 2-17.2 2.9-25.2 2.9-38.2 0-65.8-20.3-53.3-39.8 15.9-23.9 72.8-10.6 77.9-58.6 2.3-22.2 4.3-47.2 5.8-68.5 0.5-7.7 6.7-13.7 14.4-14.2 37.2-2.7 41-47 6.2-75.3 37.5 5.4 74.1 15.6 109.2 30.5 53.3 22.6 101.3 54.9 142.4 96 37.4 37.4 67.4 80.3 89.6 127.8-5.7-3.5-11.6-5.2-17.4-5.2-28.3 0-54.2 38.4-38 82-133 102-98.9 173.4-55.5 214 12.8 12 25.4 27.4 36.4 42.7 10.6 14.6 17.2 31.5 21 49.2 1.4 6.4 6.4 9.6 13.7 9.6 11 0 27-7.3 43.1-21.7-22.2 50.3-53.4 95.8-92.7 135.1z'
          }
        ]}
      />
    ]
  }
];

function App() {
  return (
    <IconProvider icongroup={icons}>
      <h1>asdfasdf</h1>
      <Icon name='1' />
      <Icon name='2' />
      <Icon name='earth' spin={100} />
    </IconProvider>
  );
}

export default App;
