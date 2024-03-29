import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Privacy, <br /> on your own terms.
        </BigTitle>
        <Subtitle>
          We help you manage your email privacy, while protecting you from spammers, bots and phishers.
        </Subtitle>
        <h2
          style={{
            color: '#FFF',
            fontFamily: 'Cantata One',
            fontWeight: '500',
          }}
        >
          Sign up for <span style={{ textDecoration: 'underline' }}>early access</span> to the private beta!
        </h2>
        <a
          href="https://gmail.us3.list-manage.com/subscribe?u=131e40b536b7522dc377d85b6&id=54fd5a4685"
          style={{ hover: 'cursor' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              color: 'white',
              backgroundColor: '#6263D2',
              padding: '18px 40px',
              borderRadius: 5,
              fontSize: '25px',
              fontWeight: '600',
              border: 0,
              cursor: 'pointer',
            }}
            className=".button-access"
          >
            Get access
          </button>
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/hyve-e-mail-privacy/pmkohgoneplpclboeehbkeigiemdaehh?utm_source=chrome-ntp-icon"
          style={{ hover: 'cursor' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              color: 'white',
              backgroundColor: '#5282ff',
              border: 0,
              padding: '18px 40px',
              borderRadius: 5,
              fontSize: '25px',
              fontWeight: '600',
              marginLeft: 20,
              cursor: 'pointer',
            }}
            className=".button-access"
          >
            Get Chrome extension
          </button>
        </a>
      </Hero>
      <Projects offset={1}>
        <Title>What is hyve?</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Private"
            // link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            You can mask your current email address, and generate new anonymous ones in order to separate who sees and
            shares your information.
          </ProjectCard>
          <ProjectCard
            title="Secure"
            // link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            When an email address gets spammed, we can detect when it’s scammed. We use a powerful algorithm to
            authenticate emails, and note what emails are going to which inboxes and whether they seem risky.
          </ProjectCard>
          <ProjectCard
            title="Organized"
            // link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            We help you manage all of your inboxes in one place. You don’t have to tab to multiple websites and go
            through a slew of processes in order to check and filter emails anymore.
          </ProjectCard>
          <ProjectCard
            title="Easy"
            // link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            We’ve made the process so simple, you’ll ACTUALLY use it!
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar
            src="https://res.cloudinary.com/biensupernice/image/upload/v1564008655/Hyve_m7tgek.png"
            alt="John Doe"
          />
          <AboutSub>Make unsubscribe, {<br />} mean unsubscribe again.</AboutSub>
        </AboutHero>
        <AboutDesc>
          Hyve was created with the intent to make the internet a more secure place. With companies having data breaches
          left and right, and personal data regularly being used as a marketing asset, we decided it was our duty to
          fight back. Emails seemed like the best place to start. They are the keystone to so many of our accounts and
          personal information. Our goal with Hyve is to help secure your emails, and make it irresistibly easy to do.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Build your Hyve!</Title>
          <ContactText>
            You can find us at:{' '}
            <a href="https://www.twitter.com/hyveemail" rel="noopener noreferrer" target="_blank">
              @HyveEmail
            </a>
          </ContactText>
        </Inner>
      </Contact>
    </Parallax>
  </>
)

export default Index
