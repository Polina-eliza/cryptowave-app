import SavedCoin from '../components/SavedCoin';
import '../routes/Account.css';
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';


const Account = () => {

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
  return (
    <div className='account'>
      <div className='account-container'>
          <div className='welcome-container'>
            <h2 className='header header-account'>Account</h2>
            <div>
              <p className='welcome'>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button onClick={handleSignOut} className='btn btn-account'
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className='watch-list-container'>
          <div className='watch-list-wrapper'>
            <h2>Watch List</h2>
            <SavedCoin />
          </div>
        </div>
    </div>
  );
} else {
  return <Navigate to='/signin' />;
}
};

export default Account