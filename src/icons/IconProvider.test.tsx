import { render } from '@testing-library/react';
import IconProvider from './IconProvider';

describe('IconProvider 组件', () => {
  it('应正确渲染SVG和图标，无 prefix 的情况下', () => {
    const { container } = render(
      <IconProvider
        icons={
          <>
            <symbol id='abc-1' />
            <symbol id='abc-2' />
          </>
        }>
        <div>子元素</div>
      </IconProvider>
    );

    const svg = container.querySelector('svg:last-child') as HTMLElement;
    expect(svg.tagName === 'svg').toBeTruthy();
    expect(svg.querySelector('symbol')?.id === 'ks-icon-abc-1').toBeTruthy();
  });

  it('应正确渲染SVG和图标，有 prefix 的情况下', () => {
    const { container } = render(
      <IconProvider
        icons={
          <>
            <symbol id='abc-1' />
            <symbol id='abc-2' />
          </>
        }
        prefix='test-prefix'>
        <div>子元素</div>
      </IconProvider>
    );
    const svg = container.querySelector('svg:last-child') as HTMLElement;
    expect(svg.tagName === 'svg').toBeTruthy();
    expect(svg.querySelector('symbol')?.id === 'ks-icon-test-prefix-abc-1').toBeTruthy();
  });

  it('应正确渲染SVG和图标，无 symbol-id 的情况下', () => {
    const { container } = render(
      <IconProvider
        icons={
          <>
            <symbol />
            <symbol />
          </>
        }>
        <div>子元素</div>
      </IconProvider>
    );
    const svg = container.querySelector('svg:last-child') as HTMLElement;
    expect(svg.querySelector('symbol')?.id === 'ks-icon-0').toBeTruthy();
  });

  it('应正确渲染SVG，无 symbol 的情况下', () => {
    const { container } = render(
      <IconProvider icons={<></>}>
        <div>子元素</div>
      </IconProvider>
    );
    const svg = container.querySelector('svg:last-child') as HTMLElement;
    expect(svg.tagName === 'svg').toBeTruthy();
    expect(svg.querySelector('symbol') === null).toBeTruthy();
  });

  it('应正确渲染SVG，存在非 symbol 是否能正常渲染', () => {
    const { container } = render(
      <IconProvider
        prefix='test-prefix'
        icons={
          <>
            <div id='abc'></div>
            <symbol id='abc-1' />
          </>
        }>
        <div>子元素</div>
      </IconProvider>
    );
    const svg = container.querySelector('svg:last-child') as HTMLElement;
    expect(svg.tagName === 'svg').toBeTruthy();
    expect(svg.querySelector('#abc')?.id === 'abc').toBeTruthy();
    expect(svg.querySelector('symbol')?.id === 'ks-icon-test-prefix-abc-1').toBeTruthy();
  });
});
