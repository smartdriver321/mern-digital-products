import ThemeToggleButton from './ThemeToggleButton'

export default function AdminNavbar() {
  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <div className='navbar max-w-[1200px] mx-auto'>
      <div className='navbar-center flex'>
        <button onClick={logout} className='btn'>
          Logout
        </button>
      </div>

      <div className='navbar-end gap-12'>
        <ThemeToggleButton />
      </div>
    </div>
  )
}
