import Sidebar from "./Sidebar";

export const metadata = {
    title: "Dashboard | Next Application",
    description: "Next Application",
  }

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex container mx-auto mt-10">
            <Sidebar></Sidebar>

            {children}

        </div>
    );
};

export default DashboardLayout;