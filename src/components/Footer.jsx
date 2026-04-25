function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-zinc-900">Avyanna Interiors</p>
          <p className="mt-3 text-sm text-zinc-500">
            Premium interior studio for modern homes and inspiring workspaces.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-700">Contact</p>
          <p className="mt-3 text-sm text-zinc-500">+91 98765 43210</p>
          <p className="text-sm text-zinc-500">hello@avyannainteriors.com</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-700">Location</p>
          <p className="mt-3 text-sm text-zinc-500">New Delhi | Gurugram | Noida</p>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Avyanna Interiors. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
