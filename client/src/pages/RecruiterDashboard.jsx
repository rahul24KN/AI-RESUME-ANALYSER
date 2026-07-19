
import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

import DashboardLayout from
  "../layouts/DashboardLayout";


function RecruiterDashboard() {

  const [candidates, setCandidates] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [skill, setSkill] =
    useState("");

  const [minATS, setMinATS] =
    useState("");

  const [status, setStatus] =
    useState("");


  // FETCH CANDIDATES
  const loadCandidates =
    async () => {

      try {

        setLoading(true);

        const res =
          await API.get(

            `/recruiter/candidates?skill=${skill}&minATS=${minATS}&status=${status}`
          );

        setCandidates(
          res.data.candidates
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };



// LOAD ON PAGE OPEN
useEffect(() => {

  const fetchData = async () => {

    await loadCandidates();
  };

  fetchData();

}, []);


  // REFRESH AFTER FILTERS
  const refreshCandidates =
    async () => {

      loadCandidates();
    };


  // UPDATE STATUS
  const updateStatus =
    async (id, statusValue) => {

      try {

        await API.put(

          `/recruiter/candidate/${id}`,

          {
            status: statusValue,
          }
        );

        refreshCandidates();

      } catch (error) {

        console.log(error);
      }
    };


  // LOADING SCREEN
  if (loading) {

    return (

      <DashboardLayout>

        <h1 className="text-2xl font-bold">
          Loading...
        </h1>

      </DashboardLayout>
    );
  }


  return (

    <DashboardLayout>

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold mb-8">

        Recruiter Dashboard

      </h1>


      {/* FILTER SECTION */}
      <div className="bg-white p-4 rounded shadow mb-6 flex gap-4 flex-wrap">

        {/* SEARCH BUTTON */}
        <button
          onClick={refreshCandidates}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Search
        </button>


        {/* SKILL SEARCH */}
        <input
          type="text"
          placeholder="Search Skill"
          value={skill}
          onChange={(e) =>
            setSkill(e.target.value)
          }
          className="border p-2 rounded"
        />


        {/* ATS FILTER */}
        <input
          type="number"
          placeholder="Minimum ATS"
          value={minATS}
          onChange={(e) =>
            setMinATS(e.target.value)
          }
          className="border p-2 rounded"
        />


        {/* STATUS FILTER */}
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="border p-2 rounded"
        >

          <option value="">
            All Status
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Shortlisted">
            Shortlisted
          </option>

          <option value="Rejected">
            Rejected
          </option>

        </select>

      </div>


      {/* TABLE */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">

        <table className="min-w-full text-sm">

          <thead className="bg-black text-white">

            <tr>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                ATS
              </th>

              <th className="p-4 text-left">
                Skills
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Actions
              </th>

              <th className="p-4 text-left">
                Resume
              </th>

            </tr>

          </thead>


          <tbody>

            {candidates.map(
              (candidate) => (

                <tr
                  key={candidate._id}
                  className="border-b hover:bg-gray-50"
                >

                  {/* NAME */}
                  <td className="p-4">
                    {candidate.name}
                  </td>


                  {/* EMAIL */}
                  <td className="p-4">
                    {candidate.email}
                  </td>


                  {/* ATS */}
                  <td className="p-4 font-bold">
                    {candidate.atsScore}%
                  </td>


                  {/* SKILLS */}
                  <td className="p-4">

                    <div className="flex flex-wrap gap-2">

                      {candidate.skills?.map(
                        (
                          skillItem,
                          index
                        ) => (

                          <span
                            key={index}
                            className="bg-gray-200 px-2 py-1 rounded text-xs"
                          >
                            {skillItem}
                          </span>
                        )
                      )}

                    </div>

                  </td>


                  {/* STATUS */}
                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded text-white ${
                        candidate.status ===
                        "Shortlisted"
                          ? "bg-green-500"
                          : candidate.status ===
                            "Rejected"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    >

                      {candidate.status}

                    </span>

                  </td>


                  {/* ACTIONS */}
                  <td className="p-4 flex gap-2">

                    {/* SHORTLIST */}
                    <button
                      onClick={() =>
                        updateStatus(
                          candidate._id,
                          "Shortlisted"
                        )
                      }

                      disabled={
                        candidate.status ===
                        "Shortlisted"
                      }

                      className="bg-green-500 text-white px-3 py-1 rounded disabled:bg-gray-400"
                    >
                      Shortlist
                    </button>


                    {/* REJECT */}
                    <button
                      onClick={() =>
                        updateStatus(
                          candidate._id,
                          "Rejected"
                        )
                      }

                      disabled={
                        candidate.status ===
                        "Rejected"
                      }

                      className="bg-red-500 text-white px-3 py-1 rounded disabled:bg-gray-400"
                    >
                      Reject
                    </button>

                  </td>


                  {/* RESUME */}
                  <td className="p-4">

                    {candidate.resumePath ? (

                      <a
                        href={`http://localhost:5000/${candidate.resumePath}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        View Resume
                      </a>

                    ) : (

                      <span>
                        No Resume
                      </span>
                    )}

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}

export default RecruiterDashboard;
