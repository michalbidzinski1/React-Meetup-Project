import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <header>
      <div>
        React Meetups
        <nav>
          <ul>
            <li>
              <Link to="/"> All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup"> Add new Meetup</Link>
            </li>
            <li>
              <Link to="/favorites"> My favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default MainNavigation;
