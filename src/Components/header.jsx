import  logo from '../assets/checknews.png'

// eslint-disable-next-line react/prop-types
const Header = () => {
    const headerStyle = {
        backgroundColor: '#11100F', // Steel Blue
        color: '#F6F7F2', // Blanc
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };

    const logoStyle = {
        height: '50px', // Exemple de hauteur, ajustez selon vos besoins
    };

    const navStyle = {
        color: '#F6F7F2', // Noir
        textDecoration: 'none', // Pour rendre le texte plus net sans soulignement
        marginLeft: '20px',
        fontSize: '1rem', // Taille de police exemple
    };

    // Style pour une partie spécifique, si nécessaire
    const specialPartStyle = {
        backgroundColor: '#C6D7F1', // Columbia Blue (bleu clair)
        padding: '5px 10px',
        borderRadius: '5px'
    };

    return (
        <header style={headerStyle}>
            <img src={logo} alt="Logo" style={logoStyle} />
            <nav>
                <a href="/" style={navStyle}>Accueil</a>
                {/* Exemple d'utilisation du style spécial pour une partie spécifique */}
                <a href="/about" style={{...navStyle, ...specialPartStyle}}>À propos</a>
                <a href="/contact" style={navStyle}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;
