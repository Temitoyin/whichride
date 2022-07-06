import React from 'react';

const Icon = props => {
    if (props.name === '') {
        return null;
    }

    try {
        const Image = require(`./stock/${props.name}`).default;

        if (Image) {
            return (
                <Image
                    aria-label={props.name}
                    className={`icon ${props.className}`}
                    {...props}
                />
            );
        }
        return null;
    } catch (error) {
        console.error('Icon not found', error);
        return null;
    }
};

export default Icon;
