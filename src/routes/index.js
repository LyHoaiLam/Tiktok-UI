import Home from '~/Pages/Home/';
import Following from '~/Pages/Following';
import Upload from '~/Pages/Upload';
import { HeaderOnly } from '~/Components/Layout';

//Dành cho không Login vẫn xem đc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

//Dành cho Login mới xem đc

const privateRoutes = [];

//export ra 2 cái làm như này nhìn gọn hơn
export { publicRoutes, privateRoutes };
