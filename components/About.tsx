import Image from "next/image";

const profiles = [
  { title: "Phone", value: "010-3676-1262" },
  { title: "Email", value: "yejinwoo.me@gmail.com" },
  { title: "Github", value: "https://github.com/yejwoo" },
];

const skills = [
  {
    name: "JavaScript",
    description:
      "브라우저에서 비동기적으로 실행되는 자바스크립트의 동작원리를 이해하고, async/await 패턴을 활용해 비동기 작업을 다룰 수 있습니다.",
  },
  {
    name: "React.js",
    description:
      "컴포넌트 기반 특징을 활용해 웹을 구조화하고 라우팅으로 부드러운 페이지 전환을 구현해 사용자 경험을 향상시킵니다.",
  },
  {
    name: "Node.js",
    description:
      "express 프레임워크로 서버를 구축하고 데이터베이스를 연결해 데이터를 활용할 수 있습니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <div className="flex flex-col-reverse lg:flex-row gap-16">
            <Image
              className="rounded-md lg:w-1/4"
              src="/profile.jpg"
              alt="profile"
              width={240}
              height={240}
            />
            <div className="lg:w-3/4">
              <h2 className="text-5xl mb-8 font-semibold tracking-tight">우예진</h2>
              <div className="flex flex-col gap-8">
                <div className="flex gap-12">
                  <div>
                    {profiles.map((profile, idx) => (
                      <p className="font-semibold" key={idx}>{profile.title}</p>
                    ))}
                  </div>
                  <div>
                    {profiles.map((profile, idx) => (
                      <div className="flex gap-2" key={idx}>
                        {profile.value.includes("git") ? (
                          <a
                            className="hover"
                            href={profile.value}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p>{profile.value}</p>
                          </a>
                        ) : (
                          <p>{profile.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-6 border border-zinc-500 rounded-lg p-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">
                      사용자의 <span>지갑</span>을 여는 개발자
                    </h3>
                    <p className="mt-1 text-lg leading-7">
                      <p>
                        취업 준비 시절 다양한 플랫폼을 조사해 이모티콘으로 100만원 이상의 수익을
                        창출한 경험이 있습니다.
                      </p>
                      <p>
                        잘 만든 서비스란, 값을 지불할 만큼 사용자에게 의미 있는 기능을 제공하는
                        서비스라고 생각합니다.
                      </p>
                      <p>
                        사용자 경험을 중시해 수많은 웹 중에서도 유저의 마음을 사로잡을 값어치 있는
                        웹 서비스를 개발하겠습니다.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Skills</h3>
          <div className="flex">
            <div className="flex flex-col gap-2">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <p className="py-1 text-lg font-medium">{skill.name}</p>
                  <p className="py-1 text-lg">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
