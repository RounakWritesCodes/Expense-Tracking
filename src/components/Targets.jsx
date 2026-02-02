import { useState } from "react";

export default function Targets() {
  const [monthlyMoney, setMonthlyMoney] = useState("");
  const [savingGoal, setSavingGoal] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!monthlyMoney || !savingGoal) return;

    localStorage.setItem(
      "targets",
      JSON.stringify({
        monthlyMoney: Number(monthlyMoney),
        savingGoal: Number(savingGoal),
      }),
    );

    setSaved(true);
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 pt-24">
      <div className="max-w-xl mx-auto space-y-10">
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Monthly Targets</h1>
          <p className="text-gray-400 mt-2">
            Set your monthly budget and saving goal
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Monthly Money (₹)
            </label>
            <input
              type="number"
              value={monthlyMoney}
              onChange={(e) => setMonthlyMoney(e.target.value)}
              placeholder="e.g. 50000"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Saving Goal (₹)
            </label>
            <input
              type="number"
              value={savingGoal}
              onChange={(e) => setSavingGoal(e.target.value)}
              placeholder="e.g. 10000"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Save Target
          </button>

          {saved && (
            <p className="text-green-400 text-center">
              🎯 Target saved successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
