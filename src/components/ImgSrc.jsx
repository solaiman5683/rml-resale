import React from 'react';

function ImgSrc({src}) {
    let linkSrc = "https://api.rangsmotors.com?file_name=img_src&imgSr="+src;
    return (
        <img src={linkSrc} alt="ImgSource" /> 
    );
}

export default ImgSrc;