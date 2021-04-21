import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const {data, error, loading } = useTypedSelector((state) => state.repositories); 
        // or useSelector((state: RootState) => state.repositories); 

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {loading && <h3>Loading....</h3>}
            {error && <h3>{error}</h3>}
            <ul>
                {data.map((name)=> <li key={name}>{name}</li>)}
            </ul>
        </div>
    );
};

export default RepositoriesList;