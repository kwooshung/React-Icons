import styles from './icons.module.less';
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
  const classNames: string[] = [];

  classNames.push(styles['ks-icon']);
  className && classNames.push(className);
  return classNames.join(' ');
};

/**
 * @zh 获取样式
 * @en Get style
 * @param {number} size 尺寸
 * @param {number} rotate 旋转角度
 * @param {number | boolean} spin 旋转动画
 * @returns {CSSProperties} 样式
 */
const getStyle = (size: number = 0, rotate?: number, spin?: number | boolean): CSSProperties => {
  const styles: CSSProperties = {};

  size && (styles.fontSize = `${size}px`);
  rotate && (styles.transform = `rotate(${rotate}deg)`);
  if (typeof spin === 'boolean' && spin === true) {
    styles.animation = 'ks-icon-spin 10ms infinite linear';
  } else if (typeof spin === 'number') {
    styles.animation = `ks-icon-spin ${spin * 10}ms infinite linear`;
  }

  return styles;
};

/**
 * @zh 组件：图标
 * @en Component: Icon
 * @param {IconProps} props 属性
 * @return {ReactNode} React节点
 */
const Icon: FC<IconProps> = ({ name, id = undefined, className = '', size = 0, rotate = 0, spin = false, onClick, onDoubleClick }: IconProps): ReactNode => {
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
  const [getStyles, setStyles] = useState<CSSProperties>(getStyle(size, rotate, spin));

  /**
   * @zh 设置前缀
   * @en Set prefix
   */
  const [getPrefix, setPrefix] = useState<string>(name);

  useEffect(() => {
    setCls(getClassName(className));
  }, [className]);

  useEffect(() => {
    setStyles(getStyle(size, rotate, spin));
  }, [size, rotate, spin]);

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
