"use client";

import { Priority } from "@/state/api"
import ReuseablePriority from "../reusable"

const High = () => {
  return (
    <ReuseablePriority priority={Priority.High} />
  )
}
export default High