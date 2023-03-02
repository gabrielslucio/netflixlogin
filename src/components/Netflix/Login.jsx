import React from "react";

import {AiFillPlusCircle} from "react-icons/ai";

import './Login.scss';

const Netflix = () => {

    return (
        <div className="app__login">
            <section className="app__login-container">
                <div className="app__login-title">
                    <h1>Quem está a ver a Netflix?</h1>
                </div>
                <div className="app__login-cards">
                    <div className="app__login-userimg">
                        <img className="app__user1" src="http://occ-0-2268-358.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdl-798oa_wUwa3wF5r3C5U7QEdEiIzW3J-QezwoMZGPbXthGOhpXyCRN8AWyKpPRdKcrRzwiYBgSAZunKN-Rk6eJyZfBl7qDPod.png?r=93c" />
                        <img className="app__user2" src="http://occ-0-2268-358.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVPGd8MNBaqbEPi4pIr71tzngSEKpxT3fNIfUrw5w8Fvapf9wyAsyqKk0k8O-UwaUzgUUM1EFCLZEJjMYheRjmrbRszfAXqmE0ng.png?r=8d8" />
                        <img className="app__user3" src="http://occ-0-2268-358.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYeCB8YeZVQky5r7XiGQ7T1bBCMo-bWKXA3pHJ2OgbSR3fEyoVPjEw5zkMzPKlgROG8BtGRYHwiVY7SgKsJosj00_gziqea6-O_.png?r=5cb" />
                        <a className="app__next" href="#"><AiFillPlusCircle /></a>
                    </div>
                    <div className="app__login-username">
                        <p>Gabriel</p>
                        <p>Lar de idosos</p>
                        <p>Crianças</p>
                        <p>Adicionar perfil</p>
                    </div>
                    <div className="app__login-btn">
                        <button type="button">
                            Gerir perfis
                        </button>
                    </div>
                </div>
            </section>            
        </div>
    );
};

export default Netflix;