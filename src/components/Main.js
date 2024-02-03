import Card from './Card';
import { useState, useEffect } from 'react';
import { RES_IMGAGE_URL, SWIGGY_URL } from '../utils/constants';

const Main = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredResataurants, setFilteredResataurants] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResataurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return (
        <div className='main'>
            <div className='btns'>
                <div className='filter-btns'>
                    <button onClick={() => {
                        setFilteredResataurants(listOfRestaurants);
                    }}>All Restaurants</button>
                    <button onClick={() => {
                        const filterRes = listOfRestaurants.filter(res => res["info"]["avgRating"] >= 4.2);
                        setFilteredResataurants(filterRes);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className='search'>
                    <input placeholder='Search for restaurant and food' value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button onClick={() => {
                        const filterRes = listOfRestaurants.filter(obj => obj["info"]["name"].toUpperCase().includes(search.toUpperCase()) || obj["info"]["cuisines"].join(" ").toUpperCase().includes(search.toUpperCase()));
                        setFilteredResataurants(filterRes);
                    }}>SEARCH</button>
                </div>
            </div>
            <div className='res-container'>
                {filteredResataurants.map((obj) => {
                    return (<Card key={obj["info"]["id"]} resData={obj} URL={RES_IMGAGE_URL} />)
                })}
            </div>
        </div>
    );
}

export default Main;