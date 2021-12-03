import '../styles/main.scss'

export default function Main() {
  return (
    <div className="header__main">
      <h1>The Trail Runner SWT Is Here.</h1>
      <p>Durable. Comfortable. Ready to get dirty.</p>
      <div className="header__main__links">
        <a
          href="/"
          className='big-button'
        >Shop men</a>
        <a
          href="/"
          className='big-button'
        >Shop women</a>
      </div>
    </div>
  )
}