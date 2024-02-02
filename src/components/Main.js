import Card from './Card';
import { useState } from 'react';

const Main = (props) => {
    const { resData, URL } = props;
    const [listOfRestaurants, setListOfRestaurants] = useState(resData);
    return (
        <div className='main'>
            <div className='btns'>
                <button onClick={() => {
                    setListOfRestaurants(resData);
                }}>All Restaurants</button>
                <button onClick={() => {
                    const filterRes = resData.filter(res => res["info"]["avgRating"] > 4);
                    setListOfRestaurants(filterRes);
                }}>Featured Restaurants</button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map((res) => {
                    return (<Card key={res.info.id} resData={res} URL={URL} />)
                })}
            </div>
        </div>
    );
}

export default Main;