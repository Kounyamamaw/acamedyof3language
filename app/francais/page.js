'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FrancaisPage() {
  const [phraseExercice, setPhraseExercice] = useState('')
  const [exerciceLibre, setExerciceLibre] = useState('')
  const [motJourExercice, setMotJourExercice] = useState('')
  const [checks, setChecks] = useState({
    image: false,
    rythme: false,
    chute: false
  })

  const handleCheckChange = (key) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-parchment to-cream">
      {/* Gradients décoratifs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-burgundy hover:text-dark-burgundy font-semibold transition-colors">
            <span>←</span> Retour à l'accueil
          </Link>
        </nav>

        {/* Header */}
        <header className="text-center mb-16 py-16 px-8 bg-burgundy/5 border-y-2 border-gold relative animate-fade-in">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-4xl text-gold/60 hidden md:block">⚔</div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl text-gold/60 hidden md:block scale-x-[-1]">⚔</div>
          
          <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-burgundy mb-4 tracking-wide drop-shadow-sm">
            ⚔️ Français Rostandien
          </h1>
          <p className="font-cormorant text-2xl text-dark-burgundy italic mb-6">
            S'exercer au ton noble, à la manière de Cyrano
          </p>
          <blockquote className="italic text-red-accent font-cormorant text-xl mt-8 pt-6 border-t border-gold/50">
            Le panache n'est pas un mot : c'est une discipline.
          </blockquote>
        </header>

        {/* Introduction */}
        <section className="french-card animate-slide-up" style={{animationDelay: '0.1s'}}>
          <h2 className="french-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-gold">🎭</span> Qu'est-ce que le ton rostandien ?
          </h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Le <strong>ton rostandien</strong>, immortalisé par Edmond Rostand dans <em>Cyrano de Bergerac</em> (1897), 
              est l'art de parler en <strong>alexandrins</strong> avec panache, éloquence et esprit.
            </p>
            <p>
              Dans le film de Jean-Paul Rappeneau (1990), Gérard Depardieu incarne ce verbe flamboyant. 
              Comme il le dit : <em>« Cyrano, c'était de la musique. »</em>
            </p>
            <div className="bg-gold/10 p-6 border-l-4 border-gold rounded">
              <p className="font-semibold mb-2">Caractéristiques clés :</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-gold">✦</span> Images concrètes et visuelles</li>
                <li className="flex gap-2"><span className="text-gold">✦</span> Virtuosité verbale et rythme</li>
                <li className="flex gap-2"><span className="text-gold">✦</span> Mélange de noblesse et d'humour</li>
                <li className="flex gap-2"><span className="text-gold">✦</span> Autodérision héroïque</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mot du jour */}
        <section className="french-card animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h2 className="french-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-gold">📘</span> Le Mot du Jour
          </h2>
          <div className="bg-parchment p-8 rounded-lg border-2 border-gold/30">
            <h3 className="font-cinzel text-2xl text-red-accent mb-4">Mot : <strong>Faste</strong></h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-burgundy mb-2">Définition :</h4>
                <p>Éclat, magnificence, grandeur ostentatoire mais maîtrisée.</p>
              </div>
              <div>
                <h4 className="font-semibold text-burgundy mb-2">Exemples :</h4>
                <ul className="space-y-2 ml-6 italic">
                  <li className="flex gap-2"><span className="text-gold">•</span> Il m'accueillit avec faste.</li>
                  <li className="flex gap-2"><span className="text-gold">•</span> La cour brillait d'un faste presque indécent.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-burgundy mb-2">À éviter :</h4>
                <p className="text-red-600">L'employer pour des choses triviales sans ironie.</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gold/30">
                <h4 className="font-semibold text-burgundy mb-3">📝 Mini-exercice :</h4>
                <p className="mb-3 italic">Écris une phrase où <em>faste</em> exprime à la fois la grandeur et la solitude.</p>
                <textarea 
                  value={motJourExercice}
                  onChange={(e) => setMotJourExercice(e.target.value)}
                  className="w-full min-h-[100px] p-4 rounded border-2 border-gold/50 focus:border-burgundy focus:outline-none bg-white resize-y font-cormorant text-lg"
                  placeholder="Ton exemple ici..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Atelier de transformation */}
        <section className="french-card animate-slide-up" style={{animationDelay: '0.3s'}}>
          <h2 className="french-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-gold">✒️</span> L'Atelier de Transformation
          </h2>
          
          <div className="mb-6">
            <h3 className="font-cinzel text-xl text-red-accent mb-3">Phrase simple du jour</h3>
            <blockquote className="french-quote">
              Je n'ai pas dormi de la nuit.
            </blockquote>
          </div>

          <div className="mb-6">
            <h3 className="font-cinzel text-xl text-red-accent mb-3">Consigne</h3>
            <p className="mb-4">Transforme cette phrase en une phrase :</p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-2"><span className="text-gold font-bold">→</span> à <strong>image unique</strong></li>
              <li className="flex gap-2"><span className="text-gold font-bold">→</span> au <strong>ton rostandien</strong></li>
              <li className="flex gap-2"><span className="text-gold font-bold">→</span> avec une <strong>chute nette</strong></li>
            </ul>
          </div>

          <div className="mb-6 bg-burgundy/5 p-6 rounded">
            <h3 className="font-cinzel text-xl text-burgundy mb-3">Rappels</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-gold">✦</span> pas plus de 2 phrases</li>
              <li className="flex gap-2"><span className="text-gold">✦</span> privilégie les images concrètes (nuit, lune, veille, feu, armure…)</li>
              <li className="flex gap-2"><span className="text-gold">✦</span> lis-la à voix haute</li>
            </ul>
          </div>

          <div className="exercise-box border-gold">
            <div className="absolute -top-4 left-6 bg-parchment-beige px-4 text-2xl">✒️</div>
            <h3 className="font-cinzel text-lg text-burgundy mb-3">🖋️ Ta réponse :</h3>
            <textarea 
              value={phraseExercice}
              onChange={(e) => setPhraseExercice(e.target.value)}
              className="w-full min-h-[120px] p-5 rounded border-2 border-gold focus:border-burgundy focus:outline-none focus:shadow-lg transition-all bg-white resize-y font-cormorant text-lg"
              placeholder="Écris ta phrase rostandienne ici..."
            />
          </div>

          <div className="mt-6 bg-cream p-6 rounded border-l-4 border-burgundy">
            <h3 className="font-cinzel text-lg text-burgundy mb-4">🪞 Auto-évaluation</h3>
            <div className="space-y-3">
              {[
                { key: 'image', label: 'Ai-je utilisé une image visible ?' },
                { key: 'rythme', label: 'Ma phrase a-t-elle un rythme ?' },
                { key: 'chute', label: 'La chute est-elle claire ?' }
              ].map((check) => (
                <label key={check.key} className="flex items-center gap-3 cursor-pointer hover:translate-x-1 transition-transform">
                  <input 
                    type="checkbox" 
                    checked={checks[check.key]}
                    onChange={() => handleCheckChange(check.key)}
                    className="w-5 h-5 cursor-pointer accent-burgundy"
                  />
                  <span>{check.label}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Thème du jour */}
        <section className="french-card animate-slide-up" style={{animationDelay: '0.4s'}}>
          <h2 className="french-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-gold">🗡️</span> Le Thème du Jour
          </h2>
          
          <div className="mb-6">
            <h3 className="font-cinzel text-xl text-red-accent mb-3">Thème : <strong>La fatigue digne</strong></h3>
            <blockquote className="french-quote">
              Parler de l'épuisement sans plainte, avec noblesse.
            </blockquote>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-burgundy mb-3">💡 Pistes possibles :</h3>
            <ul className="space-y-2 ml-6">
              {[
                'armure trop lourde',
                'veille forcée',
                'flamme qui vacille sans s'éteindre',
                'soldat resté debout après la bataille'
              ].map((piste, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-gold mt-1">◆</span>
                  <span>{piste}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="exercise-box border-gold">
            <div className="absolute -top-4 left-6 bg-parchment-beige px-4 text-2xl">🖋️</div>
            <h3 className="font-cinzel text-lg text-burgundy mb-3">Exercice libre :</h3>
            <textarea 
              value={exerciceLibre}
              onChange={(e) => setExerciceLibre(e.target.value)}
              className="w-full min-h-[120px] p-5 rounded border-2 border-gold focus:border-burgundy focus:outline-none focus:shadow-lg transition-all bg-white resize-y font-cormorant text-lg"
              placeholder="Écris une phrase rostandienne sur ce thème..."
            />
          </div>
        </section>

        {/* Lexique */}
        <section className="french-card animate-slide-up" style={{animationDelay: '0.5s'}}>
          <h2 className="french-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-gold">📚</span> Lexique Rostandien
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-burgundy text-cream">
                  <th className="p-4 text-left font-cinzel">Mot</th>
                  <th className="p-4 text-left font-cinzel">Sens</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mot: 'Faste', sens: 'Grandeur éclatante' },
                  { mot: 'Congédier', sens: 'Renvoyer avec autorité' },
                  { mot: 'Ardeur', sens: 'Passion vive' },
                  { mot: 'Panache', sens: 'Bravoure flamboyante' },
                  { mot: 'Ferveur', sens: 'Intensité du sentiment' },
                  { mot: 'Dignité', sens: 'Noblesse dans l'épreuve' },
                  { mot: 'Hanap', sens: 'Coupe à boire médiévale' },
                  { mot: 'Pétunez', sens: 'Fumer du tabac (archaïque)' },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-gold/20 hover:bg-gold/5 transition-colors">
                    <td className="p-4 font-semibold text-burgundy">{item.mot}</td>
                    <td className="p-4">{item.sens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Règles d'or */}
        <section className="french-card bg-gradient-to-br from-gold/10 to-transparent animate-slide-up" style={{animationDelay: '0.6s'}}>
          <h2 className="french-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-gold">🎯</span> Règles d'Or du Verbe
          </h2>
          <ul className="space-y-3">
            {[
              'Un mot rare ≠ un mot juste',
              'Une image vaut mieux qu'une explication',
              'La phrase doit sonner',
              'La chute est une lame',
              'Le silence fait partie du discours'
            ].map((regle, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-gold text-xl">✦</span>
                <span className="font-semibold">{regle}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Serment */}
        <section className="bg-gradient-to-br from-dark-burgundy to-burgundy text-cream p-12 rounded-lg shadow-2xl relative overflow-hidden animate-slide-up" style={{animationDelay: '0.7s'}}>
          <div className="absolute -top-10 -right-10 text-9xl opacity-10 rotate-12">🕯️</div>
          <h2 className="font-cinzel text-3xl mb-6">🕯️ Serment du Verbe</h2>
          <blockquote className="font-cormorant text-xl italic text-center">
            Je n'emploierai pas le verbe pour paraître,<br />
            mais pour dire avec grandeur ce que je ressens avec vérité.
          </blockquote>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 mt-8 border-t-2 border-gold/30">
          <div className="text-4xl text-gold mb-4 animate-float">⚔️</div>
          <p className="font-cormorant italic text-xl text-red-accent">
            À demain, au même endroit. Le verbe s'entraîne comme l'épée.
          </p>
          <Link href="/" className="inline-block mt-6 text-burgundy hover:text-dark-burgundy font-semibold transition-colors">
            ← Retour aux trois langues
          </Link>
        </footer>
      </div>
    </div>
  )
}
