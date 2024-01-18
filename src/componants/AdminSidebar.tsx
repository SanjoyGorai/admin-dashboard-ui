import { IconType } from "react-icons"
import { Link, Location, useNavigate } from "react-router-dom"
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri"
import { AiFillFileText } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"

const AdminSidebar = () => {

    const navigate = useNavigate()

    return (
        <aside>
            <h2>Logo.</h2>
            <div>
                <h5>Dashboard</h5>
                <ul>
                    <li>
                        <Link to={"/admin/dashboard"}>
                            <RiDashboardFill />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to={"/admin/product"}>
                            <RiShoppingBag3Fill />
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to={"/admin/customer"}>
                            <IoIosPeople />
                            Product
                        </Link>
                    </li>

                    <li>
                        <Link to={"/admin/transaction"}>
                            <AiFillFileText />
                            Transaction
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}


export default AdminSidebar