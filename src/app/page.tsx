import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-6 py-8 flex flex-col items-center text-center max-w-2xl mx-auto px-4">
      <div className="space-y-4 w-full">
        <h1 className="text-3xl font-bold">Oh, hello there 👋</h1>
        
        <p className="leading-relaxed">👨‍🎓 I&apos;m Vaisnav verma, a 18 year-old University student.</p>
        
        <p className="leading-relaxed">👨‍💻 A self taught programmer, part time cook and a lover of all things tech.</p>
        
        <p className="leading-relaxed">⚒️ I mainly work with Python, JavaScript and Golang on a daily basis.</p>
        
        <p className="leading-relaxed">🏡 Currently living in India.</p>
      </div>

      <div className="space-y-4 w-full">
        <p className="leading-relaxed">
          This blog will serve as a home for all my thoughts, notes and experiences, 
          ranging from programming to math, machine learning, web development and more. 
          Scroll down and check &apos;em out!
        </p>

        <p className="text-sm text-gray-600 italic leading-relaxed">
          (I&apos;m currently working on importing all my old posts from my other blog 
          and twitter threads which will take some time and might break this site from 
          time to time, please bear with me.)
        </p>
      </div>
    </div>
  );
}
