export default function Header() {
    return (
        <header className="header">
            <h1>School Name</h1>
            <input type="text" className="header__searchbar" placeholder="search by name"/>
            <p className="header__login-dropdown"></p>
        </header>
    );
}