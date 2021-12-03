import '../styles/email-subscription.scss'

export default function EmailSubscription() {
  return (
    <div className="email-subscription">
      <h2>Want first dibs?</h2>
      <p>
        Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.
      </p>
      <form className="email-subscription__form">
        <input
          type="text"
          placeholder='Enter Your Email Address'
        />
        <button
          type='submit'
          className='big-button'
        >
          sign up
        </button>
      </form>
      <span>
        Note: You can opt-out at any time. See our&nbsp;
        <a href="/">
          Privacy Policy
        </a>
        &nbsp;and&nbsp;
        <a href="/">
          Terms
        </a>
      </span>
    </div>
  )
}