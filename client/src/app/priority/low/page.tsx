"use client";

import { Priority } from "@/state/api"
import ReuseablePriority from "../reusable"

const Low = () => {
  return (
    <ReuseablePriority priority={Priority.Low} />
  )
}
export default Low