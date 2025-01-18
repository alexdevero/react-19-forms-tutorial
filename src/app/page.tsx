import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">React 19 forms tutorial</h1>

      <div className="flex flex-row justify-center mt-4 gap-4">
        <Link href="/hook-form" className="underline">
          Hook Form
        </Link>
        <Link href="/react-form" className="underline">
          React Form
        </Link>
      </div>
    </div>
  )
}
