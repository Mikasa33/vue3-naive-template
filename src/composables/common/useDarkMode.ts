const isDark = useDark();

/**
 * @description unocss 暗黑模式
 */
export function useDarkMode() {
  const toggle = useToggle(isDark);

  return {
    isDark,
    toggle,
  };
}
