import Image from "next/image";

export function ServiceCard() {
  return (
    <div>
      <div className="bg-slate-100 shadow-md rounded-lg overflow-hidden w-[250px] h-[250px]">
        <div className="h-full bg-slate-200 w-full relative">
          <Image
            src="https://i.pinimg.com/736x/94/dd/e7/94dde78a5bba9e8c0b255da1e5f79cf1.jpg"
            alt="service"
            width={300}
            height={430}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-black-500 mt-2 hover:text-underline">5000 CFA</h2>
        <p className="text-sm text-gray-800">Best cleaning service</p>
        <p className="text-sm text-gray-500">Yaounde Cameroon</p>
      </div>
    </div>
  );
}
