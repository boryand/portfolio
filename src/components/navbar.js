import react from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
       
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="badges.html">Projects</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
