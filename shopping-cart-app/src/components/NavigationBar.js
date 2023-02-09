import { Link } from "react-router-dom";

function NavigationBar({routeList}) {
    return (
        <ul className="NavigationBar">
            {routeList.map((route, index) => {
                const [relativePath, label] = [route.relativePath, route.label];
                return (
                    <li key={index}>
                        <Link to={relativePath}>
                            {label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default NavigationBar;
