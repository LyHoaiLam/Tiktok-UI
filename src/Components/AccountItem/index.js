import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import style from './Account.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const cx = classNames.bind(style);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {/* Code dưới là data.tick == true thì mới ra tick xanh */}
                    {data.tick && <FontAwesomeIcon className={cx('checkIcon')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.prototype = {
    data: PropTypes.object.isRequired
}

export default AccountItem;
