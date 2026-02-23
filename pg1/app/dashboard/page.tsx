import { techs } from '@/app/lib/placeholder-data'
import Link from 'next/link';
import clsx from 'clsx';


export default function Page() {
  return (
    <main>
      <section>
        {techs
            .filter(tech => tech.id === '5')
            .map(tech => (
              <div key={tech.id} className="mt-8 flex flex-col items-center justify-between p-4 rounded-lg text-black h-full border-6 border-black" style={{ backgroundColor: tech.bg || '#F8F8F8' }}>
                <h2 className={clsx("text-3xl font-semibold", "font-head")}>{tech.name}</h2>
                <p className={clsx("text-lg mt-4 text-center", "font-body")}>{tech.desc}</p>
              </div>
            ))
        }
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techs
            .filter(tech => tech.id === '1' || tech.id === '2' || tech.id === '3')
            .map(tech => (
              <div key={tech.id} className="flex flex-col items-center justify-between p-4 rounded-lg text-black h-full" style={{ backgroundColor: tech.bg || '#F8F8F8' }}>
  
              <div className="flex flex-col items-center">
                <img className="mb-3" src={tech.image_url} width={tech.width} height={tech.height} alt={tech.image_alt} />
                <h3 className="md-3 text-2xl font-medium">{tech.name}</h3>
                <p className="text-md mt-2">{tech.desc}</p>
              </div>

              <Link href={`dashboard/${tech.name.toLowerCase()}`}className="mt-4 inline-block no-underline bg-blue-500 text-white rounded-[10px] font-bold border border-blue-500 px-3.75 py-2.5 focus:outline-none hover:bg-blue-600 transition">Explore {tech.name} projects</Link>
            </div>
            ))}
        </div>
      </section>
    </main>
  )
}
