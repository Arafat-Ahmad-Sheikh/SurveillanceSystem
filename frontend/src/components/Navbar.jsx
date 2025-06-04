import { Home, Camera, Radio, Video, User, CreditCard, Settings } from "lucide-react";

function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1 flex items-center">
        <a
          className="btn btn-ghost normal-case text-xl flex items-center gap-2"
          href="/dashboard"
        >
          <Camera className="w-6 h-6" />
          <span className="hidden sm:inline">Surveillance System</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/dashboard" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/devices" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">Devices</span>
            </a>
          </li>
          <li>
            <a href="/live" className="flex items-center gap-2">
              <Radio className="w-4 h-4" />
              <span className="hidden sm:inline">Live</span>
            </a>
          </li>
          <li>
            <a href="/videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              <span className="hidden sm:inline">Videos</span>
            </a>
          </li>
          <li>
            <a href="/profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </a>
          </li>
          <li>
            <a href="/subscribe" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Subscribe</span>
            </a>
          </li>
          <li>
            <a href="/settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;