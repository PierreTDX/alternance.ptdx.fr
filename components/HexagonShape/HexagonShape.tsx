type HexagonShapeProps = {
    number: number;
    fill?: string;
    textColor?: string;
    stroke?: string;
    strokeWidth?: number;
    className?: string;
};

const HexagonShape: React.FC<HexagonShapeProps> = ({
    number,
    fill = "currentColor",
    textColor = "#1f1d1d",
    stroke = "#14b8a6",
    strokeWidth = 2,
    className = "",
}) => {
    return (
        <svg
            width="90"
            height="108"
            viewBox="0 0 90 108"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M 0 90 L 45 108 L 90 90 L 90 0 L 45 18 L 0 0 Z"
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
            <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="32"
                fontWeight="bold"
                fill={textColor}
            >
                {number}
            </text>
        </svg>
    );
};

export default HexagonShape;