import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy2 from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Button from '~/Components/Button';
import Menu from '../../Popper/Menu';
import { UploadIcon, MessageIcon } from '~/Components/icons';
import Image from '~/Components/Image';
import Search from '../Search';
import style from './Header.module.scss';
import images from '~/assets/images';
import routesConfig from '~/Config/routes';

const cx = classNames.bind(style);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        //Thg nào có Children có có cấp 2
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    type: 'language',
                    code: 'fra',
                    title: 'France',
                    // children: {
                    //     title: 'Languages',
                    //     data: [
                    //         {
                    //             code: 'en',
                    //             title: 'English 3999',
                    //         },
                    //         {
                    //             code: 'vi',
                    //             title: 'Việt Nam 3999',
                    //         },
                    //         {
                    //             code: 'fra',
                    //             title: 'France 3999',
                    //         },
                    //     ],
                    // },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoailam',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/@coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            //Thag nào có thuộc tính này thì sẽ có vạch
            separate2: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className={cx('logoLink')}>
                        <img src={images.logo} alt="imgLogo" />
                    </Link>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="118" height="42" fill="currentColor" alt="TikTok">
                        <path
                            fill="#25F4EE"
                            d="M9.875 11.842v-1.119A9 9 0 0 0 8.7 10.64c-4.797-.006-8.7 3.9-8.7 8.708a8.7 8.7 0 0 0 3.718 7.134A8.68 8.68 0 0 1 1.38 20.55c0-4.737 3.794-8.598 8.495-8.707"
                        ></path>
                        <path
                            fill="#25F4EE"
                            d="M10.087 24.526c2.14 0 3.89-1.707 3.966-3.83l.007-18.968h3.462a7 7 0 0 1-.109-1.202h-4.727l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.9 3.9 0 0 1-1.846-.46 3.95 3.95 0 0 0 3.22 1.662m13.905-16.36V7.111a6.5 6.5 0 0 1-3.584-1.067 6.57 6.57 0 0 0 3.584 2.122"
                        ></path>
                        <path
                            fill="#FE2C55"
                            d="M20.41 6.044a6.54 6.54 0 0 1-1.617-4.316h-1.265a6.56 6.56 0 0 0 2.881 4.316M8.707 15.365a3.98 3.98 0 0 0-3.974 3.976c0 1.528.87 2.858 2.134 3.523a3.94 3.94 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.41 0 .805.07 1.176.185v-4.833a9 9 0 0 0-1.176-.083c-.07 0-.134.006-.204.006v3.708a4 4 0 0 0-1.175-.185"
                        ></path>
                        <path
                            fill="#FE2C55"
                            d="M23.992 8.166v3.676a11.25 11.25 0 0 1-6.579-2.116v9.622c0 4.8-3.903 8.713-8.706 8.713a8.67 8.67 0 0 1-4.99-1.579 8.7 8.7 0 0 0 6.37 2.781c4.797 0 8.706-3.906 8.706-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73q-.718-.002-1.38-.148"
                        ></path>
                        <path
                            // fill="white"
                            fill="balck"
                            d="M17.413 19.348V9.726a11.25 11.25 0 0 0 6.58 2.116V8.166a6.57 6.57 0 0 1-3.584-2.122 6.6 6.6 0 0 1-2.887-4.316h-3.463l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.99 3.99 0 0 1-3.225-1.656 3.99 3.99 0 0 1-2.134-3.523A3.98 3.98 0 0 1 8.7 15.372c.409 0 .805.07 1.176.185v-3.708c-4.702.103-8.496 3.964-8.496 8.701 0 2.29.888 4.373 2.338 5.933a8.67 8.67 0 0 0 4.989 1.58c4.797 0 8.706-3.913 8.706-8.715M30.048 8.179h14.775l-1.355 4.232h-3.832v15.644h-4.778V12.41l-4.804.006zm38.984 0h15.12l-1.354 4.232h-4.172v15.644h-4.784V12.41l-4.803.006zM45.73 14.502h4.733v13.553h-4.708zm6.617-6.374h4.733v9.257l4.689-4.61h5.647l-5.934 5.76 6.643 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236h-4.733V8.128zm50.143 0h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734zm-54.396 4.826a2.384 2.384 0 1 0-.002-4.771 2.384 2.384 0 0 0 .002 4.771"
                        ></path>
                        <path
                            fill="#25F4EE"
                            d="M83.545 19.942a8.11 8.11 0 0 1 7.473-8.087 9 9 0 0 0-.709-.026c-4.478 0-8.106 3.631-8.106 8.113s3.628 8.113 8.106 8.113c.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087"
                        ></path>
                        <path
                            fill="#FE2C55"
                            d="M92.858 11.83c-.217 0-.505.012-.715.025a8.11 8.11 0 0 1 7.467 8.087 8.11 8.11 0 0 1-7.467 8.087c.21.02.498.026.715.026 4.478 0 8.106-3.631 8.106-8.113s-3.628-8.113-8.106-8.113"
                        ></path>
                        <path
                            fill="white"
                            d="M91.58 23.887a3.94 3.94 0 0 1-3.94-3.945 3.94 3.94 0 1 1 7.882 0c0 2.18-1.77 3.945-3.941 3.945m0-12.058c-4.477 0-8.105 3.631-8.105 8.113s3.628 8.113 8.106 8.113 8.106-3.631 8.106-8.113-3.629-8.113-8.106-8.113"
                        ></path>
                    </svg> */}
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy2 content="Upload Video" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy2>

                            <Tippy2 content="Message" placement="bottom" delay={[0, 50]}>
                                <button className={cx('actions-btn')} content="Message">
                                    <MessageIcon />
                                </button>
                            </Tippy2>

                            {/* <Tippy2 content="Inbox" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy2> */}
                        </>
                    ) : (
                        <>
                            {/* <Button primary href="https://www.youtube.com/watch?v=cJCS6DuKwE0" target="_blank">  target="_blank" dùng làm tab qua page khác*/}
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>

                            {/* <Button outline>Login</Button> */}

                            {/* <Button primary large>
                            Login
                            </Button> */}
                            {/* <Button primary small>
                                Login
                            </Button> */}
                            {/* <Button primary disable>
                                Login
                            </Button> */}

                            {/* <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Login
                            </Button> */}

                            {/* <Button
                                primary
                                leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                                rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                            >
                                Login
                            </Button> */}

                            {/* cx này là của bên Header chứ không phải bên Button */}
                            {/* <Button rounded className={cx('custome-login')}>
                                Upload
                            </Button> */}
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://i.pinimg.com/564x/66/c3/f3/66c3f301147f6902ea8089badc741134.jpg"
                                alt=""
                                fallback="https://i.pinimg.com/564x/f1/61/99/f16199151f943744fb20446845e8d073.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
