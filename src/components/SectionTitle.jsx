import React from 'react'

const SectionTitle = ({ subtitulo, tituloPrincipal, palabraResaltada }) => {
  return (
    <div className="flex flex-col mb-12 space-y-4">
      <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-foreground">
        {tituloPrincipal} <span className="text-green-500">{palabraResaltada}</span>
      </h3>

      <div className="flex flex-col gap-4">
        <h2 className="text-violet-500 font-bold tracking-[0.2em] text-[12px] md:text-base uppercase leading-relaxed">
          {subtitulo}
        </h2>
        
        <div className="h-[3px] w-16 bg-gradient-to-r from-violet-500 to-green-500 rounded-full" />
      </div>
    </div>
  )
}

export default SectionTitle