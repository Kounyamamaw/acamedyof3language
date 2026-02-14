import './globals.css'
import { Cinzel, Crimson_Text, Cormorant_Garamond, Noto_Naskh_Arabic, Lora, Playfair_Display } from 'next/font/google'

const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cinzel',
})

const crimson = Crimson_Text({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const arabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const metadata = {
  title: "L'Académie des Trois Langues - Français • Darija • English",
  description: "Entraînement quotidien au ton rostandien, au darija marocain et à l'anglais soutenu. Rituel linguistique trilingue.",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${crimson.variable} ${cormorant.variable} ${arabic.variable} ${lora.variable} ${playfair.variable}`}>
      <body className="font-crimson">
        {children}
      </body>
    </html>
  )
}
