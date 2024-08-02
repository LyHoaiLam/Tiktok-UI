import Home from '~/Pages/Home/';
import Following from '~/Pages/Following';
import Upload from '~/Pages/Upload';
import { HeaderOnly } from '~/Components/Layout';
import Profile from '~/Pages/Profile';
import Search from '~/Components/Layout/DefaultLayout/Search';
import routesConfig from '~/Config/routes';

//Dành cho không Login vẫn xem đc
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

//Dành cho Login mới xem đc

const privateRoutes = [];

//export ra 2 cái làm như này nhìn gọn hơn
export { publicRoutes, privateRoutes };
