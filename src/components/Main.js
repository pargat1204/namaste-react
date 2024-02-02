import Card from './Card';

const Main = (props) => {
    const { resData, URL } = props;
    return (
        <div className='main'>
            <div className='search'>
                <input ></input>
                <span>SEARCH</span>
            </div>
            <div className='res-container'>
                {resData.map((res) => {
                    return (<Card key={res.info.id} resData={res} URL={URL} />)
                })}
            </div>
        </div>
    );
}

export default Main;