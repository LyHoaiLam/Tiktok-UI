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
