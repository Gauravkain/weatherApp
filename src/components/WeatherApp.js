import React, { useEffect, useState } from 'react';
import './css/style.css';

const WeatherApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Delhi");

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `/data/2.5/weather?q=${search}&units=metric&APPID=b8f1080f18219532a98655f0c4f4de1e`;
            const response = await fetch(url);

            const resJson = await response.json();

            setCity(resJson.main);
        }
        fetchAPI();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" value={search} className="inputFeild" onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (
                    <p className="errorMsg">No data found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>

                            <h1 className="temp"> {city.temp} °Celcius</h1>

                            <h3 className="tempmin_max">Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>

                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )
                }
            </div>
        </>
    )
};

export default WeatherApp;