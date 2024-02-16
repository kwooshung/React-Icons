import { FC, ReactNode, useContext } from 'react';
import IconsContext from './IconsContext';
import { ISymbol } from './interfaces';
import styles from './icons.module.less';

/**
 * @zh 组件：图标 Symbol
 * @en Component: Icon Symbol
 * @param {IIconsProps} props 属性
 * @return {ReactNode} React节点
 */
const Symbol: FC<ISymbol> = ({ name, viewBox, type = 'fill', className, path }: ISymbol): ReactNode => {
  const { prefix } = useContext(IconsContext);

  // 渲染单个或多个 path 元素
  const renderPaths = () =>
    Array.isArray(path) ? (
      path.map((p, index) => <path {...p} key={index} className={`${styles[`ks-icon-${p.type ?? type}`]}${p.className ? ` ${p.className}` : ''}`} />)
    ) : (
      <path {...path} className={`${styles[`ks-icon-${path.type ?? type}`]}${path.className ? ` ${path.className}` : ''}`} />
    );

  return (
    <symbol id={`ks-icon-${prefix ? `${prefix}-` : ''}${name}`} className={`${styles[`ks-icon-${type}`]}${className ? ` ${className}` : ''}`} viewBox={viewBox}>
      {renderPaths()}
    </symbol>
  );
};

export default Symbol;
