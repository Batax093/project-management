"use client";

import { Priority } from "@/state/api"
import ReuseablePriority from "../reusable"

const Backlog = () => {
  return (
    <ReuseablePriority priority={Priority.Backlog} />
  )
}
export default Backlog