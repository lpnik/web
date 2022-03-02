import React from "react";
import images from './images/sosTeMi.jpg';
import CircleIcon from '@mui/icons-material/Circle';

export default function PaaUutiset() {
    return (
        <div className="paaUutiset">
            <div className="taustaUutiset">
                <div className="otsikkoKorona">
                    Koronavirus
                    <div className="kuvaSosTeMi">
                        <img src={images} alt={""} width={600} />
                            <div className="hsSeuraa">
                                <circle className="circle"/>
                                    <h4><CircleIcon sx={{ fontSize: 12 }}/> HS seuraa</h4>
                            </div>
                                <h2 className="tekstiKorona">
                                    <span>Päivittyvä seuranta </span>
                                    <span className="tekstiSeuranta">
                                        | STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan
                                    </span>
                                </h2>
                    </div>
                </div>
            </div>

            <div className="luetuimmat">
            <div className ="otsikkoLuetuimmat">Luetuimmat</div> 
            <div className="numeroinnit">
            <div className="numero">1</div>
                <h3 className="otsikkoBold">
                    <span>Rikosepäilyt | </span>
                        <span className="esittely">
                            EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli parheen taustoista jo turvapaikkahakemuksessa
                        </span>
                </h3>
            </div>

            <div className="numeroinnit">
            <div className="numero">2</div>
                <h3 className="otsikkoBold">
                    <span>HS Vantaa | </span>
                        <span className="esittely">
                            Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa
                        </span>
                </h3>
            </div>

            <div className="numeroinnit">
            <div className="numero">3</div>
                <h3 className="otsikkoBold">
                    <span>Päivittyvä seuranta | </span>
                        <span className="esittely">
                            STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden
                        </span>
                </h3>
            </div>

            <div className="numeroinnit">
            <div className="numero">4</div>
                <h3 className="otsikkoBold">
                    <span>Nyt.fi | </span>
                        <span className="esittely">
                            Harry Styles puki ylleen suomalaisen suunnisttelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatsuunnittelijalle
                        </span>
                </h3>
            </div>

            <div className="numeroinnit">
                <div className="numero">5</div>
                    <h3 className="otsikkoBold">
                        <span>Rikosepäilyt | </span>
                        <span className="esittely">
                            Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"
                        </span>
                    </h3>
            </div>

            <div className="numeroinnit">
                <div className="numero">6</div>
                    <h3 className="otsikkoBold">
                        <span>Rikosepäilyt | </span>
                        <span className="esittely">
                            Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"
                        </span>
                    </h3>
            </div>
        </div>
        </div>
    );
}