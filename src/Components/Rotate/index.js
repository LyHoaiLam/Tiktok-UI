import React from 'react';

const styles = {
    gallery: {
        position: 'relative',
        width: '200px',
        height: '168px',
        transformStyle: 'preserve-3d',
        animation: 'rotate 15s linear infinite',
    },
    span: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        transformOrigin: 'center',
        transformStyle: 'preserve-3d',
    },
    img: {
        position: 'absolute',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
    },
};

const RotateImg = () => {
    const items = [
        {
            img: 'https://i.pinimg.com/736x/c9/3f/2b/c93f2b88970404557d200ea68263b9c6.jpg',
            link: 'https://www.pinterest.com/pin/10907224091705383/',
        },
        {
            img: 'https://i.pinimg.com/736x/c4/3c/cc/c43ccc9613fd21de6df450b051d4b7df.jpg',
            link: 'https://www.pinterest.com/pin/10907224091705383/',
        },
        {
            img: 'https://i.pinimg.com/736x/ad/c4/36/adc43685628f6b4ca2288622ecb790e2.jpg',
            link: 'https://www.pinterest.com/pin/40743571623543468/',
        },
        {
            img: 'https://i.pinimg.com/736x/f9/0f/19/f90f1968f36e98b186f0bf7bac7f4e4c.jpg',
            link: 'https://www.pinterest.com/pin/50384089574976447/',
        },
        {
            img: 'https://i.pinimg.com/736x/0b/43/c1/0b43c13eb92634ef73ea3a8b5115c3d5.jpg',
            link: 'https://www.pinterest.com/pin/26740191530565079/',
        },
        {
            img: 'https://i.pinimg.com/736x/82/cf/c8/82cfc86b86b472201097388461ee7dce.jpg',
            link: 'https://www.pinterest.com/pin/63120832273209504/',
        },
        {
            img: 'https://i.pinimg.com/736x/7b/b6/47/7bb647cf753d79eee779140bb0bf1583.jpg',
            link: 'https://www.pinterest.com/pin/48132289762908609/',
        },
        {
            img: 'https://i.pinimg.com/736x/df/c0/41/dfc041143bf63164f8eabc5a0adbcc11.jpg',
            link: 'https://www.pinterest.com/pin/100838479150620701/',
        },
        {
            img: 'https://i.pinimg.com/736x/ac/1e/fd/ac1efd67054daee907d817489fa2bfaf.jpg',
            link: 'https://www.pinterest.com/pin/16044142416859220/',
        },
    ];

    return (
        <div style={{ marginLeft: '400px', marginTop: '100px' }}>
            <style>
                {`
                    @keyframes rotate {
                        0% {
                            transform: perspective(1200px) rotateY(0deg);
                        }
                        100% {
                            transform: perspective(1200px) rotateY(360deg);
                        }
                    }
                `}
            </style>
            <div style={styles.gallery}>
                {items.map((item, i) => (
                    <span key={i} style={{ ...styles.span, transform: `rotateY(${i * 40}deg) translateZ(420px)` }}>
                        <a target="_blank" href={item.link}>
                            <img style={styles.img} src={item.img} alt={`Image ${i + 1}`} />
                        </a>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RotateImg;
