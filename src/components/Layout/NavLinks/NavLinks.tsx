import { Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <div>
      <Link to={ROUTE.HOME}>Home</Link>

      <Link to={ROUTE.SAMPLES}>Samples</Link>
      <Link to={ROUTE.CART}>Cart</Link>
    </div>
  );
};






{/* <li>
<Link to={ROUTE.HOME}>Home</Link>
</li>
<li>
<Link to={ROUTE.SAMPLES}>Samples</Link>
</li>
<li>
<Link to={ROUTE.CART}>Cart</Link>
</li> */}