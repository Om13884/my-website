export interface Project {
  id: number
  category: string
  thumb: string
  thumbIcon: string
  badge: string
  badgeClass: string
  industry: string
  title: string
  problem: string
  result?: string
  stats?: { num: string; label: string }[]
  tools: string[]
  timeline: string
  client: string
  image?: string
}

export interface FaqItem {
  id: number
  q: string
  a: string
}
