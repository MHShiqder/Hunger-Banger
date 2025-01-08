import React from 'react';

const SectionTitle = ({SubHeading,Heading}) => {
    return (
        <div className='mx-auto md:w-4/12 text-center my-8'>
            <p className='text-yellow-500 mb-2'>--- {SubHeading} ---</p>
            <h3 className='text-4xl uppercase border-y-2 py-3'>{Heading}</h3>
        </div>
    );
};

export default SectionTitle;