
import {
  House,
  Users,
  CalendarDays,
  MessageSquare,
  CreditCard,
  Settings,
  MoreVertical,
} from "lucide-react";
import logo from "../assets/TestLogo.svg";

function Header() {
  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">
  <img src={logo} alt="Tech.Care Logo" />
</div>

      {/* Navigation */}
      <nav className="nav-menu">
        <a href="#">Overview</a>

        <a href="#" className="active">
          <Users size={18} />
          Patients
        </a>

        <a href="#">
          <CalendarDays size={18} />
          Schedule
        </a>

        <a href="#">
          <MessageSquare size={18} />
          Message
        </a>

        <a href="#">
          <CreditCard size={18} />
          Transactions
        </a>
      </nav>

      {/* Doctor Profile */}
      <div className="doctor-profile">
        <div className="doctor-info">
          <strong>Dr. Jose Simmons</strong>
          <span>General Practitioner</span>
        </div>

        <Settings size={20} />

        <MoreVertical size={20} />
      </div>

    </header>
  );
}

export default Header;
