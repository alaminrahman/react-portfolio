import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from './../../img/Vector1.png'
import Vector2 from './../../img/Vector2.png'
import Boy from './../../img/boy.png'
import thumbup from './../../img/thumbup.png'
import Crown from './../../img/crown.png'
import Glassesimoji from './../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi ! I Am</span>
                    <span>Md. Al-amin</span>
                    <span>Full Stack with high level of experience and development, producting the Quality work.</span>                    
                </div>
                <button className="i-button button">Hire me</button>

                <div className="i-icons">
                    <a href="#"><img src={ Github} alt="" /></a>
                    <a href="#"><img src={ Linkedin} alt="" /></a>
                    <a href="#"><img src={ Instagram} alt="" /></a>
                </div>
            </div>

            <div className="i-right">
                <img src={ Vector1 } alt="" />
                <img src={ Vector2 } alt="" />
                <img src={ Boy } alt="" />
                <img src={ Glassesimoji } alt="" />

                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={ Crown } txt1="Web" txt2="Developer"/>
                </div>

                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={ thumbup } txt1="Best Design" txt2="Award"/>
                </div>
                {/* Blur div */}
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
                <div className="blur" style={{ background: '#c1f5ff', top: '17rem', left: '-9rem', width: '21rem', height: '11rem' }}></div>
            </div>
        </div>
    );
}

export default Intro;