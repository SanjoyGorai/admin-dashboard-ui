import { IconType } from "react-icons"
import { Link, Location, useLocation, useNavigate } from "react-router-dom"
import { AiFillFileText } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"
import { FaChartBar, FaChartPie, FaChartLine, FaStopwatch, FaGamepad } from 'react-icons/fa'
import { RiDashboardFill, RiShoppingBag3Fill, RiCoupon3Fill, RiCoupon3Line, } from "react-icons/ri"

const AdminSidebar = () => {

    const location = useLocation()

    return (
        <aside>
            <h2>Logo.</h2>
            <DivOne location={location} />
            <DivTwo location={location} />
            <DivThree location={location} />
        </aside>
    )
}

const DivOne = ({ location }: { location: Location }) => {
    return (
        <div>
            <h5>Dashboard</h5>
            <ul>
                <Li
                    url="/admin/dashboard"
                    text="Dashboard"
                    Icon={RiDashboardFill}
                    location={location}
                />
                <Li
                    url="/admin/products"
                    text="Product"
                    Icon={IoIosPeople}
                    location={location}
                />

                <Li
                    url="/admin/customers"
                    text="Customer"
                    Icon={RiDashboardFill}
                    location={location}
                />
                <Li
                    url="/admin/transaction"
                    text="Transaction"
                    Icon={AiFillFileText}
                    location={location}
                />
            </ul>
        </div>

    )
}
const DivTwo = ({ location }: { location: Location }) => {
    return (
        <div>
            <h5>Charts</h5>
            <ul>
                <Li
                    url="/admin/chart/bar"
                    text="Bar"
                    Icon={FaChartBar}
                    location={location}
                />
                <Li
                    url="/admin/chart/pie"
                    text="Pie"
                    Icon={FaChartPie}
                    location={location}
                />

                <Li
                    url="/admin/chart/line"
                    text="Line"
                    Icon={FaChartLine}
                    location={location}
                />
            </ul>
        </div>

    )
}

const DivThree = ({ location }: { location: Location }) => {
    return (
        <div>
            <h5>Apps</h5>
            <ul>
                <Li
                    url="/admin/app/stopwatch"
                    text="Stopwatch"
                    Icon={FaStopwatch}
                    location={location}
                />
                <Li
                    url="/admin/app/coupon"
                    text="Coupne"
                    Icon={RiCoupon3Fill}
                    location={location}
                />

                <Li
                    url="/admin/app/gamepad"
                    text="Gamepad"
                    Icon={FaGamepad}
                    location={location}
                />
            </ul>
        </div>

    )
}



interface LiProps {
    url: string;
    text: string;
    location: Location,
    Icon: IconType
}
const Li = ({ url, text, location, Icon }: LiProps) => {
    return (
        <li
            style={{
                backgroundColor:
                    location.pathname.includes(url) ?
                        'rgba(0,115,225,0.1)'
                        : 'white'
            }}
        >
            <Link
                to={url}
                style={{
                    color: location.pathname.includes(url) ?
                        'rgba(0,115,225,0.1)'
                        : 'black'
                }}
            >
                <Icon />
                {text}
            </Link>
        </li>
    )
}


export default AdminSidebar