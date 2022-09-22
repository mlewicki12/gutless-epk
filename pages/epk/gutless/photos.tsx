
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
              <Link href='/epk/[slug]/band' as={`/epk/${band}/band`}>
                <a>Liner notes</a>
              </Link>
            </li>
            <li>
              <a>Photos</a>
            </li>
          </ul>
        </nav>

        <h1 className={styles.title}>Gutless - Build and Burn</h1>
        <h2 className={styles.subtitle}>Out Oct. 14th on <a className={styles.link} href='https://knifepunchrecords.com' target='_blank' rel='noreferrer noopener'>Knifepunch Records</a></h2>

        <a href='https://drive.google.com/drive/folders/1T5XoREt6ib8zTttVccGoYi5QMfLr3tB8' target='_blank' rel='noreferrer noopener'>
        <div style={{height: 400}}>
          <Image width={710} height={400} src='/gutless - photo.PNG' alt='Gutless photo' />
        </div>
        </a>
        <p>Photo album by Chris Denmark of <a className={styles.linkText} href='https://twitter.com/jaggedwirephoto' target='_blank' rel='noreferrer noopener'>Jagged Wire Photography</a></p>

      </main>
    </div>
  )
}

export default EPK
