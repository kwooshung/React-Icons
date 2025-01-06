import { FC, ReactNode, useEffect, useState, MouseEvent, useContext, CSSProperties, memo } from 'react';
import { IconProps } from './interfaces';
import IconsContext from './IconsContext';

/**
 * @zh 获取类名
 * @en Get class name
 * @param {string} className 类名
 * @returns {string} 类名
 */
const getClassName = (className: string): string => {
  const classNames: string[] = ['ks-icon'];

  className && classNames.push(className);
  return classNames.join(' ');
};

/**
 * @zh 获取样式
 * @en Get style
 * @param {number} size 尺寸
 * @returns {CSSProperties} 样式
 */
const getStyle = (size: number = 0, rotate?: number): CSSProperties => {
  const styles: CSSProperties = { width: '1em', height: '1em' };

  size && (styles.fontSize = `${size}px`);
  rotate && (styles.transform = `rotate(${rotate}deg)`);

  return styles;
};

/**
 * @zh 组件：图标
 * @en Component: Icon
 * @param {IconProps} props 属性
 * @return {ReactNode} React节点
 */
const Icon: FC<IconProps> = ({ name, id = undefined, className = '', size = 0, rotate = 0, onClick, onDoubleClick }: IconProps): ReactNode => {
  /**
   * @zh 图标上下文
   * @en Icon context
   */
  const { prefix } = useContext(IconsContext);

  /**
   * @zh 样式类名
   * @en Style class name
   */
  const [getCls, setCls] = useState<string>(getClassName(className));

  /**
   * @zh 样式
   * @en Style
   */
  const [getStyles, setStyles] = useState<CSSProperties>(getStyle(size, rotate));

  /**
   * @zh 设置前缀
   * @en Set prefix
   */
  const [getPrefix, setPrefix] = useState<string>(name);

  useEffect(() => {
    setCls(getClassName(className));
  }, [className]);

  useEffect(() => {
    setStyles(getStyle(size, rotate));
  }, [size, rotate]);

  useEffect(() => {
    setPrefix(`ks-icon-${prefix ? `${prefix}-` : ''}${name}`);
  }, [name, prefix]);

  /**
   * @zh 点击事件
   * @en Click event
   * @param {MouseEvent<SVGSVGElement>} e 事件对象
   */
  const handleClick = (e: MouseEvent<SVGSVGElement>) => {
    onClick && onClick(e);
  };

  /**
   * @zh 双击事件
   * @en Double click event
   * @param {MouseEvent<SVGSVGElement>} e 事件对象
   */
  const handleDoubleClick = (e: MouseEvent<SVGSVGElement>) => {
    onDoubleClick && onDoubleClick(e);
  };

  return (
    <svg id={id} className={getCls} style={getStyles} onClick={handleClick} onDoubleClick={handleDoubleClick}>
      <use xlinkHref={`#${getPrefix}`} />
    </svg>
  );
};

export default memo(Icon);
