'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DarijaPage() {
  const [phraseExercice, setPhraseExercice] = useState('')
  const [dialogueResponse, setDialogueResponse] = useState('')
  const [expressionExercice, setExpressionExercice] = useState('')

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-sand to-mint/20">
      {/* Gradients décoratifs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-morocco-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-morocco-green hover:text-morocco-red font-semibold transition-colors">
            <span>←</span> العودة - Retour à l'accueil
          </Link>
        </nav>

        {/* Header */}
        <header className="text-center mb-16 py-16 px-8 bg-morocco-green/5 border-y-2 border-morocco-red relative animate-fade-in">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-4xl hidden md:block">🕌</div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl hidden md:block">🕌</div>
          
          <h1 className="font-arabic text-5xl md:text-6xl font-bold text-morocco-green mb-4">
            🕌 الدارجة المغربية
          </h1>
          <h2 className="font-cinzel text-4xl text-morocco-red mb-6">
            Darija Marocain
          </h2>
          <p className="font-lora text-xl text-gray-700 italic">
            Le dialecte vivant du Maroc, langue du cœur et du quotidien
          </p>
        </header>

        {/* Introduction */}
        <section className="darija-card animate-slide-up" style={{animationDelay: '0.1s'}}>
          <h2 className="darija-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-morocco-red">🇲🇦</span> Qu'est-ce que la Darija ?
          </h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              La <strong>darija</strong> (الدارجة) est le dialecte arabe parlé quotidiennement au Maroc. 
              C'est un <strong>mélange vivant</strong> d'arabe, de berbère (amazigh), de français et d'espagnol.
            </p>
            <p>
              Contrairement à l'arabe classique (utilisé à l'école et dans l'administration), 
              la darija est la <strong>langue de la rue</strong>, des familles, des souks et des cafés.
            </p>
            <div className="bg-morocco-red/10 p-6 border-l-4 border-morocco-green rounded">
              <p className="font-semibold mb-2">Caractéristiques :</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-morocco-red">◆</span> Expressions imagées et chaleureuses</li>
                <li className="flex gap-2"><span className="text-morocco-red">◆</span> Mélange d'arabe et de langues européennes</li>
                <li className="flex gap-2"><span className="text-morocco-red">◆</span> Nombreuses variations régionales</li>
                <li className="flex gap-2"><span className="text-morocco-red">◆</span> Religion intégrée dans le langage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mot/Expression du jour */}
        <section className="darija-card animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h2 className="darija-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-morocco-red">📘</span> Expression du Jour
          </h2>
          <div className="bg-sand p-8 rounded-lg border-2 border-morocco-red/30">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="darija-text">
                <h3 className="font-arabic text-3xl text-morocco-green mb-4">راني معيّق</h3>
                <p className="font-arabic text-lg text-gray-700">Rani m3eyyeq</p>
              </div>
              <div>
                <h4 className="font-semibold text-morocco-red mb-2">Traduction :</h4>
                <p className="text-lg">Je suis crevé / fatigué</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-6 pt-6 border-t border-morocco-red/30">
              <div>
                <h4 className="font-semibold text-morocco-green mb-2">Contexte d'usage :</h4>
                <p>Expression très courante pour dire qu'on est épuisé, utilisée entre amis et en famille.</p>
              </div>
              <div>
                <h4 className="font-semibold text-morocco-green mb-2">Variantes :</h4>
                <ul className="space-y-2 ml-6">
                  <li className="flex gap-2"><span className="text-morocco-red">•</span> <strong>Ana t3eb</strong> (أنا تعب) - Je suis fatigué</li>
                  <li className="flex gap-2"><span className="text-morocco-red">•</span> <strong>Khrib</strong> (خريب) - Je suis cassé/détruit</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-morocco-red/30">
              <h4 className="font-semibold text-morocco-green mb-3">📝 Exercice :</h4>
              <p className="mb-3">Utilise cette expression dans une phrase complète :</p>
              <textarea 
                value={expressionExercice}
                onChange={(e) => setExpressionExercice(e.target.value)}
                className="w-full min-h-[100px] p-4 rounded border-2 border-morocco-red/50 focus:border-morocco-green focus:outline-none bg-white resize-y font-arabic text-lg"
                placeholder="مثال: راني معيّق، غادي ننعس..."
              />
            </div>
          </div>
        </section>

        {/* Dialogue du jour */}
        <section className="darija-card animate-slide-up" style={{animationDelay: '0.3s'}}>
          <h2 className="darija-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-morocco-red">💬</span> Dialogue du Jour
          </h2>
          
          <div className="bg-morocco-green/5 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-morocco-green mb-4 text-xl">Situation : Saluer un ami</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border-l-4 border-morocco-red">
                <p className="font-arabic text-lg mb-2 text-right">سلام، كيف داير؟</p>
                <p className="text-gray-600 mb-1"><strong>Phonétique :</strong> Salam, kif dayr?</p>
                <p className="italic text-gray-700">Salut, comment vas-tu ?</p>
              </div>

              <div className="p-4 bg-white rounded-lg border-l-4 border-morocco-green">
                <p className="font-arabic text-lg mb-2 text-right">لاباس، الحمد لله. وانت؟</p>
                <p className="text-gray-600 mb-1"><strong>Phonétique :</strong> Labas, hamdullah. U nta?</p>
                <p className="italic text-gray-700">Ça va, grâce à Dieu. Et toi ?</p>
              </div>

              <div className="p-4 bg-white rounded-lg border-l-4 border-morocco-red">
                <p className="font-arabic text-lg mb-2 text-right">راني معيّق شوية</p>
                <p className="text-gray-600 mb-1"><strong>Phonétique :</strong> Rani m3eyyeq shwiya</p>
                <p className="italic text-gray-700">Je suis un peu fatigué</p>
              </div>

              <div className="p-4 bg-white rounded-lg border-l-4 border-morocco-green">
                <p className="font-arabic text-lg mb-2 text-right">الله يعطيك الصحة</p>
                <p className="text-gray-600 mb-1"><strong>Phonétique :</strong> Allah y3tik saha</p>
                <p className="italic text-gray-700">Que Dieu te donne la santé (formule de sympathie)</p>
              </div>
            </div>
          </div>

          <div className="exercise-box border-morocco-red">
            <div className="absolute -top-4 left-6 bg-sand px-4 text-2xl">💬</div>
            <h3 className="font-semibold text-morocco-green text-lg mb-3">À ton tour !</h3>
            <p className="mb-3">Imagine que quelqu'un te demande "Kif dayr?" (comment vas-tu ?). Réponds en darija :</p>
            <textarea 
              value={dialogueResponse}
              onChange={(e) => setDialogueResponse(e.target.value)}
              className="w-full min-h-[120px] p-5 rounded border-2 border-morocco-red focus:border-morocco-green focus:outline-none focus:shadow-lg transition-all bg-white resize-y font-arabic text-lg"
              placeholder="اكتب جوابك هنا..."
            />
          </div>
        </section>

        {/* Expressions courantes */}
        <section className="darija-card animate-slide-up" style={{animationDelay: '0.4s'}}>
          <h2 className="darija-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-morocco-red">📚</span> Expressions Essentielles
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-morocco-green text-white">
                  <th className="p-4 text-right font-arabic">Darija</th>
                  <th className="p-4 text-left">Phonétique</th>
                  <th className="p-4 text-left">Français</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { darija: 'صباح الخير', phone: 'Sbah lkhir', fr: 'Bonjour' },
                  { darija: 'بسلامة', phone: 'Bslama', fr: 'Au revoir' },
                  { darija: 'شكرا', phone: 'Shokran', fr: 'Merci' },
                  { darija: 'عافاك', phone: '3afak', fr: 'S\'il te plaît' },
                  { darija: 'بالصحة', phone: 'Bessaha', fr: 'Bon appétit / À ta santé' },
                  { darija: 'إن شاء الله', phone: 'Inshallah', fr: 'Si Dieu veut' },
                  { darija: 'الله يخليك', phone: 'Allah ykhallik', fr: 'Que Dieu te protège (merci)' },
                  { darija: 'واخا', phone: 'Wakha', fr: 'D\'accord / OK' },
                  { darija: 'صافي', phone: 'Safi', fr: 'C\'est bon / Ça suffit' },
                  { darija: 'علاش؟', phone: '3lash?', fr: 'Pourquoi ?' },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-morocco-red/20 hover:bg-morocco-green/5 transition-colors">
                    <td className="p-4 font-arabic text-lg text-right">{item.darija}</td>
                    <td className="p-4 text-gray-700">{item.phone}</td>
                    <td className="p-4">{item.fr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Émotions en Darija */}
        <section className="darija-card animate-slide-up" style={{animationDelay: '0.5s'}}>
          <h2 className="darija-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-morocco-red">😊</span> Exprimer ses Émotions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-morocco-green/10 to-transparent rounded-lg border-l-4 border-morocco-green">
              <h3 className="font-semibold text-lg mb-3 text-morocco-green">😊 Joie</h3>
              <ul className="space-y-2 text-sm">
                <li className="darija-text font-arabic mb-1">انا فرحان</li>
                <li><strong>Ana farhan</strong> - Je suis content</li>
                <li className="darija-text font-arabic mb-1 mt-3">انا مبسوط</li>
                <li><strong>Ana mabsout</strong> - Je suis heureux</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-morocco-red/10 to-transparent rounded-lg border-l-4 border-morocco-red">
              <h3 className="font-semibold text-lg mb-3 text-morocco-red">😢 Tristesse</h3>
              <ul className="space-y-2 text-sm">
                <li className="darija-text font-arabic mb-1">انا حزين</li>
                <li><strong>Ana hzin</strong> - Je suis triste</li>
                <li className="darija-text font-arabic mb-1 mt-3">قلبي مقطوع</li>
                <li><strong>Qlbi maqtou3</strong> - Mon cœur est brisé</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-terracotta/10 to-transparent rounded-lg border-l-4 border-terracotta">
              <h3 className="font-semibold text-lg mb-3 text-terracotta">😠 Colère</h3>
              <ul className="space-y-2 text-sm">
                <li className="darija-text font-arabic mb-1">انا زربان</li>
                <li><strong>Ana zarban</strong> - Je suis énervé</li>
                <li className="darija-text font-arabic mb-1 mt-3">دمي تقاد</li>
                <li><strong>Dmi tqad</strong> - Mon sang bout</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-mint/30 to-transparent rounded-lg border-l-4 border-morocco-green">
              <h3 className="font-semibold text-lg mb-3 text-morocco-green">😮 Surprise</h3>
              <ul className="space-y-2 text-sm">
                <li className="darija-text font-arabic mb-1">واو!</li>
                <li><strong>Waw!</strong> - Wow !</li>
                <li className="darija-text font-arabic mb-1 mt-3">الله!</li>
                <li><strong>Allah!</strong> - Mon Dieu ! (étonnement)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conseils culturels */}
        <section className="darija-card bg-gradient-to-br from-morocco-red/10 to-morocco-green/10 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <h2 className="darija-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-morocco-red">🎯</span> Conseils Culturels
          </h2>
          <ul className="space-y-3">
            {[
              'La religion est omniprésente : "Inshallah", "Hamdullah", "Barak Allahu fik" sont constants',
              'Les Marocains sont très chaleureux : n\'hésitez pas à saluer longuement',
              '"Bessaha" se dit après manger/boire ET pour féliciter un achat',
              'La politesse est essentielle : toujours dire "3afak" (s\'il te plaît)',
              'Variations régionales : Casablanca ≠ Marrakech ≠ Fès'
            ].map((conseil, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-morocco-red text-xl">◆</span>
                <span className="font-semibold">{conseil}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Proverbe marocain */}
        <section className="bg-gradient-to-br from-morocco-green to-morocco-red text-white p-12 rounded-lg shadow-2xl relative overflow-hidden animate-slide-up" style={{animationDelay: '0.7s'}}>
          <div className="absolute -top-10 -right-10 text-9xl opacity-10 rotate-12">🕌</div>
          <h2 className="font-arabic text-3xl mb-6 text-center">مثل مغربي</h2>
          <h3 className="font-cinzel text-2xl mb-6 text-center">Proverbe Marocain</h3>
          <div className="space-y-4 text-center">
            <p className="font-arabic text-2xl mb-2">يد وحدة ما تصفقش</p>
            <p className="font-lora text-xl italic mb-2">Yed wahda ma tseffe9sh</p>
            <p className="text-lg">Une seule main ne peut pas applaudir</p>
            <p className="text-sm mt-4 opacity-90">→ L'union fait la force, il faut être ensemble</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 mt-8 border-t-2 border-morocco-red/30">
          <div className="text-4xl mb-4 animate-float">🕌</div>
          <p className="font-lora italic text-xl text-morocco-green">
            بصحّة و السلام - À demain, en bonne santé !
          </p>
          <Link href="/" className="inline-block mt-6 text-morocco-green hover:text-morocco-red font-semibold transition-colors">
            العودة ← Retour aux trois langues
          </Link>
        </footer>
      </div>
    </div>
  )
}
