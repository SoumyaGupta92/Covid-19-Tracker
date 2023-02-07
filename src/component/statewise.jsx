import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./statewise.css";

const Statewise = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    };

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='main-heading'>
                    <h1 className='mb-5 text-center'>
                        <span className='font-weight-bold'>INDIA </span>
                        COVID-19 Dashboard
                    </h1>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead className='table-dark'>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((currValue, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{currValue.state}</td>
                                        <td>{currValue.confirmed}</td>
                                        <td>{currValue.recovered}</td>
                                        <td>{currValue.deaths}</td>
                                        <td>{currValue.active}</td>
                                        <td>{currValue.lastupdatedtime}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Statewise;
