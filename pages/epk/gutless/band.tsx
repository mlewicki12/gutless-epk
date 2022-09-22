
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../../../styles/EPK.module.scss'

const EPK: React.FC<any> = () => {
  const { band } = {
    band: 'gutless'
  }

  return (
    <div className={styles.content}>
      <main className={styles.body}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href='/epk/[slug]' as={`/epk/${band}`}>
                <a>Album</a>
              </Link>
            </li>
            <li>
              <a>Liner notes</a>
            </li>
            <li>
              <Link href='/epk/[slug]/photos' as={`/epk/${band}/photos`}>
                <a>Photos</a>
              </Link>
            </li>
          </ul>
        </nav>

        <h1 className={styles.title}>Gutless - Build and Burn</h1>
        <h2 className={styles.subtitle}>Out Oct. 14th on <a className={styles.link} href='knifepunchrecords.com' target='_blank' rel='noreferrer noopener'>Knifepunch Records</a></h2>

        <p className={styles.text}>
          Vi Viana - vocals, guitar, organ, piano, synthesizers, glockenspiel, bass (on track 6) <br />
          Maxim Moritz - lead guitar<br />
          Andrew Martin - bass<br />
          Tim McGowan - drums<br />
          Veronica Prudence - additional lead and rhythm guitars, vocals (track 11)<br />
          Jeremy Hunter (JER / Skatune Network) - trombone, trumpet, and tenor saxophone (track 3)<br />
          George Geanuracos (Yankee Roses) - violin (tracks 5, 6, 7, 9 and 10), vocals (track 5)<br />
          Candice Maritato (Woolbright) - vocals (track 5 and 10)<br />
          Brianna Uknowit (Cooper!) - mandolin and vocals (track 6)<br /><br />

          Mixed and mastered by Josie Lucido<br />
          Initial recording by Rob McGregor at Goldentone Studio<br />
          Additional recording and production by Vi Viana<br />
          Photography by Jeremy McGuire, Chris Denmark and Brianna Uknowit<br />
          Background painting by Annette Gilley<br />
          Design and layout by Vi Viana<br /><br />

          Many thanks to Dani, Bird, Maciej, Josie and all of our Knifepunch comrades for helping us finish 
          and release this record that we&apos;ve poured so much of ourselves onto for the past 3-4 years. Many 
          thanks to our dear friends who provided additional instrumentation and vocals, most of which were 
          recorded remotely with their own gear. Many thanks to everyone who&apos;s supported, encouraged, shaped 
          us through our multiple years of activity and inactivity. Thank you all for making all of this possible.
        </p>
      </main>
    </div>
  )
}

export default EPK
