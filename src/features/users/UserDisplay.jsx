import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';
import { useEffect } from 'react';

const UserDisplay = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.userReducer);

    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="container my-4">
            <h1>User Display</h1>
            { loading && <div className="alert alert-info">Loading users...</div> }
            { error && <div className="alert alert-danger">{error}</div> }
            <ul className="list-group">
                { users.map((user) => (
                    <li key={user.id} className="list-group-item">{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserDisplay
