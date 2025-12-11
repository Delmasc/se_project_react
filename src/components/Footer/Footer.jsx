import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <span>
                copyright& Delmas C
            </span>
            <span>{new Date().getFullYear()}</span>
        </footer>
    );
};

export default Footer;