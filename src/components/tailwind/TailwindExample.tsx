export default function TailwindExample() {
  return (
    <>
      <div className="flex">
        <div className="bg-red-500">
          <p className="text-[24px text-[#fff] font-bold text-right ">
            Hello world!!!
          </p>
          <p className="whitespace-pre text-center">
            이건 테일윈드 테스트 용 p태그 입니다.{"\n"} 직접 사용하면서
            익히세요.
          </p>
        </div>
        <div className="bg-blue-500">
          <p>Hello world2!!</p>
          <p className="whitespace-pre">
            이건 flex를 이용하여 div를 옆에 붙인 것입니다. {"\n"} 그럼 뿅
          </p>
        </div>
      </div>
      <div className="flex md:gap-[5px] lg:gap-[10px] xl:gap-[20px] pt-[10px]">
        <div className="bg-red-500">
          <p className="text-[24px text-[#fff] font-bold text-right ">
            Hello world!!!
          </p>
          <p className="whitespace-pre text-center">
            이건 테일윈드 테스트 용 p태그 입니다.{"\n"} 직접 사용하면서
            익히세요.
          </p>
        </div>
        <div className="bg-blue-500">
          <p className="hover:text-white">Hello world2!!</p>
          <p className="whitespace-pre">
            이건 flex를 이용하여 div를 옆에 붙인 것입니다. {"\n"} 그럼 뿅
          </p>
        </div>
      </div>
    </>
  );
}
