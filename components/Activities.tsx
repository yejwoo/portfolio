import Image from "next/image";

const callouts = [
  {
    description: "클라우드 기반 웹개발 실무 프로젝트",
    content:
      "React로 반응형 웹을 만드는 방법과 데이터 패칭하는 법을 배웠습니다. 또한 MySQL에서 데이터베이스를 생성해 Azure로 연결한 뒤, Node.js 서버에서 데이터를 활용했습니다. 완성한 프로젝트를 Azure App Service와 연결한 뒤 Github Actions에서 자동 배포하는 설정을 익혔습니다.",
    date: "2023.09 - 2023.11",
  },
  {
    description: "정보처리기사 취득",
    content: "컴퓨터 공학 및 웹 기초 지식을 쌓기 위해 공부했으며, 90점으로 자격증을 취득했습니다. 코딩을 해보기 전 직접 문제를 풀며 프로그래밍 언어의 동작 원리를 이해할 수 있었습니다.",
    date: "2023.06",
  },
];

export default function Activities() {
  return (
    <section id="activities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl mb-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Activities
          </h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout, idx) => (
              <div key={idx} className="group relative">
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
