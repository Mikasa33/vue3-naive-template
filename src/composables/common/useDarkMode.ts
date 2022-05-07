const isDark = useDark();

/**
 * @description 暗黑模式
 */
export function useDarkMode() {
  const toggleDark = useToggle(isDark);

  return {
    toggleDark,
  };
}
