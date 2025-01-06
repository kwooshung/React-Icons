import { render, fireEvent } from '@testing-library/react';
import IconProvider from './IconProvider';
import Icon from '.';

describe('Icon 组件', () => {
  it('应正确渲染图标', () => {
    const { container } = render(
      <IconProvider icons={<></>} prefix='kkkkk'>
        <Icon name='test-icon' />
      </IconProvider>
    );
    const svg = container.querySelector('svg:first-child') as SVGSVGElement;
    expect(svg).toBeTruthy();
    const useElement = svg.querySelector('use:first-child');
    expect(useElement).toBeTruthy();
    const href = useElement?.getAttribute('xlink:href');
    expect(href).toBe('#ks-icon-kkkkk-test-icon');
  });

  it('应当应用正确的 ID 和 Class', () => {
    const { container } = render(
      <IconProvider icons={<></>}>
        <Icon name='test-icon' id='test-id' className='test-class' />
      </IconProvider>
    );

    const svg = container.querySelector('svg:first-child') as SVGSVGElement;
    expect(svg.id).toBe('test-id');
    expect(svg.classList.contains('test-class')).toBeTruthy();
  });

  it('点击事件应当被触发', () => {
    const handleClick = vi.fn();
    const { container } = render(
      <IconProvider icons={<></>}>
        <Icon name='test-icon' onClick={handleClick} />
      </IconProvider>
    );

    const svg = container.querySelector('svg:first-child') as SVGSVGElement;
    fireEvent.click(svg);
    expect(handleClick).toHaveBeenCalled();
  });

  it('双击事件应当被触发', () => {
    const handleDoubleClick = vi.fn();
    const { container } = render(
      <IconProvider icons={<></>}>
        <Icon name='test-icon' onDoubleClick={handleDoubleClick} />
      </IconProvider>
    );

    const svg = container.querySelector('svg:first-child') as SVGSVGElement;
    fireEvent.doubleClick(svg);
    expect(handleDoubleClick).toHaveBeenCalled();
  });
});
