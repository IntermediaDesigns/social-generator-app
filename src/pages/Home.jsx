import { useUser } from "../lib/context/user";
import { Dashboard } from "./Dashboard";

export function Home() {
  const user = useUser();

  return (
    <>
      {user && user.current ? (
        <Dashboard />
      ) : (
        <section className="homeHeader">
          <h1>Welcome to SnapCraft </h1>
          <p>Crafting Your Social Imagery</p>
          <img
            className="homeImg"
            src={process.env.PUBLIC_URL + "/post.png"}
            alt="example"
          />
          <div className="homeContent">
            <h2>🌟 Unleash the Power of AI with SnapCraft! 🌟</h2>
            <p>
              Are you ready to revolutionize your social media presence? With
              <strong> SnapCraft</strong>, you can do just that. Our AI-powered
              application crafts engaging social media posts tailored to your
              brand and topics of choice.
            </p>
            <h2>Why SnapCraft?</h2>
            <ul>
              <li>
                <strong>AI-Powered:</strong> Leverage the power of AI to
                generate captivating content.
              </li>
              <li>
                <strong>Brand-Centric:</strong> Aligns with your brand
                guidelines to maintain a consistent brand voice.
              </li>
              <li>
                <strong>Social Media Integration:</strong> Directly share to
                Instagram, Facebook, TikTok, and more.
              </li>
              <li>
                <strong>Watermark Protection:</strong> Downloaded images come
                with a watermark to protect your content.
              </li>
            </ul>
            <p>
              SnapCraft is built with user-friendly frameworks and utilizes the
              HuggingFace API for advanced AI capabilities. It also features
              robust user authentication and secure login/logout processes.
            </p>
            <h2>Ready to Craft Your Social Media Success?</h2>
            <p>
              Join SnapCraft today and let our AI do the crafting for you.
              Transform your social media imagery, one post at a time!
            </p>
          </div>
        </section>
      )}
      <section className="homeHero"></section>
    </>
  );
}
