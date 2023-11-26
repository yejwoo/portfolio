import Image from "next/image";

const callouts = [
  {
    name: "자격증",
    description: "정보처리기사",
    content: "컴퓨터 공학 및 웹 기초 지식을 쌓기 위해 공부했으며 90점으로 자격증을 취득했습니다.",
    date: "2023.06",
  },
  {
    name: "청년취업사관학교",
    description: "풀스택 강의",
    content:
      "배운 이론을 실제로 구현하기 위해 온라인 강의를 수강했습니다. 프론트엔드 언어와 백엔드, 데이터베이스의 기초를 습득하고 활용할 수 있었습니다.",
    date: "2023.07",
  },
  {
    name: "남부여성발전센터",
    description: "클라우드 기반 웹개발 실무 프로젝트",
    content:
      "Azure 클라우드 사용법을 배우고 App Service를 이용해 React, Node.js 기반 풀스택 프로젝트를 배포했습니다.",
    date: "2023.09 - 2023.11",
  },
];

export default function Activities() {
  return (
    <section id="activities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl  mb-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Activities
          </h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
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
