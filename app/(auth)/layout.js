import Image from "next/image";


export default function AuthLayout({ children }) {
  return (
    <>
    <div className="authLayout">
      <div className="row h-100 overflow-hidden">
        <div className="col-4 h-100 overflow-hidden">
          {children}
        </div>
        <div className="col-8">
          <Image
            src={'/img/login5.webp'}
            alt="banner"
            width={1200}
            height={900}
            className="w-100 object-fit-contain object authBanner"
          />
        </div>
      </div>
    </div>
    </>
  );
}
