const NavLink = ({ active, children }) => {
  const classes = styles(
    'white fz18px mr1',
    active ? 'text-underline' : 'text-decoration-none'
  );
  return <a className={classes}>{children}</a>
};

const Header = () => (
  <header className='bg-black p3'>
    <nav className='text-uppercase'>
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Links</NavLink>
      <NavLink>Contact</NavLink>
    </nav>
  </header>
);
const Content = () => (
  <section className='bg-pink_30 flex-auto p3'>
    <h2>A bunch of nice content</h2>
  </section>
);
const Footer = () => (
  <footer className='bg-black white h15vh p3 border-box'>
    This is a little footer thingy
  </footer>
);

const App = () => (
  <div className='flex flex-column min-h100vh justify-between w100p'>
    <Header />
    <Content />
    <Footer />
  </div>
);