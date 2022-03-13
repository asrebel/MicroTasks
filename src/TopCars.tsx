import React from "react";

type TopCarsComponentType = {
    topCars: TopCarType[]
}

type TopCarType = {
    manufacturer: string;
    model: string;
    id: number;
}

export const TopCarsComponent = (props: TopCarsComponentType) => {
       return (
        <table>
            {props.topCars.map((TCCT, index) => {
                return (
                    <tr key={TCCT.id}>
                        <th> manufacturer: {TCCT.manufacturer}</th>
                        <th> model: {TCCT.model}</th>
                    </tr>
                )
            }
            )
            }
        </table>
            );
            };