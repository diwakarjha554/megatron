'use client';

import Container from "@/components/util/Container";
import Section from "@/components/util/Section";

import styles from '@/stylesheets/styles.module.css';
import Search from "@/components/Navlinks/Home/Search";

const Home = () => {
  return (
    <Section className="mt-32">
        <Container className="flex justify-center">
            <Search />
        </Container>
    </Section>
  )
}

export default Home;
