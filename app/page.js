'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Gradients décoratifs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-morocco-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-oxford-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header Principal */}
        <header className="text-center mb-20 animate-fade-in">
          <div className="mb-8">
            <div className="flex justify-center items-center gap-6 text-5xl mb-6">
              <span className="animate-float" style={{animationDelay: '0s'}}>⚔️</span>
              <span className="animate-float" style={{animationDelay: '0.3s'}}>🕌</span>
              <span className="animate-float" style={{animationDelay: '0.6s'}}>📚</span>
            </div>
          </div>
          
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-burgundy via-morocco-red to-oxford-blue bg-clip-text text-transparent">
            L'Académie des Trois Langues
          </h1>
          
          <p className="font-cormorant text-2xl md:text-3xl italic text-ink/80 mb-4">
            Votre rituel linguistique quotidien
          </p>
          
          <div className="max-w-3xl mx-auto mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg">
            <p className="text-lg leading-relaxed text-gray-700">
              Entraînez-vous chaque jour dans <strong>trois dimensions linguistiques</strong> :<br />
              le <span className="text-burgundy font-semibold">français rostandien</span>, 
              le <span className="text-morocco-green font-semibold">darija marocain</span>, et 
              l'<span className="text-oxford-blue font-semibold">anglais soutenu</span>.
            </p>
          </div>
        </header>

        {/* Section Philosophie */}
        <section className="section-card mb-16 animate-slide-up">
          <h2 className="font-cinzel text-3xl text-center mb-8 text-ink">
            🎯 Un Rituel, Trois Langues, Trois Moments
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-burgundy/5 to-transparent rounded-lg border-l-4 border-gold">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="font-cinzel text-xl text-burgundy mb-3">Matin</h3>
              <p className="text-gray-700">
                <strong>Français soutenu</strong><br />
                Ton rostandien, panache et images
              </p>
              <p className="text-sm text-gray-600 mt-2">10 minutes</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-morocco-green/5 to-transparent rounded-lg border-l-4 border-morocco-red">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="font-arabic text-xl text-morocco-green mb-3">Midi</h3>
              <p className="text-gray-700">
                <strong>Darija marocain</strong><br />
                Expressions vivantes du quotidien
              </p>
              <p className="text-sm text-gray-600 mt-2">10 minutes</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-oxford-blue/5 to-transparent rounded-lg border-l-4 border-oxford-blue">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="font-playfair text-xl text-oxford-blue mb-3">Soir</h3>
              <p className="text-gray-700">
                <strong>Anglais soutenu</strong><br />
                Vocabulaire riche et sophistiqué
              </p>
              <p className="text-sm text-gray-600 mt-2">10 minutes</p>
            </div>
          </div>
        </section>

        {/* Navigation vers les 3 langues */}
        <section className="mb-16">
          <h2 className="font-cinzel text-3xl text-center mb-12 text-ink animate-slide-up">
            Choisissez votre langue d'entraînement
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Carte Français */}
            <Link href="/francais" className="group animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="h-full p-8 bg-gradient-to-br from-burgundy/10 to-gold/10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gold/30 hover:border-gold">
                <div className="text-6xl mb-6 text-center group-hover:animate-float">⚔️</div>
                <h3 className="font-cinzel text-2xl text-burgundy mb-4 text-center">
                  Français Rostandien
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  Ton noble, panache et verbe imagé inspiré de Cyrano de Bergerac
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✦</span>
                    <span>Alexandrins et métaphores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✦</span>
                    <span>Vocabulaire noble et soutenu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✦</span>
                    <span>Tirades et duels verbaux</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="french-button inline-block">
                    Commencer →
                  </span>
                </div>
              </div>
            </Link>

            {/* Carte Darija */}
            <Link href="/darija" className="group animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="h-full p-8 bg-gradient-to-br from-morocco-red/10 to-morocco-green/10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-morocco-red/30 hover:border-morocco-red">
                <div className="text-6xl mb-6 text-center group-hover:animate-float">🕌</div>
                <h3 className="font-arabic text-2xl text-morocco-green mb-4 text-center">
                  Darija Marocain
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  Dialecte vivant du Maroc, expressions authentiques du quotidien
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-morocco-red">◆</span>
                    <span>Phrases courantes et salutations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-morocco-red">◆</span>
                    <span>Expressions émotionnelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-morocco-red">◆</span>
                    <span>Dialogues authentiques</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="darija-button inline-block">
                    بدأ - Commencer →
                  </span>
                </div>
              </div>
            </Link>

            {/* Carte Anglais */}
            <Link href="/english" className="group animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="h-full p-8 bg-gradient-to-br from-oxford-blue/10 to-cambridge-blue/10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-oxford-blue/30 hover:border-oxford-blue">
                <div className="text-6xl mb-6 text-center group-hover:animate-float">📚</div>
                <h3 className="font-playfair text-2xl text-oxford-blue mb-4 text-center">
                  English Sophisticated
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  Vocabulaire riche, littéraire et académique pour s'exprimer avec éloquence
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-oxford-blue">●</span>
                    <span>Advanced vocabulary & idioms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-oxford-blue">●</span>
                    <span>Literary expressions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-oxford-blue">●</span>
                    <span>Elegant transformations</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="english-button inline-block">
                    Begin →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Avantages */}
        <section className="section-card mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <h2 className="font-cinzel text-3xl text-center mb-8 text-ink">
            ✨ Pourquoi ce rituel trilingue ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-gold/5 to-transparent rounded-lg border-l-4 border-burgundy">
              <h3 className="font-semibold text-lg mb-3 text-burgundy">🧠 Enrichissement Mental</h3>
              <p className="text-gray-700">
                Trois styles linguistiques différents stimulent votre créativité et votre flexibilité cognitive.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-morocco-green/5 to-transparent rounded-lg border-l-4 border-morocco-red">
              <h3 className="font-semibold text-lg mb-3 text-morocco-green">🎨 Diversité Culturelle</h3>
              <p className="text-gray-700">
                Du panache français au pragmatisme marocain jusqu'à l'élégance britannique.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-oxford-blue/5 to-transparent rounded-lg border-l-4 border-oxford-blue">
              <h3 className="font-semibold text-lg mb-3 text-oxford-blue">⏱️ Routine Structurée</h3>
              <p className="text-gray-700">
                30 minutes par jour, réparties sur 3 moments : matin, midi, soir.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-sage/5 to-transparent rounded-lg border-l-4 border-gold">
              <h3 className="font-semibold text-lg mb-3 text-ink">📈 Progression Visible</h3>
              <p className="text-gray-700">
                Exercices quotidiens avec auto-évaluation pour mesurer vos progrès.
              </p>
            </div>
          </div>
        </section>

        {/* Serment */}
        <section className="p-12 rounded-xl bg-gradient-to-br from-burgundy via-morocco-red to-oxford-blue text-white shadow-2xl animate-slide-up" style={{animationDelay: '0.5s'}}>
          <h2 className="font-cinzel text-3xl text-center mb-6">
            🕯️ Serment de l'Académie
          </h2>
          <blockquote className="font-cormorant text-xl md:text-2xl italic text-center max-w-3xl mx-auto leading-relaxed">
            Je m'engage à m'entraîner avec régularité, <br />
            À enrichir mon verbe en trois langues, <br />
            À parler avec noblesse en français, <br />
            Avec authenticité en darija, <br />
            Et avec élégance en anglais.
          </blockquote>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 mt-16 border-t-2 border-gray-300">
          <div className="flex justify-center gap-8 text-4xl mb-6">
            <span className="animate-float" style={{animationDelay: '0s'}}>⚔️</span>
            <span className="animate-float" style={{animationDelay: '0.3s'}}>🕌</span>
            <span className="animate-float" style={{animationDelay: '0.6s'}}>📚</span>
          </div>
          <p className="font-cormorant italic text-xl text-ink/80">
            30 minutes par jour pour trois langues magnifiques
          </p>
        </footer>
      </div>
    </div>
  )
}
