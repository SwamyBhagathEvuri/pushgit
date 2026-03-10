import { useState } from 'react';
import { Plane, Calendar, Users, Search, MapPin, ArrowRightLeft } from 'lucide-react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [travelers, setTravelers] = useState(1);
    const [cabinClass, setCabinClass] = useState('Economy');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ from, to, date, travelers, cabinClass });
    };

    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form glass">
            <div className="form-header">
                <h2 className="text-2xl font-bold">Book Your Flight</h2>
                <div className="trip-type">
                    <button type="button" className="active">One Way</button>
                    <button type="button">Round Trip</button>
                </div>
            </div>

            <div className="form-row locations">
                <div className="input-group">
                    <label><Plane className="icon-sm" /> From</label>
                    <input
                        type="text"
                        placeholder="New York (JFK)"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        required
                    />
                </div>

                <button type="button" className="swap-btn" onClick={handleSwap}>
                    <ArrowRightLeft className="icon-sm" />
                </button>

                <div className="input-group">
                    <label><MapPin className="icon-sm" /> To</label>
                    <input
                        type="text"
                        placeholder="London (LHR)"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="form-row details">
                <div className="input-group">
                    <label><Calendar className="icon-sm" /> Departure</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label><Users className="icon-sm" /> Travelers</label>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Class</label>
                    <select value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First">First Class</option>
                    </select>
                </div>
            </div>

            <button type="submit" className="search-btn">
                <Search className="icon-md" /> Search Flights
            </button>
        </form>
    );
};

export default SearchForm;
