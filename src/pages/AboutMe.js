import Hero from "../components/Hero";

function AboutMe() {
  return (
    <>
      <Hero />
      <section id='main'>
        <section>
          <h2>My Story</h2>
          <p>Over the past year, I've developed a strong passion for coding and software development. It all began with my journey into C#, where I started crafting games using <a href="https://unity.com/" rel="noreferrer" target="_blank">Unity</a> and <a href="https://www.unrealengine.com/en-US" target="_blank" rel='noreferrer'>Unreal</a>. That led me to dig deeper into the mechanics of code and how computers handle it. This curiosity drove me to enroll in the online Harvard CS50 Course, which really opened my eyes to what's happening beneath the surface of the code I write.</p>
          <br />
          <p>When it came time for the final project in the CS50 Course, I decided to take on the challenge of creating a website. Looking back, it might not have been the easiest choice, as I had only about a month of experience with JavaScript, CSS, and HTML. Plus, I jumped headfirst into using <a target="_blank" rel="noreferrer" href="https://nextjs.org/">Next.js</a>, even though I didn't have a clue what a REST API was back then. I was incredibly dedicated and spent the entire month focused on building the website, juggling it with other commitments.</p>
          <br />
          <p>It took me around a week to figure out that I needed a database to connect user accounts with Next Auth. Luckily, I discovered Supabase, which made setting up the database a lot smoother. But let's be real - it was a bit of a struggle to get there.</p>
          <br />
          <p>After a lot of hard work (and trust me, it was a lot), I finally completed a basic version of the project. Seeing my website go live and having friends actually use it with functional user authentication was an amazing feeling. This success fueled my excitement to keep pushing forward.</p>
          <br />
          <p>However, I found myself at a crossroads. I wasn't sure where to go next in my coding journey. I turned to YouTube and found some fantastic content creators like Dave Gray, Web Dev Mastery, Clément Mihailescu, and Codevolution. Udemy had some great courses too. But even with these resources, I felt there was more to explore.</p>
          <br />
          <p>I started looking into job opportunities in the field and noticed a mix. Some positions required a ton of experience or a degree, while others were open to people with bootcamp experience. I wasn't sure where I stood in relation to bootcamp grads.</p>
          <br />
          <p>So, I embarked on a quest to find the right bootcamp for me. After weighing my options for both local and online programs, I settled on the UC Davis Coding Bootcamp. The six-month online format fit perfectly with my work and life schedule, so I decided to dive in.</p>
          <br />
          <p>And now, here I am, wrapping up the bootcamp experience. I've absorbed a wealth of knowledge, even though I'll admit that I didn't catch every detail. What I do know is that I understand websites on a much deeper level than I did five months ago. I'm genuinely excited to see where this bootcamp will take me in my coding journey.</p>
        </section>
      </section>
    </>
  );
}

export default AboutMe;