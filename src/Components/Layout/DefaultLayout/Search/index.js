import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import Tippy2 from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/Components/Layout/Popper/';
import AccountItem from '~/Components/AccountItem';
import { SearchIcon } from '~/Components/icons';
const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        });
    }, []);

    return (
        <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search Account and Videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                />

                {!!searchValue && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                {/* <Tippy content="Tìm Kiếm" placement="right"> */}

                <button className={cx('search-btn')}>
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                    <SearchIcon />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
