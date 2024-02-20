import { createContext } from 'react';
import { IconsContext } from './interfaces';

/**
 * @zh 图标上下文
 * @en Icon context
 */
const IconsContext = createContext<IconsContext>({
  prefix: '',
  icons: null
});

export default IconsContext;
