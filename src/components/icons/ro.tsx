import * as React from 'react';
import { IconProps } from './index';

const Romania: React.FC<IconProps> = ({ fill, filled, size, height, width, label, ...props }) => {
    return (
        <svg
            data-name="Iconly/Curved/Activity"
            xmlns="http://www.w3.org/2000/svg"
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            {...props}
        >
            <g fillRule="evenodd">
                <path fill="#00319c" d="M0 0h213.3v480H0z" />
                <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z" />
                <path fill="#de2110" d="M426.7 0H640v480H426.7z" />
            </g>
        </svg>
    );
};

export default Romania;
