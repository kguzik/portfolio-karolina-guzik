'use client';

import { FC } from 'react';
import Image from 'next/image';
import SectionHeading from '../atoms/SectionHeading';
import Container from '../atoms/Container';
import { Certificate } from '@/types/types';

type CertificatesProps = {
  data: Certificate[];
};

const Certificates: FC<CertificatesProps> = ({ data }) => {
  if (!data?.length) {
    return null;
  }

  return (
    <section className='section-spacing'>
      <Container>
        <SectionHeading title='Certificates' />
        <div className={styles.grid}>
          {data.map((item, index) => (
            <div
              key={item.id}
              className={styles.card}
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw'
                  className={styles.image}
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.issuer}>{item.issuer}</p>
                <a
                  href={item.pdf}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.link}
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const styles = {
  grid: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4',
  card: 'rounded-xl overflow-hidden bg-violet-light flex flex-col border border-violet-dark border-[3px]',
  imageWrapper: 'relative h-[200px] overflow-hidden',
  image: 'object-cover object-top',
  body: 'p-4 flex flex-col gap-2 flex-1',
  title: 'font-medium text-base',
  issuer: 'text-sm text-violet',
  link: 'mt-auto inline-block px-4 py-2 bg-violet text-center text-white text-sm rounded hover:bg-violet-dark transition-colors',
};

export default Certificates;
