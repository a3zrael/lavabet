import img1 from "./img/img1.svg";
import logo1 from "./img/logo1.png";

export const arrayData = [
    { logo: logo1, img: img1 },
    { logo: logo1, img: img1, }, { logo: logo1, img: img1, }
]


export const list = [
    { value: "en", label: "En" },
    { value: "1", label: "Ru" },
    { value: "2n", label: "En" },
    { value: "3u", label: "Ru" },
    { value: "4n", label: "En" },
    { value: "5u", label: "Ru" },
    { value: "6n", label: "En" },
    { value: "7u", label: "Ru" },
];

export const colorStyles = {
    valueContainer: () => ({
        maxWidth: '75%',
        whiteSpace: 'nowrap',
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
        height: '40px',
        'text-decoration': 'none',
        outline: 'none',
    }),
    control: (styles) => ({
        ...styles,
        backgroundColor: "black",
        border: 'none',
        color: 'white',
    }),
    option: (styles) => ({ ...styles, backgroundColor: "black", }),
    indicatorSeparator: (styles) => ({ ...styles, backgroundColor: "black" }),
    placeholder: (styles) => ({ ...styles, color: "white", value: "Cooperation model" }),
    multiValue: () => ({
        background: '#black',
        display: 'flex',
        alignItems: 'center',
        border: '0.6px solid #bd6ab6',
        borderRadius: '5px',
        padding: '5px',
    }),
    multiValueLabel: () => ({
        color: 'white ',
        background: '#black',
    }),

}