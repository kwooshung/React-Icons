import { render } from '@testing-library/react';
import IconProvider from './IconProvider';

describe('IconProvider 组件', () => {
  it('应正确渲染SVG和图标，无 prefix 的情况下', () => {
    const mockIcongroup = [
      {
        id: 'svg-1',
        className: 'class-1',
        viewBox: '0 0 24 24',
        icons: [<symbol id='icon-1' key='1' />, <symbol id='icon-2' key='2' />]
      }
    ];

    const { container } = render(
      <IconProvider icongroup={mockIcongroup}>
        <div>子元素</div>
      </IconProvider>
    );

    const svg = container.querySelector('[class*=class-1]:first-child') as HTMLElement;
    expect(svg.tagName === 'svg').toBeTruthy();
    expect(svg.id === 'ks-icons-svg-1').toBeTruthy();
    expect(svg.querySelector('symbol')?.id === 'ks-icon-1').toBeTruthy();
  });

  it('应正确渲染SVG和图标，有 prefix 的情况下', () => {
    const mockIcongroup = [
      {
        id: 'svg-1',
        className: 'class-1',
        viewBox: '0 0 24 24',
        icons: [<symbol id='icon-1' key='1' />, <symbol id='icon-2' key='2' />]
      }
    ];

    const { container } = render(
      <IconProvider icongroup={mockIcongroup} prefix='test-prefix'>
        <div>子元素</div>
      </IconProvider>
    );

    const svg = container.querySelector('[class*=class-1]:first-child') as HTMLElement;
    expect(svg.tagName === 'svg').toBeTruthy();
    expect(svg.querySelector('symbol')?.id === 'ks-test-prefix-icon-1').toBeTruthy();
  });

  it('应正确渲染SVG和图标，无 svg-id 的情况下', () => {
    const mockIcongroup = [
      {
        className: 'class-1',
        viewBox: '0 0 24 24',
        icons: [<symbol id='icon-1' key='1' />, <symbol id='icon-2' key='2' />]
      }
    ];

    const { container } = render(
      <IconProvider icongroup={mockIcongroup}>
        <div>子元素</div>
      </IconProvider>
    );

    const svg = container.querySelector('[class*=class-1]:first-child') as HTMLElement;
    expect(svg.tagName === 'svg').toBeTruthy();
    expect(svg.querySelector('symbol')?.id === 'ks-icon-1').toBeTruthy();
  });

  it('应正确渲染SVG和图标，无 svg-classname 的情况下', () => {
    const mockIcongroup = [
      {
        viewBox: '0 0 24 24',
        icons: [<symbol id='icon-1' key='1' />, <symbol id='icon-2' key='2' />]
      }
    ];

    const { container } = render(
      <IconProvider icongroup={mockIcongroup}>
        <div>子元素</div>
      </IconProvider>
    );

    const svg = container.querySelector('svg:first-child') as HTMLElement;
    expect(svg.id === 'ks-icons-0').toBeTruthy();
  });

  it('应正确渲染SVG和图标，无 symbol-id 的情况下', () => {
    const mockIcongroup = [
      {
        viewBox: '0 0 24 24',
        icons: [<symbol key='1' />, <symbol key='2' />]
      }
    ];

    const { container } = render(
      <IconProvider icongroup={mockIcongroup}>
        <div>子元素</div>
      </IconProvider>
    );

    const svg = container.querySelector('svg:first-child') as HTMLElement;
    expect(svg.id === 'ks-icons-0').toBeTruthy();
  });

  it('应正确渲染SVG，无 symbol 的情况下', () => {
    const mockIcongroup = [
      {
        viewBox: '0 0 24 24',
        icons: [<path key='1' />]
      }
    ];

    const { container } = render(
      <IconProvider icongroup={mockIcongroup}>
        <div>子元素</div>
      </IconProvider>
    );

    const svg = container.querySelector('svg:first-child') as HTMLElement;
    expect(svg.tagName === 'svg').toBeTruthy();
  });
});
