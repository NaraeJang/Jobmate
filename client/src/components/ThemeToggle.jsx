import Wrapper from '../assets/wrappers/ThemeToggle';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useDashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper type="button" onClick={toggleDarkTheme}>
      {isDarkTheme ? <LuSun /> : <LuMoon />}
    </Wrapper>
  );
};
export default ThemeToggle;
