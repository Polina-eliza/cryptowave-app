import SavedCoin from '../components/SavedCoin';
import '../routes/Account.css';

const Account = () => {
  return (
    <div className='account'>
      <div className='account-container'>
          <div className='welcome-container'>
            <h2 className='header header-account'>Account</h2>
            <div>
              <p className='welcome'>Welcome</p>
            </div>
          </div>
          <div>
            <button className='btn btn-account'
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
};

export default Account