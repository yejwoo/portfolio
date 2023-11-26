import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="lg:w-1/3">
              <Image
                className="rounded-md"
                src="/profile.jpg"
                alt="profile"
                width={240}
                height={240}
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-5xl mb-8 font-semibold tracking-tight">우예진</h2>
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">사용자의 지갑을 여는 개발자</h3>
              <p className="mt-2 text-lg leading-8">
                <p>
                  취업 준비 시절 다양한 플랫폼을 조사해 이모티콘으로 <b>100만원</b> 이상의 수익을
                  창출한 경험이 있습니다.
                </p>
                <p>
                  잘 만든 서비스란, 값을 지불할 만큼 사용자에게 의미 있는 기능을 제공하는 서비스라고
                  생각합니다.
                </p>
                <p>
                  사용자 경험을 중시해 수많은 웹 중에서도 유저의 마음을 사로잡을 값어치 있는 웹 서비스를 개발하겠습니다.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
