import Image from "next/image";

const callouts = [
  {
    name: "(주)트레이디",
    description: "UI/UX 디자이너 근무",
    content:
      "웹을 제작하며 스타트업의 전반적인 문화를 배웠습니다. 디자인 스터디, 점심 식사 등을 통해 팀워크를 다져 최우수팀 상을 받기도 했습니다. 개발자와 협업하며 디자인을 실제로 구현하는 개발 직무에 관심이 생겨 공부를 시작했습니다.",
    date: "2022.05 - 2022.11",
    imageSrc: "/helpsavetax.png",
    imageAlt: "트레이디",
  },
  {
    name: "Thinkupman",
    description: "글로벌 캐릭터 이모티콘 제작",
    content:
      "비영리 기독교 단체 thinkupman의 애니메이션 이모티콘을 제작했습니다. 영어로 이메일을 작성하고 현지 시각에 맞춰 화상 통화를 하며 글로벌 비즈니스 매너를 길렀습니다.",
    date: "2022.11 - 2022.12",
    imageSrc: "/thinkupman.png",
    imageAlt: "thinkupman.png",
  },
];

export default function Works() {
  return (
    <section id="works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl mb-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Works
          </h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">{callout.name}</h3>
                <p className="text-base text-gray-600">{callout.date}</p>
                <p className="text-lg font-semibold text-gray-900">{callout.description}</p>
                <p className="text-base text-gray-900">{callout.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
