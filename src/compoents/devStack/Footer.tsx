import FooterLogo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="mt-35">

      <div className="h-px bg-[#F1F5F9]"></div>

      <div className="grid grid-cols-4 container mx-auto mt-15 mb-15">
        <div>
          <div>
            <a href="#">
              <img src={FooterLogo} alt="FooterLogo" />
            </a>
            <p className="text-[#64748B] my-5">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
          </div>

          <div>
            <ul className="flex gap-4 font-semibold text-[#475569] mt-6 my-5">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-10">
          <h2 className="text-[#0F172A] font-bold pb-2">PRODUCT</h2>
          <ul className="text-[#64748B] text-xl">
            <li className="text-[#64748B] py-1">
              <a href="#">Home</a>
            </li>
            <li className="text-[#64748B] py-1">
              <a href="#">Technologies</a>
            </li>
            <li className="text-[#64748B] py-1">
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0F172A] font-bold pb-2">COMPANY</h2>
          <ul className="text-[#64748B] text-xl">
            <li className="text-[#64748B] py-1">
              <a href="#">About</a>
            </li>
            <li className="text-[#64748B] py-1">
              <a href="#">Contact</a>
            </li>
            <li className="text-[#64748B] py-1">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0F172A] font-bold pb-2">LEGAL</h2>
          <ul className="text-[#64748B] text-xl">
            <li className="text-[#64748B] py-1">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="text-[#64748B] py-1">
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-px container mx-auto bg-[#F1F5F9]"></div>

      <div className="container mx-auto my-10">
        <div className="flex flex-2 text-[#64748B] justify-between items-center text-center">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex  text-[#64748B] gap-6">
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
