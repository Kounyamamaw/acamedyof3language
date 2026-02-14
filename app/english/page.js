'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function EnglishPage() {
  const [sentenceExercise, setSentenceExercise] = useState('')
  const [wordExercise, setWordExercise] = useState('')
  const [transformationExercise, setTransformationExercise] = useState('')

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-parchment-beige to-cambridge-blue/20">
      {/* Decorative gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-oxford-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-oxford-blue hover:text-ink-blue font-semibold transition-colors">
            <span>←</span> Return to Home
          </Link>
        </nav>

        {/* Header */}
        <header className="text-center mb-16 py-16 px-8 bg-oxford-blue/5 border-y-2 border-oxford-blue relative animate-fade-in">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-4xl hidden md:block">📚</div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl hidden md:block">📚</div>
          
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-oxford-blue mb-4">
            📚 Sophisticated English
          </h1>
          <p className="font-lora text-2xl text-ink-blue italic mb-6">
            Elevate your vocabulary with literary expressions
          </p>
          <blockquote className="italic text-oxford-blue font-lora text-lg mt-8 pt-6 border-t border-oxford-blue/50">
            "Words are, of course, the most powerful drug used by mankind." — Rudyard Kipling
          </blockquote>
        </header>

        {/* Introduction */}
        <section className="english-card animate-slide-up" style={{animationDelay: '0.1s'}}>
          <h2 className="english-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-oxford-blue">🎓</span> What is Sophisticated English?
          </h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              <strong>Sophisticated English</strong> goes beyond basic communication—it's the art of expressing 
              complex ideas with <strong>precision</strong>, <strong>nuance</strong>, and <strong>eloquence</strong>.
            </p>
            <p>
              Like having a <em>Larousse dictionary in your mind</em>, mastering advanced vocabulary allows you to:
            </p>
            <div className="bg-oxford-blue/10 p-6 border-l-4 border-cambridge-blue rounded">
              <p className="font-semibold mb-2">Key Benefits:</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-oxford-blue">●</span> Communicate ideas with greater clarity and depth</li>
                <li className="flex gap-2"><span className="text-oxford-blue">●</span> Write compelling academic and business texts</li>
                <li className="flex gap-2"><span className="text-oxford-blue">●</span> Understand literary works and sophisticated media</li>
                <li className="flex gap-2"><span className="text-oxford-blue">●</span> Express yourself with impact and confidence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Word of the Day */}
        <section className="english-card animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h2 className="english-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-oxford-blue">📘</span> Word of the Day
          </h2>
          <div className="bg-parchment-beige p-8 rounded-lg border-2 border-oxford-blue/30">
            <h3 className="font-playfair text-3xl text-oxford-blue mb-4">Ephemeral</h3>
            <p className="text-sm text-gray-600 mb-6 italic">/ɪˈfem.ər.əl/ — adjective</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-oxford-blue mb-2">Definition:</h4>
                <p>Lasting for a very short time; transient; fleeting.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-oxford-blue mb-2">Etymology:</h4>
                <p className="text-gray-700">From Greek <em>ephēmeros</em> (lasting only a day), from <em>epi-</em> (upon) + <em>hēmera</em> (day)</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-oxford-blue mb-2">Examples:</h4>
                <ul className="space-y-2 ml-6 italic">
                  <li className="flex gap-2"><span className="text-oxford-blue">•</span> The beauty of cherry blossoms is ephemeral, lasting mere days.</li>
                  <li className="flex gap-2"><span className="text-oxford-blue">•</span> Fame in the digital age often proves ephemeral.</li>
                  <li className="flex gap-2"><span className="text-oxford-blue">•</span> Morning dew creates an ephemeral sparkle on the grass.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-oxford-blue mb-2">Synonyms:</h4>
                <p className="text-gray-700">Fleeting, transient, transitory, momentary, short-lived, evanescent</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-oxford-blue/30">
              <h4 className="font-semibold text-oxford-blue mb-3">📝 Exercise:</h4>
              <p className="mb-3 italic">Write a sentence using "ephemeral" to describe something beautiful but temporary:</p>
              <textarea 
                value={wordExercise}
                onChange={(e) => setWordExercise(e.target.value)}
                className="w-full min-h-[100px] p-4 rounded border-2 border-oxford-blue/50 focus:border-oxford-blue focus:outline-none bg-white resize-y font-lora text-lg"
                placeholder="Your sentence here..."
              />
            </div>
          </div>
        </section>

        {/* Transformation Workshop */}
        <section className="english-card animate-slide-up" style={{animationDelay: '0.3s'}}>
          <h2 className="english-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-oxford-blue">✍️</span> Transformation Workshop
          </h2>
          
          <div className="mb-6">
            <h3 className="font-playfair text-xl text-ink-blue mb-3">Simple Sentence</h3>
            <blockquote className="english-quote">
              I didn't sleep last night.
            </blockquote>
          </div>

          <div className="mb-6">
            <h3 className="font-playfair text-xl text-ink-blue mb-3">Task</h3>
            <p className="mb-4">Transform this into a more sophisticated sentence using:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-2"><span className="text-oxford-blue font-bold">→</span> Advanced vocabulary</li>
              <li className="flex gap-2"><span className="text-oxford-blue font-bold">→</span> Vivid imagery or metaphor</li>
              <li className="flex gap-2"><span className="text-oxford-blue font-bold">→</span> Elegant structure</li>
            </ul>
          </div>

          <div className="mb-6 bg-oxford-blue/5 p-6 rounded">
            <h3 className="font-playfair text-lg text-oxford-blue mb-3">Examples of Transformations</h3>
            <ul className="space-y-3 text-sm">
              <li className="p-3 bg-white rounded border-l-4 border-cambridge-blue">
                <strong className="text-oxford-blue">Literary:</strong> "The night proved an arduous vigil, sleep eluding me like a phantom."
              </li>
              <li className="p-3 bg-white rounded border-l-4 border-sage">
                <strong className="text-oxford-blue">Metaphorical:</strong> "Sleep remained a distant shore I could not reach, despite hours adrift in darkness."
              </li>
              <li className="p-3 bg-white rounded border-l-4 border-ink-blue">
                <strong className="text-oxford-blue">Academic:</strong> "The entire nocturnal period elapsed without the onset of slumber."
              </li>
            </ul>
          </div>

          <div className="exercise-box border-oxford-blue">
            <div className="absolute -top-4 left-6 bg-parchment-beige px-4 text-2xl">✍️</div>
            <h3 className="font-playfair text-lg text-oxford-blue mb-3">Your Transformation:</h3>
            <textarea 
              value={transformationExercise}
              onChange={(e) => setTransformationExercise(e.target.value)}
              className="w-full min-h-[120px] p-5 rounded border-2 border-oxford-blue focus:border-ink-blue focus:outline-none focus:shadow-lg transition-all bg-white resize-y font-lora text-lg"
              placeholder="Transform the simple sentence into something sophisticated..."
            />
          </div>
        </section>

        {/* Daily Theme */}
        <section className="english-card animate-slide-up" style={{animationDelay: '0.4s'}}>
          <h2 className="english-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-oxford-blue">🎨</span> Today's Theme
          </h2>
          
          <div className="mb-6">
            <h3 className="font-playfair text-xl text-ink-blue mb-3">Theme: <strong>Dignified Fatigue</strong></h3>
            <blockquote className="english-quote">
              Expressing exhaustion with elegance and composure.
            </blockquote>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-oxford-blue mb-3">💡 Vocabulary Suggestions:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-oxford-blue mt-1">●</span>
                  <div><strong>Weary</strong> - physically or mentally tired</div>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-oxford-blue mt-1">●</span>
                  <div><strong>Enervated</strong> - drained of energy</div>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-oxford-blue mt-1">●</span>
                  <div><strong>Languorous</strong> - pleasantly tired, relaxed</div>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-oxford-blue mt-1">●</span>
                  <div><strong>Depleted</strong> - emptied of resources</div>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-oxford-blue mt-1">●</span>
                  <div><strong>Spent</strong> - having used all energy</div>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-oxford-blue mt-1">●</span>
                  <div><strong>Fatigued</strong> - extremely tired</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="exercise-box border-oxford-blue">
            <div className="absolute -top-4 left-6 bg-parchment-beige px-4 text-2xl">🖋️</div>
            <h3 className="font-playfair text-lg text-oxford-blue mb-3">Free Exercise:</h3>
            <p className="mb-3">Write a sophisticated sentence about fatigue using the theme and vocabulary above:</p>
            <textarea 
              value={sentenceExercise}
              onChange={(e) => setSentenceExercise(e.target.value)}
              className="w-full min-h-[120px] p-5 rounded border-2 border-oxford-blue focus:border-ink-blue focus:outline-none focus:shadow-lg transition-all bg-white resize-y font-lora text-lg"
              placeholder="Compose your elegant sentence here..."
            />
          </div>
        </section>

        {/* Advanced Vocabulary List */}
        <section className="english-card animate-slide-up" style={{animationDelay: '0.5s'}}>
          <h2 className="english-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-oxford-blue">📚</span> Essential Sophisticated Words
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-oxford-blue text-white">
                  <th className="p-4 text-left font-playfair">Word</th>
                  <th className="p-4 text-left font-playfair">Meaning</th>
                  <th className="p-4 text-left font-playfair">Usage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { word: 'Arduous', meaning: 'Difficult, requiring great effort', usage: 'Academic, Professional' },
                  { word: 'Eloquent', meaning: 'Fluent and persuasive in speech', usage: 'Literary, Formal' },
                  { word: 'Sagacious', meaning: 'Having wisdom and good judgment', usage: 'Literary, Academic' },
                  { word: 'Serendipity', meaning: 'Finding good things by chance', usage: 'Literary, Conversational' },
                  { word: 'Quintessential', meaning: 'Perfect example of something', usage: 'Academic, Professional' },
                  { word: 'Perspicacious', meaning: 'Having keen insight', usage: 'Formal, Academic' },
                  { word: 'Loquacious', meaning: 'Very talkative', usage: 'Literary, Formal' },
                  { word: 'Capricious', meaning: 'Given to sudden changes', usage: 'Literary, Academic' },
                  { word: 'Mellifluous', meaning: 'Sweet-sounding', usage: 'Literary, Poetic' },
                  { word: 'Ubiquitous', meaning: 'Present everywhere', usage: 'Academic, Professional' },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-oxford-blue/20 hover:bg-oxford-blue/5 transition-colors">
                    <td className="p-4 font-semibold text-oxford-blue font-playfair">{item.word}</td>
                    <td className="p-4">{item.meaning}</td>
                    <td className="p-4 text-sm text-gray-600 italic">{item.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Literary Devices */}
        <section className="english-card animate-slide-up" style={{animationDelay: '0.6s'}}>
          <h2 className="english-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-oxford-blue">🎭</span> Literary Devices for Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-oxford-blue/10 to-transparent rounded-lg border-l-4 border-oxford-blue">
              <h3 className="font-semibold text-lg mb-3 text-oxford-blue">Metaphor</h3>
              <p className="text-sm text-gray-700 mb-2">Compare two unlike things directly</p>
              <p className="italic text-sm">"Time is a thief" / "Her words were daggers"</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cambridge-blue/20 to-transparent rounded-lg border-l-4 border-cambridge-blue">
              <h3 className="font-semibold text-lg mb-3 text-ink-blue">Alliteration</h3>
              <p className="text-sm text-gray-700 mb-2">Repeat initial consonant sounds</p>
              <p className="italic text-sm">"Peter Piper picked" / "Silent, solemn speech"</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-sage/20 to-transparent rounded-lg border-l-4 border-sage">
              <h3 className="font-semibold text-lg mb-3 text-oxford-blue">Hyperbole</h3>
              <p className="text-sm text-gray-700 mb-2">Exaggeration for emphasis</p>
              <p className="italic text-sm">"I've told you a million times"</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-ink-blue/10 to-transparent rounded-lg border-l-4 border-ink-blue">
              <h3 className="font-semibold text-lg mb-3 text-ink-blue">Anaphora</h3>
              <p className="text-sm text-gray-700 mb-2">Repeat words at start of clauses</p>
              <p className="italic text-sm">"We shall fight... We shall never surrender"</p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="english-card bg-gradient-to-br from-oxford-blue/10 to-cambridge-blue/10 animate-slide-up" style={{animationDelay: '0.7s'}}>
          <h2 className="english-header text-3xl mb-6 flex items-center gap-4">
            <span className="text-oxford-blue">🎯</span> Principles of Eloquent Writing
          </h2>
          <ul className="space-y-3">
            {[
              'Precision over complexity — choose the exact word, not the longest',
              'Active voice for impact, passive for formality',
              'Vary sentence length for rhythm and emphasis',
              'Show, don\'t tell — use concrete images and sensory details',
              'Read your work aloud to test flow and cadence',
              'Context determines sophistication — know your audience'
            ].map((principle, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-oxford-blue text-xl">●</span>
                <span className="font-semibold">{principle}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Quote */}
        <section className="bg-gradient-to-br from-oxford-blue to-ink-blue text-white p-12 rounded-lg shadow-2xl relative overflow-hidden animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div className="absolute -top-10 -right-10 text-9xl opacity-10 rotate-12">📚</div>
          <h2 className="font-playfair text-3xl mb-6 text-center">Literary Wisdom</h2>
          <blockquote className="font-lora text-xl italic text-center max-w-3xl mx-auto leading-relaxed">
            "The difference between the almost right word and the right word is really a large matter—<br />
            it's the difference between the lightning bug and the lightning."
            <p className="text-sm mt-4 font-normal not-italic opacity-90">— Mark Twain</p>
          </blockquote>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 mt-8 border-t-2 border-oxford-blue/30">
          <div className="text-4xl mb-4 animate-float">📚</div>
          <p className="font-lora italic text-xl text-oxford-blue">
            Until tomorrow — may your words be ever eloquent.
          </p>
          <Link href="/" className="inline-block mt-6 text-oxford-blue hover:text-ink-blue font-semibold transition-colors">
            ← Return to Three Languages
          </Link>
        </footer>
      </div>
    </div>
  )
}
