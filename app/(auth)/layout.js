import Image from "next/image";


export default function AuthLayout({ children }) {
  return (
    <>
    <div className="authLayout">
      <div className="row h-100 overflow-hidden justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 h-100 overflow-y-auto overflow-lg:hidden">
          {children}
        </div>
        <div className="col-lg-6 col-xl-7 col-xxl-8 d-none d-lg-block">
          <Image
            src={'/img/login5.webp'}
            alt="banner"
            width={1200}
            height={900}
            className="w-100 h-100 object-fit-cover object authBanner"
          />
        </div>
      </div>
    </div>
    </>
  );
}
