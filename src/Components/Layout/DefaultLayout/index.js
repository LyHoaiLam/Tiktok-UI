import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import RotateImg from '~/Components/Rotate';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                <div className={cx('content')}>{/* <RotateImg /> */}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
