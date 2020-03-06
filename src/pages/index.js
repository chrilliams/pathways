import React from "react"
import hivePeople from "../../static/images/hive_people.png"
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const IndexPage = () => (
  <>
    <img className="align-middle" src={hivePeople} alt="hivePeople" />
    <h1 className="text-primary">49 million reasons to work at the DVLA</h1>
    <p>
      At the DVLA we work to deliver award winning services that make a
      difference to the lives of every citizen in the UK.
    </p>
    <p>
      We keep millions moving using cutting-edge technology to deliver the right
      outcomes for our customers.
    </p>
    <p>
      If you’re looking for a challenge and have a passion for pushing the
      boundaries then you’ve come to the right place.
    </p>
    <p>
      We have exciting and challenging roles and career paths from software
      engineering, to portfolio management. As one of the only in-house digital
      and technology teams in government it really is all about the people,
      which is why you’ll have access to all the learning and development you
      need - as well as opportunities to learn new skills and progress. You’ll
      also be part of a professional community, where you can share knowledge
      with like-minded people and help further your career to where you want it
      to go.
    </p>
    <p>
      We offer a culture that values work-life balance with flexibility offered
      on how you work, as well as a competitive salary, pension and generous
      holiday entitlement. So if you want to work on exciting services On a
      massive scale Using the latest technology Then we’d like to hear from you
    </p>
    <h2 className="text-primary">Best in class services</h2>
    <p>
      As a team we focus on user needs, whether that is a citizen, an
      organisation or an internal user. We are committed to providing the most
      efficient, effective and secure services to meet the needs of a diverse
      and ever growing digitally aware customer base.
    </p>
    <p>
      We are an exemplar in public sector innovation. Based in Swansea we
      benefit from the local culture of entrepreneurialism as well as the
      innovative use of technology. We currently provide 26 of our 63 high level
      services online with many of them being recognised externally as best in
      class.
    </p>
    <h2 className="text-primary">Our tools and technology</h2>
    <p>
      Our digital services are built using modern tools and technologies. We use
      public cloud where possible, taking advantage of the cost, availability
      and performance advantages supplied by cloud providers.
    </p>
    <p>
      Our services are comprised of small loosely-coupled components that can be
      swapped in and out and deployed independently. Our aspiration is to be
      able to move implementations across different cloud platforms. This means
      we focus on cloud native solutions, packaged as Docker containers and
      orchestrated using Kubernetes. However, with our eye on the future, we
      have taken advantage of serverless computing for our API platform,
      utilising products such as AWS API Gateway, Cognito and Lambda.
    </p>
    <p>
      We support a number of programming languages, frameworks and runtime
      engines, including Java, React and Node.js. With our move to immutable
      infrastructure our software and infrastructure is defined in code, and
      deployed through our continuous integration/continuous deployment (CI/CD)
      pipeline.
    </p>
    <ResponsiveEmbed aspectRatio="16by9">
      <embed src="https://www.youtube.com/embed/2iGa453g8AA"/>
    </ResponsiveEmbed>
  </>
)

export default IndexPage
