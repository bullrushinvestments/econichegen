import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoNicheGen',
  description: 'EcoNicheGen uses AI to help businesses and e-commerce platforms create unique, sustainable content tailored for niche markets, addressing the need for personalized, eco-friendly marketing.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoNicheGen</h1>
      <p className="mt-4 text-lg">EcoNicheGen uses AI to help businesses and e-commerce platforms create unique, sustainable content tailored for niche markets, addressing the need for personalized, eco-friendly marketing.</p>
    </main>
  )
}
