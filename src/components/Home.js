import profile from '../data/assets/Me800.jpg';

const Home = () => {
    return ( 
        <div className="panel">
            <div className="home-container" id="home">
                <div>
                    <div className="profile-glow"></div>
                    <div className="profile-container">
                        <img src={profile} alt='Rishi Mungia' />
                    </div>
                </div>
                <div 
                    className="home-text" 
                    data-aos="fade-up"
                    data-aos-delay="1000"
                >
                    <h1>Rishi Mungia</h1>
                    <p>Web developer, Game designer and UI/UX enthusiast who loves to create breathtaking experiences</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;