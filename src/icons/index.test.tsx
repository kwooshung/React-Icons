import { render, fireEvent } from '@testing-library/react';
import IconProvider from './IconProvider';
import Icon from './index';

describe('Icon 组件', () => {
  it('应正确渲染图标', () => {
    const { container } = render(
      <IconProvider icongroup={[]} prefix='kkkkk'>
        <Icon name='test-icon' />
      </IconProvider>
    );

    const svg = container.querySelector('svg') as SVGSVGElement;
    expect(svg).toBeTruthy();
    const useElement = svg.querySelector('use:first-child');
    expect(useElement).toBeTruthy();
    const href = useElement?.getAttribute('xlink:href');
    expect(href).toBe('#ks-icon-kkkkk-test-icon');
  });

  it('应当应用正确的 ID 和 Class', () => {
    const { container } = render(
      <IconProvider icongroup={[]}>
        <Icon name='test-icon' id='test-id' className='test-class' />
      </IconProvider>
    );

    const svg = container.querySelector('svg') as SVGSVGElement;
    expect(svg.id).toBe('test-id');
    expect(svg.classList.contains('test-class')).toBeTruthy();
  });

  it('应当应用正确的尺寸和旋转样式', () => {
    const { container } = render(
      <IconProvider icongroup={[]}>
        <Icon name='test-icon' size={24} rotate={45} />
      </IconProvider>
    );

    const svg = container.querySelector('svg') as SVGSVGElement;
    expect(svg.style.fontSize).toBe('24px');
    expect(svg.style.transform).toBe('rotate(45deg)');
  });

  it('应当应用旋转动画样式 - 1', () => {
    const { container } = render(
      <IconProvider icongroup={[]}>
        <Icon name='test-icon' spin={true} />
      </IconProvider>
    );

    const svg = container.querySelector('svg') as SVGSVGElement;
    expect(svg.style.animation).toContain('ks-icon-spin');
  });

  it('应当应用旋转动画样式 - 2', () => {
    const { container } = render(
      <IconProvider icongroup={[]}>
        <Icon name='test-icon' spin={1000} />
      </IconProvider>
    );

    const svg = container.querySelector('svg') as SVGSVGElement;
    expect(svg.style.animation).toContain('ks-icon-spin');
  });

  it('点击事件应当被触发', () => {
    const handleClick = vi.fn();
    const { container } = render(
      <IconProvider icongroup={[]}>
        <Icon name='test-icon' onClick={handleClick} />
      </IconProvider>
    );

    const svg = container.querySelector('svg') as SVGSVGElement;
    fireEvent.click(svg);
    expect(handleClick).toHaveBeenCalled();
  });

  it('双击事件应当被触发', () => {
    const handleDoubleClick = vi.fn();
    const { container } = render(
      <IconProvider icongroup={[]}>
        <Icon name='test-icon' onDoubleClick={handleDoubleClick} />
      </IconProvider>
    );

    const svg = container.querySelector('svg') as SVGSVGElement;
    fireEvent.doubleClick(svg);
    expect(handleDoubleClick).toHaveBeenCalled();
  });
});
