"use client";

import { Priority } from "@/state/api"
import ReuseablePriority from "../reusable"

const Urgent = () => {
  return (
    <ReuseablePriority priority={Priority.Urgent} />
  )
}
export default Urgent