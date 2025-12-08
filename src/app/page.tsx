import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EduNest',
  description: 'EduNest provides personalized educational content and automation tools for small businesses to improve their employee training programs. By leveraging AI-driven analytics, we tailor courses to the unique needs of each business.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EduNest</h1>
      <p className="mt-4 text-lg">EduNest provides personalized educational content and automation tools for small businesses to improve their employee training programs. By leveraging AI-driven analytics, we tailor courses to the unique needs of each business.</p>
    </main>
  )
}
