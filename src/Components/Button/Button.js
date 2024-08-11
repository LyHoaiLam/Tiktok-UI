import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text,
    //Nếu để là text = true thì các button có backgroundColor cũng sẽ có viền dưới text khi Hover vào (Chúng ta chỉ muốn mỗi button có text khi Hover là có viền bên dưới thôi)
    disable,
    rounded = false,
    leftIcon,
    rightIcon,
    children,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        //Khi có class disbale thì không có Click (xóa event Click luôn)
        // delete _props.onClick;

        //Cách 2
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        leftIcon,
        rightIcon,
        rounded,
        //Sau này cần custome gì thì css cho nó vào class rồi add class đó vào bên cx bên kia
        //Khi có className thì nó lấy giá trị className làm key ở đây (trong trường hợp này là custome-login bên Header)
        [className]: className,
    });

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}> {leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}> {rightIcon}</span>}
        </Comp>
    );
}

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button;
