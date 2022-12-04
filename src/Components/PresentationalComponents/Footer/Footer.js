import './footer.css';

export const Footer = () => {
    return(
        <div className='footer'>
            <p>All data presented is collected from <a href='https://www.weatherapi.com' target={'_blank'} rel={ 'noreferrer' } >Weather API</a></p>
        </div>
    );
};