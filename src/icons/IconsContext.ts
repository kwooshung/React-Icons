import { createContext } from 'react';
import { IconsContext as IIconsContext } from './interfaces';

/**
 * @zh 图标上下文
 * @en Icon context
 */
const IconsContext = createContext<IIconsContext>({
  prefix: '',
  icons: null
});

export default IconsContext;
