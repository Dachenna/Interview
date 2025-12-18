import { LuCalendarDays, LuHourglass, LuAlertTriangle } from "react-icons/lu";

const DashboardContent = () => {
  return (
    <div className="flex-1 p-8 bg-[#0D0F11] text-white min-h-screen">
      {/* WELCOME SECTION */}
      <section className="mb-10 mt-16"> {/* mt-16 to clear your absolute navbar */}
        <h2 className="text-4xl font-bold mb-2">Welcome, Admin</h2>
        <p className="text-gray-400">Start day with managing new appointments</p>
      </section>

      {/* METRIC CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Scheduled Card */}
        <div className="p-6 rounded-2xl bg-[#1A1D21] border border-white/5 shadow-2xl flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <LuCalendarDays className="text-yellow-500 text-3xl" />
            <span className="text-4xl font-bold">94</span>
          </div>
          <p className="text-gray-400 text-sm">Total number of scheduled appointments</p>
        </div>

        {/* Pending Card */}
        <div className="p-6 rounded-2xl bg-[#1A1D21] border border-white/5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <LuHourglass className="text-blue-400 text-3xl" />
            <span className="text-4xl font-bold">32</span>
          </div>
          <p className="text-gray-400 text-sm">Total number of pending appointments</p>
        </div>

        {/* Cancelled Card */}
        <div className="p-6 rounded-2xl bg-[#1A1D21] border border-white/5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <LuAlertTriangle className="text-red-500 text-3xl" />
            <span className="text-4xl font-bold">56</span>
          </div>
          <p className="text-gray-400 text-sm">Total number of cancelled appointments</p>
        </div>
      </div>

      {/* APPOINTMENTS TABLE CONTAINER */}
      <div className="rounded-xl border border-white/10 bg-[#131619] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#1A1D21] text-gray-400 text-sm">
            <tr>
              <th className="p-4 font-medium">Patient</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Doctor</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {/* Example Row */}
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-4 text-sm font-semibold">Phoenix Baker</td>
              <td className="p-4 text-sm text-gray-300">Jan 4, 2022</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs flex items-center w-fit gap-1">
                  ● Scheduled
                </span>
              </td>
              <td className="p-4 text-sm flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-600" /> Dr. Alex Ramirez
              </td>
              <td className="p-4 text-right">
                <button className="text-green-500 text-sm font-medium mr-4">Schedule</button>
                <button className="text-gray-400 text-sm font-medium">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardContent;