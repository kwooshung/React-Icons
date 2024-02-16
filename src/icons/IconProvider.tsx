import styles from './icons.module.less';
import { FC, ReactElement, ReactNode, cloneElement, isValidElement } from 'react';
import IconsContent from './IconsContext';
import { IIconList, IIconProviderProps } from './interfaces';

/**
 * @zh 渲染图标
 * @en Render icon
 * @param {ReactNode[]} icons 图标列表
 * @param {string} prefix 前缀
 * @param {string} viewBox 视图框
 * @returns {ReactNode[]} React节点列表
 */
const renderIcons = (icons: ReactNode[], prefix: string = '', viewBox: string = ''): ReactNode[] => {
  return icons.map((icon: ReactNode, inx: number) => {
    // 确保 icon 是一个有效的 React 元素
    if (isValidElement(icon) && icon.props) {
      const element = icon as ReactElement;
      // 安全地访问 id 属性
      const iconId = element.props.id ? `ks-${prefix ? `${prefix}-` : ''}${element.props.id}` : `ks-icon-${inx}`;
      return cloneElement(element, { id: iconId, viewBox: element.props.viewBox ? element.props.viewBox : viewBox, key: inx });
    }
    return icon;
  });
};

/**
 * @zh 渲染SVG
 * @en Render SVG
 * @param {IIconList[]} icongroup 图标列表组件
 * @param {string} prefix 前缀
 * @returns {ReactNode[]} React节点列表
 */
const renderSvg = (icongroup: IIconList[], prefix: string = ''): ReactNode[] =>
  icongroup.map((group, inx: number) => {
    const { id, className, viewBox, icons } = group;

    return (
      <svg id={`ks-icons-${id ? id : inx}`} className={`${styles['ks-icons']}${className ? ` ${className}` : ''}`} key={inx}>
        {renderIcons(icons, prefix, viewBox)}
      </svg>
    );
  });

/**
 * @zh 组件：图标提供者
 * @en Component: Icon provider
 * @param {IIconProviderProps} props 属性
 * @return {ReactNode} React节点
 */
const IconProvider: FC<IIconProviderProps> = ({ icongroup, prefix = '', children }: IIconProviderProps): ReactNode => {
  const icons = renderSvg(icongroup, prefix);

  return (
    <IconsContent.Provider value={{ prefix, icongroup }}>
      {icons}
      {children}
    </IconsContent.Provider>
  );
};

export default IconProvider;
