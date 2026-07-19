
import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

import DashboardLayout from
  "../layouts/DashboardLayout";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";


function Analytics() {

  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {

    const loadAnalytics =
      async () => {

        try {

          const res =
            await API.get(
              "/analytics"
            );

          setAnalytics(
            res.data
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    loadAnalytics();

  }, []);


  if (loading) {

    return <h1>Loading...</h1>;
  }


  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Analytics Dashboard
      </h1>


      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-semibold">
            Total Candidates
          </h2>

          <p className="text-4xl font-bold mt-4">
            {analytics.totalCandidates}
          </p>

        </div>


        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-semibold">
            Average ATS
          </h2>

          <p className="text-4xl font-bold mt-4">
            {analytics.averageATS}%
          </p>

        </div>


        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-semibold">
            Shortlisted
          </h2>

          <p className="text-4xl font-bold mt-4">
            {analytics.shortlisted}
          </p>

        </div>

      </div>


      {/* STATUS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-yellow-100 p-6 rounded shadow">

          <h2 className="text-xl font-semibold">
            Pending
          </h2>

          <p className="text-4xl font-bold mt-4">
            {analytics.pending}
          </p>

        </div>


        <div className="bg-green-100 p-6 rounded shadow">

          <h2 className="text-xl font-semibold">
            Shortlisted
          </h2>

          <p className="text-4xl font-bold mt-4">
            {analytics.shortlisted}
          </p>

        </div>


        <div className="bg-red-100 p-6 rounded shadow">

          <h2 className="text-xl font-semibold">
            Rejected
          </h2>

          <p className="text-4xl font-bold mt-4">
            {analytics.rejected}
          </p>

        </div>

      </div>


      {/* TOP SKILLS CHART */}
      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-2xl font-bold mb-6">
          Top Skills
        </h2>


        <ResponsiveContainer
          width="100%"
          height={400}
        >

          <BarChart
            data={analytics.topSkills.map(
              (item) => ({
                skill: item[0],
                count: item[1],
              })
            )}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="skill" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="count" />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </DashboardLayout>
  );
}

export default Analytics;
