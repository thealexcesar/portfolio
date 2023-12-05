import Image from "next/image";
import React from "react";

function ImageHero() {
    return (
        <Image
            src='/default_avatar.png'
            alt="Alex's avatar"
            height={800}
            width={800}
            className='object-contain'
            priority={true}
        />
    )
}

export default ImageHero;