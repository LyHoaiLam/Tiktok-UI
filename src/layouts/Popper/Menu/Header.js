import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Header({ title, onBack }) {
    return (
        <div className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </button>

            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}
Header.prototype = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.string.isRequired
}

export default Header;
