import useClock from '../../hooks/useClock';
import './style.scss';
BetterClock.propTypes = {
    
};



function BetterClock(props) {
    const { timeString } = useClock();
    return (
        <div className="better-clock">
           <p className="better-clock__item" style={{fontSize: '42px'}}>{timeString}</p>
        </div>     
    );
}
export default BetterClock;