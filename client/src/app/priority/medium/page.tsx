"use client";

import { Priority } from "@/state/api"
import ReuseablePriority from "../reusable"

const Medium = () => {
  return (
    <ReuseablePriority priority={Priority.Medium} />
  )
}
export default Medium