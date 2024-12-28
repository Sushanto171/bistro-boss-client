import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-neutral text-neutral-content ">
      <div className="md:grid grid-cols-2 space-y-8 md:space-y-0 ">
        <aside className="md:text-right pr-16 text-sm space-y-1 py-4">
          <h4 className="uppercase font-semibold text-lg my-4">Contact US</h4>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </aside>
        <nav className="bg-sky-950 pl-16 py-4">
          <h6 className="uppercase font-semibold text-lg my-4">Follow use</h6>
          <p>Join us on social media</p>
          <div className=" flex justify-start items-center gap-5 mt-4">
            <button>
              <FaFacebookF />
            </button>

            <button>
              <FaInstagram />
            </button>
            <button>
              <FaXTwitter />
            </button>
          </div>
        </nav>
      </div>
      <div className="footer footer-center bg-black/50 text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Bistro boss restaurant.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
