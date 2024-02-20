import { ReactNode } from 'react';
/**
 * @zh 图标上下文
 * @en Icon context
 */
export interface IconsContext {
  /**
   * @zh 前缀，默认空
   * @en Prefix, default empty
   */
  prefix?: string;
  /**
   * @zh 图标列表组件
   * @en Icon list component
   */
  icons: any;
}

/**
 * @zh 图标提供者Props属性
 * @en Icon provider props
 */
export interface IconProviderProps {
  /**
   * @zh 图标列表组件
   * @en Icon list component
   */
  icons: JSX.Element;
  /**
   * @zh 前缀，默认空
   * @en Prefix, default empty
   */
  prefix?: string;
  /**
   * @zh 子元素
   * @en Sub element
   */
  children: ReactNode;
}

/**
 * @zh 组件Props属性
 * @en Component props
 */
export interface IconProps {
  /**
   * @zh 名称
   * @en Name
   */
  name: string;
  /**
   * @zh ID 样式
   * @en ID style
   */
  id?: string;
  /**
   * @zh 类 样式
   * @en Class style
   */
  className?: string;
  /**
   * @zh 尺寸，单位 px，默认 0，则继承父元素的字体大小
   * @en Size, unit px, default 0, then inherit the font size of the parent element
   */
  size?: number;
  /**
   * @zh 旋转角度，默认 0
   * @en Rotation angle, default 0
   */
  rotate?: number;
  /**
   * @zh 旋转动画，如果为真，则1秒1圈，最多1000个间隔（也就是10000毫秒，即10秒）如果为1，也就是说1个10毫秒间隔的动画，也就是10毫秒一圈
   * @en Rotation animation, if true, 1 circle per second, up to 1000 intervals (that is, 10000 milliseconds, 10 seconds) if 1, that is, an animation with a 10 millisecond interval, that is, 10 milliseconds per circle
   */
  spin?: number | boolean;
  /**
   * @zh 点击事件
   * @en Click event
   * @param {MouseEvent<SVGSVGElement>} e 事件对象
   */
  onClick?: (e: MouseEvent<SVGSVGElement>) => void;
  /**
   * @zh 双击事件
   * @en Double click event
   * @param {MouseEvent<SVGSVGElement>} e 事件对象
   */
  onDoubleClick?: (e: MouseEvent<SVGSVGElement>) => void;
}
