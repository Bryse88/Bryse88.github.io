export default function Content() {
  return (
    <div className="content">

      {/* ============================================
            About
            ============================================ */}
      <section id="about" className="section">
        <p className="about-line">
          Some things about me:
        </p>
        <ul className="about-list">
          <li>I&rsquo;m currently building Gradient Platforms.</li>
          <li>
            Before this, I spent a year as a Quantitative Fellow at Ramirez
            Asset Management, and three years studying computer science and
            economics at the University of Wisconsin-Madison (now on leave).
          </li>
          <li>
            I love building: taking an idea, sometimes one that seems
            impossible, and turning it into a reality that impacts others.
            When the idea is novel and requires complex engineering, the grit
            and ingenuity it takes to create it is one of the best
            expressions of human capability.
          </li>
        </ul>

        <p className="about-line">
          Some things I&rsquo;m interested in:
        </p>
        <ul className="about-list">
          <li>
            Aerospace &amp; Defense. I believe it&rsquo;s where the most
            cutting-edge forms of technology get created.
          </li>
          <li>
            Economics. How decisions and innovation shape the current world,
            from both a macro and micro lens.
          </li>
          <li>
            Optimization culture. From some angles, chasing incremental
            change can feel negative, especially when it&rsquo;s just
            chasing effects that follow economies of scale. Still, the drive
            to get better bit by bit is a fascinating concept.
          </li>
          <li>
            Running. Marathon PR of 3:24, hoping to get to sub-3 by the end
            of 2027.
          </li>
        </ul>
      </section>

    </div>
  );
}
