import Image from "next/image";
export default function MainLogo() {
  return (
    <div className="main-logo-wrapper main-logo-wrapper_centered">
      <Image
        width={368}
        height={204}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="Barbershop Borodinsky"
        src="/images/logo-main.png"
      />
    </div>
  );
}
