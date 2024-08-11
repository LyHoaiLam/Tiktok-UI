import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import Header from '~/layouts/Components/Header';
import Sidebar from '~/layouts/Components/Sidebar';

// import RotateImg from '~/Components/Rotate';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                {/* <div className={cx('content')}></div> */}
            </div>
        </div>
    );
}

export default DefaultLayout;
