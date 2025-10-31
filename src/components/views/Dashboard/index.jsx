import LogOutBtn from "../../logOutBtn"

function Dashboard() {
   
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Welcome Back 👋</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg p-6">Users</div>
                <div className="bg-white shadow rounded-lg p-6">Revenue</div>
                <div className="bg-white shadow rounded-lg p-6">Sales</div>
            </div>
            <LogOutBtn/>
        </>
    )
}


export default Dashboard