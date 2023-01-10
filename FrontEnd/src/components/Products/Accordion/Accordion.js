import "./Accordion.css";
import { Link } from "react-router-dom";

const Accordion = () => {
  return (
    <div className="accordion-container">
      <Link to="/instruction">
        <h2 style={{ fontWeight: "600" }}>WASH & CARE INSTRUCTIONS</h2>
      </Link>

      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer"
          type="checkbox"
        />
        <label className="faq-drawer__title" for="faq-drawer">
          SHIPPING
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <p>
              We accept returns on non-sale items that are in original
              packaging, unused, and unwashed within 30 days of receipt. Please
              follow our returns/exchanges process below. If items do not meet
              our requirements for return, they will be shipped back to you in
              lieu of a refund. Shipping and handling charges are non-refundable
              (exceptions may apply). We do not cover the cost of return
              shipping.
            </p>
          </div>
        </div>
      </div>

      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-2"
          type="checkbox"
        />
        <label className="faq-drawer__title" for="faq-drawer-2">
          RETURNS
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <p>
              Returns & Exchanges Process: If item(s) fit within our returns
              guidelines contact us with the message “I want to submit a
              return.” or “ I want to submit an exchange.” After you send the
              item(s), let us know the package is on its way and once we receive
              it, we’ll process your refund. Please allow 7-10 business days for
              the credit to appear on your account after your return is
              processed.
            </p>
          </div>
        </div>
      </div>

      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer-3"
          type="checkbox"
        />
        <label className="faq-drawer__title" for="faq-drawer-3">
          CORONAVIRUS IMPACT ON ALL ORDERS
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <p>
              The impact of the Coronavirus has been felt by many, including our
              vendors, warehouses and manufacturing partners around the world.
              Unfortunately, this will cause pre-orders and in-stocks to be
              delayed. Please understand that we are staying in constant contact
              with our partners to determine the timeline of any potential
              delays and will actively communicate this important information to
              you as soon as possible. Thank you for your patience and your
              support during this troubling time!
            </p>
          </div>
        </div>
      </div>

      <div className="faq-drawer">
        <Link to="/help/contact-us">
          <label className="faq-drawer__title">ASK A QUESTION</label>
        </Link>
      </div>
    </div>
  );
};

export default Accordion;
