import React from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import SearchNum from '../sitepagenumsearch/App';
import MakeModel from '../sitepageMakeModelSearch/MakeModelTsx';
import SearchVin from '../sitepagevinsearch/sitepagevinsearch';

import './Styles.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
    const location = useLocation();
    
    return (
        <div className="App">
            <div className="background-image">
            </div>
            <div className='menudiv'>
                <NavLink className='linkstyle' to='/React_repos/searchNum'>
                    Поиск по регистрационному номеру
                </NavLink>
                <NavLink to='/React_repos/searchVin' className='linkstyle'>
                    Поиск по VIN-номеру
                </NavLink>
                <NavLink to='/React_repos/searchMM' className='linkstyle'>
                    Поиск по марке и модели
                </NavLink>
            </div>
            
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={400}
                >
                    <div className="page">
                        <Routes location={location}>
                            <Route path="/React_repos" element={<SearchNum />} />
                            <Route path="/React_repos/searchNum" element={<SearchNum />} />
                            <Route path="/React_repos/searchVin" element={<SearchVin />} />
                            <Route path="/React_repos/searchMM" element={<MakeModel />} />
                        </Routes>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;