export default function Redirect() {
  setTimeout(() => {
    window.location.replace("/");
  }, 4000);

  return (
    <div className="redirectModal">
      <h1>Redirect</h1>
      <p>Please check your email for further instructions.</p>
      <p>Thank you!</p>
      <div></div>
    </div>
  );
}
