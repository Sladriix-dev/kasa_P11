function Layout({ children }) {
    return (
      <div>
        <header>Header</header>
        <main>{children}</main> {/* Rend les enfants ici */}
        <footer>Footer</footer>
      </div>
    );
  }
  
  export default Layout;
  