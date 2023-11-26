import { FaRegCopy } from "react-icons/fa";
import Image from "next/image";

const profiles = [
  { title: "Phone", value: "010-3676-1262" },
  { title: "Email", value: "yejinwoo.me@gmail.com" },
];

const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("우예진의 연락처를 복사했습니다.");
  } catch (e) {
    alert("복사에 실패하였습니다");
  }
};

export default function Contacts() {
  return (
    <section id="contacts" className="py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex mb-16 justify-center">
          <Image src="/yellow-bear.png" alt="bear" width={300} height={300} />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl mb-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contacts
          </h1>
          <p className="text-lg mb-10 leading-8">값어치 있는 서비스를 만들고 싶다면, 지금 바로 연락주세요!</p>

          <div className="flex gap-10">
            <div className="flex flex-col justify-center">
              {profiles.map((profile, idx) => (
                <h3 key={idx} className="mt-1 text-xl font-bold">{profile.title}</h3>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              {profiles.map((profile, idx) => (
                <div key={idx} className="flex justify-content gap-2">
                  <h3 className="mt-1 text-xl">{profile.value}</h3>
                  <button
                    onClick={() => {
                      handleCopyClipBoard(profile.value);
                    }}
                  >
                    <FaRegCopy className="text-gray-600 mt-1" />
                  </button>
                  <Message />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
