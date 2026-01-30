import { useEffect, useState } from "react";
import { API } from "../api/api";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function AdminAnalytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const res = await API.get("/api/admin/analytics");
      setAnalytics(res.data);
    };

    fetchAnalytics();
  }, []);

  if (!analytics) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#0b1a16] text-white p-8 space-y-6">
      <h1 className="text-3xl font-extrabold">📊 Admin Analytics</h1>

      <div className="bg-white/10 p-6 rounded-xl">
        <div className="h-[350px]">
          <Bar
            data={{
              labels: ["Education", "Health", "Finance"],
              datasets: [
                {
                  data: [
                    analytics.education,
                    analytics.health,
                    analytics.finance,
                  ],
                  backgroundColor: ["#22c55e", "#10b981", "#0ea5e9"],
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
            }}
          />
        </div>
      </div>
    </div>
  );
}
