import { useExpenses } from "../context/useExpenses";

export default function Spending() {
  const { expenses } = useExpenses();

  return (
    <div className="pt-24 p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Spending History</h1>
      {expenses.map((e) => (
        <div key={e.id} className="bg-slate-800 p-3 flex justify-between">
          <span>{e.title}</span>
          <span>₹{e.amount}</span>
        </div>
      ))}
    </div>
  );
}
