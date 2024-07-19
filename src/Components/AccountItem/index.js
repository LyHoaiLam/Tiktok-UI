import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import style from './Account.module.scss';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/564x/dc/94/c1/dc94c14dbac131938bee1f94a813bec1.jpg"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon icon={faCheck} />
                </p>
                <span classNames={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
