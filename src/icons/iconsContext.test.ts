import IconsContext from './IconsContext';

describe('IconsContext 测试', () => {
  it('IconsContext 被成功创建', () => {
    expect(IconsContext).not.toBeUndefined();
  });

  it('IconsContext 默认值符合预期', () => {
    // 检查 IconsContext 是否具有预期的默认值
    const contextDefaultValue = IconsContext._currentValue;
    expect(contextDefaultValue).toEqual({ prefix: '', icons: null });
  });
});
