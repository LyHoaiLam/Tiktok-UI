import PropTypes from 'prop-types';

import Button from '~/Components/Button';
import style from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate2: data.separate2,
    });
    return (
        // <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
        //     {data.title}
        // </Button>

        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.prototype = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MenuItem;
