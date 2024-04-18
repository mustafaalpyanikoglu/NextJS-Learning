import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Dashboard" // Sadece bu title'ı yazdırır
  },
}

function BarChart() {
  return <h1>Bar chart</h1>
}

export default function Dashboard() {
  return <h1>Dashboard</h1>
}