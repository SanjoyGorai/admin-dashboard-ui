import { FaRegBell } from "react-icons/fa"
import AdminSidebar from "../componants/AdminSidebar"
import { BsSearch } from "react-icons/bs"
import user from '../assets/user.png'

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />

      {/* main */}
      <main className="dashboard">
        <div className="bar">
          <input type="text" name="" id="" placeholder="Search here..." />
          <FaRegBell />
          <img src={user} alt="userImg" />
        </div>

    <div className="widget-container">
      
    </div>



      </main>

    </div>
  )
}

export default Dashboard