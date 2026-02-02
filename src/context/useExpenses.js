import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

export function useExpenses() {
  const ctx = useContext(ExpenseContext);
  if (!ctx) {
    throw new Error("useExpenses must be used inside ExpenseProvider");
  }
  return ctx;
}
