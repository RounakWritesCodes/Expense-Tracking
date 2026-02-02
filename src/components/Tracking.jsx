import { useState } from "react";
import { useExpenses } from "../context/useExpenses";

export default function Tracking() {
  // ✅ Hook is INSIDE the component body (this fixes your error)
  const { expenses, addExpense } = useExpenses();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleAddExpense(e) {
    e.preventDefault();

    if (!title || !amount) return;

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      date: new Date().toISOString(),
    });

    setTitle("");
    setAmount("");
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 pt-24">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Expense Tracking</h1>

        {/* ADD EXPENSE FORM */}
        <form
          onSubmit={handleAddExpense}
          className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-4"
        >
          <input
            type="text"
            placeholder="Expense title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded bg-slate-900 outline-none"
          />

          <input
            type="number"
            placeholder="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 rounded bg-slate-900 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
          >
            Add Expense
          </button>
        </form>

        {/* EXPENSE LIST */}
        {expenses.length === 0 ? (
          <p className="text-center text-gray-400">No expenses added yet.</p>
        ) : (
          <div className="space-y-3">
            {expenses.map((e) => (
              <div
                key={e.id}
                className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg p-3"
              >
                <div>
                  <p className="font-medium">{e.title}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(e.date).toLocaleDateString()}
                  </p>
                </div>

                <span className="text-red-400 font-semibold">₹{e.amount}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
