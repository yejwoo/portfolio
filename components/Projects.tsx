import Image from "next/image";
import Link from "next/link";
Link;
const projects = [
  {
    tags: ["JavaScript", "HTML", "CSS"],
    organization: "개인 프로젝트",
    title: "초코루나(Chocoluna)",
    date: "2023.08.09 - 2023.08.27",
    description:
      "좋아하는 게임을 만들어보고 싶었고, 자바스크립트 기본 기능을 익히기 위해 제작했습니다.",
    features: [
      "requestAnimationFrame() 메서드 이용 이미지 스프라이트 구현",
      "class 이용 오브젝트 생성 및 관리",
      "keyboard 이벤트리스너로 캐릭터 이동",
    ],
    opinion:
      "캐릭터, 아이템과 같은 오브젝트를 클래스로 관리하고, 비슷한 오브젝트는 상속하면서 객체 지향에 대한 개념을 다질 수 있었습니다. 후반부로 갈수록 코드 양이 길어져서 최대한 함수 하나에 한 가지 기능을 넣으려 노력했고, 하드코딩한 부분이 꽤 있고 전역 변수를 많이 사용했다는 점이 아쉬웠습니다. 처음으로 직접 구조를 설계하고 기능을 만든 프로젝트라서 의미있었습니다.",
    imageSrc: "/chocoluna.png",
    imageAlt: "chocoluna.png",
    href: "https://github.com/yejwoo/chocoluna",
  },
  {
    tags: ["React", "Axios", "Styled-Components", "Node.js", "Azure"],
    organization: "팀 프로젝트",
    title: "버그버스터즈(BugBusters)",
    date: "2023.11.06 ~ 2023.11.25",
    description:
      "벌레가 무서운 사람들을 위해 벌레 잡는 능력을 사고 파는 거래 사이트를 제작했습니다.",
    features: [
      "JWT 이용 회원가입 및 로그인",
      "게시물 작성 및 이미지 첨부, 삭제",
      "거래 진행 상태에 따른 거래 내역 리스트 조회",
      "socket.io 이용 회원간 실시간 채팅 및 알림 기능",
      "마이페이지 회원 정보 수정",
      "유저 타입에 따른 컴포넌트 렌더링",
    ],
    opinion:
      "유저 타입이 두 가지였기 때문에 조건에 따라 컴포넌트를 렌더링하는 리액트의 장점을 활용할 수 있었습니다. socket.io를 활용해 실시간 채팅 기능을 구현한 점이 가장 재밌으면서 어려웠습니다. 웹 서비스 개발 후 배포하는 과정까지 경험하며 실무에 대한 기반을 다질 수 있었습니다.",
    imageSrc: "/bugbusters.png",
    imageAlt: "bugbustesrs.png",
    href: "https://web-bugbusters.azurewebsites.net",
  },
  {
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    organization: "개인 프로젝트",
    title: "포트폴리오 웹",
    date: "2023.11.26",
    description: "진행한 프로젝트를 한 곳에 정리하기 위해 포트폴리오 웹을 제작 후 배포했습니다.",
    features: ["페이지 정리", "Vercel 배포"],
    opinion:
      "서버에서 만든 HTML을 자바스크립트에서 바로 실행하는 Next.js 사용 후 동적으로 HTML을 생성하는 리액트와의 차이를 느낄 수 있었습니다. BootStrap처럼 클래스 이름을 탈부착하는 TailwindCSS 프레임워크를 사용하며 스타일링 시간이 많이 단축돼 편리했고, 긴 클래스명 때문에 HTML을 읽기 힘들다는 단점도 보였습니다. 이번 프로젝트에서는 타입스크립트의 장점을 크게 활용하지 못한 듯해 추후 금융 서비스를 제작하면서 더 깊게 공부할 예정입니다.",
    imageSrc: "/portfolio.png",
    imageAlt: "portfolio.png.",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          <div className="mt-6 grid gap-20">
            {projects.map((project, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2">
                  <Image
                    className="flex object-cover rounded-lg shadow-xl"
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="lg:w-1/2 flex flex-col gap-2">
                  <div className="flex gap-1">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-md text-gray-500 ">{project.organization}</h3>
                  <div className="flex items-center gap-4">
                    <p className="text-xl text-base font-semibold text-gray-900">{project.title}</p>
                    <a
                      className="hover"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="p-2 bg-zinc-800 rounded-md text-white hover:bg-zinc-600">자세히 보기</button>
                    </a>
                  </div>
                  <p>{project.date}</p>
                  <p className="font-semibold">개요</p>
                  <p>{project.description}</p>
                  <p className="font-semibold">기능</p>
                  <ul>
                    {project.features?.map((feature, idx) => (
                      <li key={idx}>- {feature}</li>
                    ))}
                  </ul>
                  <p className="font-semibold">느낀 점</p>
                  <p>{project.opinion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
