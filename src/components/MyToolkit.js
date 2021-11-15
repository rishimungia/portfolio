import techStack from '../data/tech-stack.png';

const MyToolkit = () => {
    return ( 
        <div className="panel">
            <div className="toolkit-container">
                <h1>My Toolkit</h1>
                <div className="toolkit-grid">
                    <div className="pixel" data-aos="fade-up" ><p>Pixel Perfect Code</p></div>
                    <div className="tech-apps" data-aos="fade-up" style={{backgroundImage: `url(`+techStack+`)`}}><p>And Expanding</p></div>
                    <div className="creative-apps" data-aos="fade-up"></div>
                    <div className="pallet" data-aos="fade-up"><p>Creative Pallet</p></div>
                </div>
            </div>
        </div>
    );
}
 
export default MyToolkit;