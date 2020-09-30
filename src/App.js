import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/LoginPage/LoginPage';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
// import UsersContainer from './components/Users/UsersContainer';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />

          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

          <React.Suspense fallback={<Preloader />}>
            <Route path="/users" render={() => <UsersContainer />} />
          </React.Suspense>

          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const SocialNetworkApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkApp;
