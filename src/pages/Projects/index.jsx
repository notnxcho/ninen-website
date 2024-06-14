import CtaBannerSection from "../../components/ctaBannerSection/ctaBannerSection"
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/navbar"

const ProjectIndex = ({hero, content}) => {
    return (
        <div className='home container-wide-force'>
            <div className="hero-wrap">
                <div className="hero container container-border">
                    <Navbar/>
                    {hero}
                    {content}
                </div>
            </div>
            <CtaBannerSection 
                displayText={'Are you ready for your next smart move?'}
                ctaText={'Work with us'}
            />
            <Footer/>
        </div>
    )
}
export default ProjectIndex