import styles from './icons.module.less';
import { Children, FC, ReactNode, cloneElement, isValidElement, useEffect, useState } from 'react';
import IconsContent from './IconsContext';
import { IconProviderProps } from './interfaces';

/**
 * @zh 组件：图标提供者
 * @en Component: Icon provider
 * @param {IconProviderProps} props 属性
 * @return {ReactNode} React节点
 */
const IconProvider: FC<IconProviderProps> = ({ icons, prefix = '', children }: IconProviderProps): ReactNode => {
  const [modifiedIcon, setModifiedIcon] = useState<JSX.Element>(icons);

  useEffect(() => {
    const newIcons = Children.map(icons.props.children, (child: JSX.Element, inx: number) => {
      if (isValidElement(child) && child.type === 'symbol') {
        const attrid = (child.props as any).id;
        const newId = `ks-icon-${prefix ? `${prefix}-` : ''}${attrid ?? inx}`;
        return cloneElement(child, { id: newId } as any);
      }
      return child;
    });

    setModifiedIcon(<svg className={styles['ks-icons']}>{newIcons}</svg>);
  }, [icons, prefix]);

  return (
    <IconsContent.Provider value={{ prefix, icons: modifiedIcon }}>
      {modifiedIcon}
      {children}
    </IconsContent.Provider>
  );
};

export default IconProvider;
