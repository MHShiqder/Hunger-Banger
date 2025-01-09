import React from 'react';
import { Background } from 'react-parallax';
import { Parallax } from 'react-parallax';

const CoverWithImage = ({ img, title, subTitle }) => {
    return (
        <div>
            
            <Parallax strength={-200}  bgImage={img}  >                
                <div
                className="hero  h-[500px] "
                >
                <div className="hero-overlay bg-opacity-15"></div>
                <div className="hero-content text-neutral-content text-center px-48 py-16 bg-opacity-55 bg-black">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">
                            {subTitle}
                        </p>

                    </div>
                </div>
            </div>
            </Parallax>
        </div>
    );
};

export default CoverWithImage;