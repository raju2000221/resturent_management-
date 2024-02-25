import { Helmet } from 'react-helmet-async';

const MainMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Full Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
        </div>
    );
};

export default MainMenu;