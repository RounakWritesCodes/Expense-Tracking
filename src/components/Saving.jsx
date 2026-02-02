import { useExpenses } from "../context/useExpenses";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Saving() {
  const { expenses } = useExpenses();
  const targetData = JSON.parse(localStorage.getItem("targets"));

  if (!targetData) {
    return (
      <section className="min-h-screen bg-slate-950 text-white px-6 pt-24 flex items-center justify-center">
        <p className="text-gray-400">Please set your monthly target first.</p>
      </section>
    );
  }

  const monthlyMoney = Number(targetData.monthlyMoney);

  // ---- GROUP EXPENSES BY MONTH ----
  const monthlyExpenses = {};

  expenses.forEach((e) => {
    const date = new Date(e.date);
    const key = `${date.getFullYear()}-${date.getMonth()}`;

    monthlyExpenses[key] = (monthlyExpenses[key] || 0) + Number(e.amount);
  });

  // ---- SORT MONTHS (MOST RECENT FIRST) ----
  const sortedMonths = Object.keys(monthlyExpenses)
    .sort((a, b) => {
      const [y1, m1] = a.split("-").map(Number);
      const [y2, m2] = b.split("-").map(Number);
      return new Date(y2, m2) - new Date(y1, m1);
    })
    .slice(0, 3)
    .reverse();

  // ---- BUILD CHART DATA ----
  const labels = [];
  const data = [];

  sortedMonths.forEach((key) => {
    const [year, month] = key.split("-").map(Number);
    const spent = monthlyExpenses[key];
    const saved = monthlyMoney - spent;

    labels.push(
      new Date(year, month).toLocaleString("default", {
        month: "short",
      }),
    );
    data.push(saved);
  });

  if (data.length === 0) {
    return (
      <section className="min-h-screen bg-slate-950 text-white px-6 pt-24 flex items-center justify-center">
        <p className="text-gray-400">No expense data yet.</p>
      </section>
    );
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: "Savings (₹)",
        data,
        backgroundColor: "rgba(34,197,94,0.8)",
        borderRadius: 10,
      },
    ],
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 pt-24">
      <div className="max-w-2xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Savings (Last Active Months)</h1>
          <p className="text-gray-400 mt-2">
            Based only on months with expenses
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <Bar data={chartData} />
        </div>
      </div>
    </section>
  );
}
