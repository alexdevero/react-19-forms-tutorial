import Link from 'next/link'

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="flex flex-row justify-center mb-4 gap-4">
        <Link href="/" className="underline">
          back to homepage
        </Link>
      </div>
      {children}
    </div>
  )
}
