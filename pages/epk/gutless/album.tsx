
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
              <a>Album</a>
            </li>
            <li>
              <Link href='/epk/[slug]/band' as={`/epk/${band}/band`}>
                <a>Liner notes</a>
              </Link>
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

        <div style={{minHeight: '500px', width: '100%'}}>
          <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1498414258%3Fsecret_token%3Ds-zFyBsPPAeNo&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100, margin: '0.5rem' }}><a href="https://soundcloud.com/user-282582091" title="knifepunch records" target="_blank" rel="noreferrer noopener" style={{ color: '#cccccc', textDecoration: 'none' }}>knifepunch records</a> · <a href="https://soundcloud.com/user-282582091/sets/gutless-build-and-burn/s-zFyBsPPAeNo" title="Gutless - Build and Burn" rel="noreferrer noopener" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Gutless - Build and Burn</a></div>
        </div>

        <p className={styles.text}>
          On their debut LP, Build and Burn, Gutless balances a searing indie punk rage with an exuberant, unyielding dedication to self-expression. The album&apos;s heavier moments meet trauma and marginalization with a stubborn, scorching resistance. “The Bitch Lives”, the first full song of the LP, encapsulates this attitude, responding to a cruel world not just with melancholy but with a spiteful celebration of survival. In its more joyful moments, the LP pays earnest tribute to the strange ephemeral delight of being part of a music scene. Folk punk sing-along “Hope I Don&apos;t Blow Out My Voice” celebrates the power of music and community with triumphant snark, accentuated by glockenspiel, fiddle, and gang vocals. The LP is framed in the context of a DIY show, with interludes titled “Load-In” and “Doors”. The closing track, entitled “Mystery Set”, tackles the dissonance of the lively queer punk scene in Gainesville, a notorious college sports town, and references a song by Florida indie punk contemporaries Insignificant Other. Build and Burn  is peppered with features from other bands in the area, such as Jeremy Hunter of JER and Skatune Network,Candice Maritato of Woolbright, Briana Uknowit of Cooper! and George Geanuracos of Atlanta&apos;s Yankee Roses. The result is a sonic snapshot of the local punk community, giving authenticity to Gutless&apos; lyrical tributes to the scene.
          <br /><br />
          - Blurb by Jamie Conroy
        </p>
      </main>
    </div>
  )
}

export default EPK
