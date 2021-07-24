import '../styles/index.scss';
import Recipes from './Recipes';
import sword from '../images/swc-sword.png';
import swordSVG from '../images/sword.svg';

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh Hi, React</h1>
                </section>
                <img src={sword} alt="sword" width="250" />
                <img src={swordSVG} alt="swordSVG" width="250" />
            </main>
            <Recipes />
        </>
    )
}

export default App
