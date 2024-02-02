import { Outlet, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Loading } from '../components';

const DashboardLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <Wrapper>
      <div className="dashboard-page">
        {isPageLoading ? <Loading /> : <Outlet />}
      </div>
    </Wrapper>
  );
};
export default DashboardLayout;
