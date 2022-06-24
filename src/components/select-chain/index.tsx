import { FC, useEffect, useState } from "react";
import "./style.css";

interface IData {
    chainName: string;
    chainIcon: string;
    coinName: string;
    coinIcon: string;
}

interface IProps {
    data: Array<IData>;
    onChange: Function;
}

export const SelectChain: FC<IProps> = ({ data, onChange }) => {
    const [open, setOpen] = useState(false);
    const [selectIndex, setSelectIndex] = useState(0);

    useEffect(() => {
        onChange(selectIndex);
    }, [selectIndex]);

    return (
        <div className={`select-form ${open ? "selected" : ""}`}>
            <div className="selected-form" onClick={() => setOpen(!open)}>
                <div className="chain-form">
                    <div className="chain">
                        <img src={data[selectIndex].chainIcon} alt="chain icon" className="icon" />
                        <p className="text">{data[selectIndex].chainName}</p>
                    </div>
                    <div className="arrow"></div>
                </div>
                <div className="coin-form">
                    <img src={data[selectIndex].coinIcon} alt="coin icon" className="icon" />
                    <p className="text">{data[selectIndex].coinName}</p>
                </div>
            </div>
            {open && (
                <ul>
                    {data.map(
                        (item, index) =>
                            index !== selectIndex && (
                                <li
                                    onClick={() => {
                                        setSelectIndex(index);
                                        setOpen(false);
                                    }}
                                >
                                    <div className="chain-form">
                                        <div className="chain">
                                            <img
                                                src={item.chainIcon}
                                                alt="chain icon"
                                                className="icon"
                                            />
                                            <p className="text">{item.chainName}</p>
                                        </div>
                                    </div>
                                    <div className="coin-form">
                                        <img src={item.coinIcon} alt="coin icon" className="icon" />
                                        <p className="text">{item.coinName}</p>
                                    </div>
                                </li>
                            )
                    )}
                </ul>
            )}
        </div>
    );
};
