import { useState } from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/Components/Layout/Popper/';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(style);

const defaultFc = () => {};

function Menu({ children, items = [], onChange = defaultFc }) {
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
            interactive
            // visible
            // delay={[0, 500]}
            placement="bottom-end"
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

                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
