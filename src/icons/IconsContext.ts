import { createContext } from 'react';
import { IIconsContext } from './interfaces';

/**
 * @zh 图标上下文
 * @en Icon context
 */
const IconsContext = createContext<IIconsContext>({
  prefix: '',
  icongroup: []
});

export default IconsContext;
