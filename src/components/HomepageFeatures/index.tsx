import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Interactive GUI',
    icon: '🖥️',
    description: (
      <>
        Load your Athena data, generate FEFF paths from a CIF file, configure
        fitting parameters, and watch your fit converge — all in a single
        point-and-click interface with live chi(k) and chi(R) plots.
      </>
    ),
  },
  {
    title: 'Powerful CLI',
    icon: '⚡',
    description: (
      <>
        Run batch fits across many samples, launch parallel optimizations with
        a single flag, and integrate XAFS fitting into scripted workflows.
        Supports Levenberg-Marquardt, Genetic Algorithm, PSO, and Bayesian optimization.
      </>
    ),
  },
  {
    title: 'Fully Interoperable',
    icon: '🔄',
    description: (
      <>
        GUI and CLI share the same JSON configuration format. Design your fit
        interactively, export it with one click, and scale it to hundreds of
        samples via the CLI — or go the other way.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{fontSize: '4rem', padding: '1rem 0'}}>
        {icon}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
