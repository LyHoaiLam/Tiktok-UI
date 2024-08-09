import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/layouts/Popper/';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(style);

const defaultFc = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFc }) {
    const [history, setHistory] = useState([{ data: items }]);
    //Lấy phần tử cuối
    const current = history[history.length - 1];

    const renderItems = () => {
        //Thg nào có childrent là object không có là undefined, thêm !! để convert thành boolean
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            console.log(item.children);
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            // visible={true}
            interactive
            delay={[0, 1000]}
            offset={[10, 10]} //Bên phải và chiều cao của Tippy
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Languages"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}

                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}


Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func
}

export default Menu;
