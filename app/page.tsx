import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="m-6 p-6 bg-slate-50 rounded-lg">
        <h2 className={`text-5xl font-bold tracking-wide`}>Bryce Carr</h2>
        <div className="space-x-4 mt-5 flex flex-row items-center justify-between px-5">
          <a className="text-lg text-blue-600 flex items-center" href="https://github.com/hyperhtml" target="_blank"><FontAwesomeIcon className="h-8 pr-1" icon={faGithub} /> Github</a>
          <a className="text-lg text-blue-600 flex items-center" href="https://www.linkedin.com/in/brycecarr/" target="_blank"><FontAwesomeIcon className="h-8 pr-1" icon={faLinkedin} /> LinkedIn</a>
        </div>
      </div>
      <div className="text-sm text-slate-400 p-1">
      {(new Date()).getFullYear()}
      </div>
    </main>
  );
}
