import config from '~/Config';
import Home from '~/Pages/Home/';
import Following from '~/Pages/Following';
import Upload from '~/Pages/Upload';
import { HeaderOnly } from '~/layouts';
import Profile from '~/Pages/Profile';
import Search from '~/layouts/DefaultLayout/Search';

//Dành cho không Login vẫn xem đc
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

//Dành cho Login mới xem đc

const privateRoutes = [];

//export ra 2 cái làm như này nhìn gọn hơn
export { publicRoutes, privateRoutes };
