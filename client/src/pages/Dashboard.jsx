
import { useEffect, useState } from "react";

import API from "../services/api";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";


function Dashboard() {

  const [stats, setStats] = useState(null);


  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const res = await API.get(
          "/dashboard/stats"
        );

        setStats(res.data);

      } catch (error) {

        console.log(error);
      }
    };

    loadDashboard();

  }, []);


  if (!stats) {
    return <h1>Loading...</h1>;
  }


  // Chart Data
  const chartData = stats.atsHistory.map(
    (item, index) => ({
      name: `Resume ${index + 1}`,
      score: item.atsScore,
    })
  );


  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>


      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-lg font-semibold">
            Total Resumes
          </h2>

          <p className="text-3xl mt-3">
            {stats.totalResumes}
          </p>

        </div>


        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-lg font-semibold">
            ATS Analyses
          </h2>

          <p className="text-3xl mt-3">
            {stats.totalATSAnalyses}
          </p>

        </div>


        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-lg font-semibold">
            Average ATS
          </h2>

          <p className="text-3xl mt-3">
            {stats.averageATS}%
          </p>

        </div>

      </div>


      {/* ATS Trend Chart */}
      <div className="bg-white p-6 rounded shadow mb-10">

        <h2 className="text-2xl font-bold mb-6">
          ATS Score Trends
        </h2>


        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <LineChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>


      {/* Skills */}
      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-2xl font-bold mb-4">
          Skills
        </h2>


        <div className="flex gap-3 flex-wrap">

          {stats.skills.map((skill, index) => (

            <span
              key={index}
              className="bg-black text-white px-4 py-2 rounded"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;
