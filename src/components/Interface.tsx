interface SectionProps {
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  const { children } = props;

  return (
    <section
      className='h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center'
    >
      {children}
    </section>
  );
};

export const Interface = () => {
  return (
    <div className='flex flex-col items-center w-screen'>
      <HeroSection />
      <Section>
        <h2>Intro</h2>
      </Section>

      <Section>
        <h2>Projects</h2>
      </Section>

      <Section>
        <h2>Contact</h2>
      </Section>
    </div>
  );
};

const HeroSection = () => {
  return (
    <Section>
      <h2>Hero</h2>
    </Section>
  );
};
