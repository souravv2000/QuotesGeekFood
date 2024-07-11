import GeeksFoodLogo from './assets/GeeksFoodLogo.svg'
import './nav.css'
function NavSection(){
   return  <>
    <div className="nav-container">
    <div className="main-logo">
        <img src={GeeksFoodLogo} alt="" />
        <h2>GeeksFoods</h2>
    </div>
     <div>
        <ul className="list-items">
            <li>Home</li>
            <li>Quote</li>
            <li>Resturants</li>
            <li>Foods</li>
            <li>Contact</li>
        </ul>
     </div>
     <button>Get Started</button>
    </div>
    </>
}
export default NavSection;