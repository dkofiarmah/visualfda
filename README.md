# Pool Three Submission

This prototype allows people to see potential reactions to drugs so they can take necessary precautions.

GSA Holder | inQbation (dba Agileana) 
--------------------------- | --------------------------
GSA Schedule | GS-35F-395BA
Contact | Blake Newman
Email | Blake.Newman@inQbation.com 
Phone | 703.999.1232
Prototype URL | http://www.agileana.com
Installation | [instructions]

##Team

- [x] Assigned one leader held personally accountable
- [x] Assembled a multidisciplinary and collaborative team
- [x] Brought in an experienced team

Following the USDS Playbook, we brought in an experienced, multidisciplinary team and assigned a personally accountable leader.  Our agile delivery services team included:
 
1. **Product Manager**, Blake (CSM, MS Information Systems, 20 years' experience)
2. **Technical Architect**, Luis (CSM, BS Computer Science, 10 years' experience)
3. **Interaction Designer**, Jenny (BS Interactive Design, 3 years' experience)
4. **Content Strategist**, Shannon (BA, 5 years' experience)
5. **Visual Designer**, Michael (BA, 10 years' experience)
6. **Frontend Developer**, Cesar (BS 5 years'experience), Pipe (BS 3 years' experience)
7. **Backend Developer**, Sebastian (BS 10 years' experience)
8. **DevOps Engineer**, Andres (BS 10 years' experience)
9. **Security Engineer**, Felipe (BS 15 years' experience)

## Human Centered Design

- [x] Understood what people need
- [x] Put the needs of the users first
- [x] Used at least three “human-centered design” techniques or tools
- [x] Performed usability tests with people
- [x] Addressed the whole experience from start to finish
- [x] Made it simple and intuitive

The goal was to produce a Minimum Viable Product (MVP) based on verified demand as it related to datasets from Open.FDA.gov.  We wanted to practice Lean Startup by first listening to needs, understanding those needs, rapidly producing a prototype based on those needs, seeking feedback, and iterating based on that feedback.

On Father’s Day weekend, everybody on the team took this opportunity to poll mothers, fathers, and grandparents about what bothers them about drugs and drug commercials that we could possibly glean from the datasets on Open.FDA.gov.
 
The answer came from 62 year old Theresa Cullen, a doctor who remembers hearing concerns from her patients about the side effects of drugs, fine print on drug labels, and fast talk at the end of drug commercials.  We honed in on this idea and polled multiple people from various demographics during that Father’s Day weekend.  In the end, we decided to produce a clean and simple tool to discover the effects and reactions of taking particular drugs.
 
The primary user story is: As a patient or patient advocate, I want to know the potential side effects of a drug so I can decide whether it may cause problems.  From a usability perspective, we also wanted to help people spell drugs correctly (which are not always easy to do) so we defined a secondary user story: As a patient or patient advocate seeking to find the effects of a drug, I want to autocomplete (autocorrect) my search query so I can avoid false negative search results.
 
Finally, we wanted to produce a simple, intuitive, and accessible (Section 508 compliant) chart that allowed people to understand either visually or with assistive technology.  

Incorporating User Centered Design into prototype development we initially started by conducting a small focus group consisting of five diverse individuals. This focus group combined with an analysis of the information gathered against feasibility and viability led us to set the following goal for our prototype: Create a functional prototype accessible for all users (including non-medically savvy consumers) to quickly and easily search and view the top adverse drug reactions. To achieve this goal we decided that a simple, usable, and accessible interface was necessary. To ensure that all of these were met we employed the following user centered design techniques: participatory design, usability testing, and heuristic evaluation.

As big fans of Steve Krug's "Don't Make Me Think" we put a big emphasis on making things simple and intuitive.  We helped people enter data correctly, coached them when they got something wrong, and rewarded them when they got something right.  Some of the techniques used included:

* Brainstorming
* Storyboarding
* Paper Prototyping
* Software Prototyping
* Controlled Usability Testing

## Agile Process

- [x] Used an iterative, feedback-driven approach
- [x] Used continuous integration system and automated testing
- [x] Built prototype using agile and iterative practices
- [x] Release early, iteratively, often
- [x] Only do it if it adds value

At inQbation Labs (our R&D division), we use an agile development framework including scrum, sprints, product backlog, kanban, automated testing, continuous integration, and Lean Startup to design, develop, and deploy software as a service web apps for ourselves and our clients.  We learned these skills by reading and studying the Agile Manifesto, Scrum Guide, and the Agile Samurai.  We masted the skills by doing it, failing, performing retrospectives, and doing it again.  We also hold certificates in Project Management and Certified Scrum Master, which gave us theoretical background knowledge to apply in different situations.  As we experiment in the lab and develop best practices and standard operating procedures, we implement these with our client projects on the service side of the house (Agileana).
 
For this prototype, we held an initial kick-off meeting where we produced an inception deck and brainstormed the user stories and product backlog.  The product owner assigned a business value to each user story and the team weighed in on the cost or estimated level of effort to produce each user story.  We calculated the amount of points we thought we could produce based on past team velocity and committed to a number of User Stories.
 
Our scrum master created the kanban board using JIRA and, as a team, we broke down the user stories into tasks.  We also grouped the user stories into epic groups.  We had decided to perform daily sprints and leverage Kanban so as soon as somebody was done with a task, they could just grab whatever next task needed to be done and proceed without delay.
 
Given that we worked over Father’s Day and July 4th weekends, we did a lot of our work remotely and in a distributed environment, which was not ideal but it worked.  We leveraged Google Hangouts and Slack to facilitate collaboration, resolve issues, discuss problems, and overcome obstacles.  We also used Google Hangouts for pair programming when we got stuck on a particular problem or issue that needed multiple brains to resolve.

From an iterative perspective, we started out simply by designing paper prototypes and wire frames to get early feedback on the user interface design and layout.  Based on that feedback, we simplified and focused on the absolute minimum viable product.  Then, we created a skeletal prototype without design or presentation layers simply to determine if we were producing desired results from the dataset and API.  We discovered significant false positives and false negatives and troubleshooted the problems with our queries until we were confident with the results.  Then, we iteratively improved on design and usability.

## Design

- [x] Created or used a design style guide and/or a pattern library
- [x] Used data to drive decisions

Our design actually started with Balsamiq wireframes.  Those wireframes included layouts for desktop machines, laptops, and mobile devices.  We created a style guide that was inline with modern web design trends for government agencies.  We designed the home page and search engine results page in Photoshop and then applied those designs to the front-end code.

During our design, we were conscious of colors and color contrast to minimize accessibilty risk and remain Section 508 compliant.  We also avoided design techniques that might have caused problems with cross-browser compatibility and responsiveness.

Our style guide is located on GitHub at https://github.com/inqbation/visualfda/blob/master/style-guide.jpg 

## Development

- [x] Created responsive prototype for multiple devices
- [x] Used at least five modern and open-source technologies
- [x] Deployed prototype on an IaaS or PaaS
- [x] Prototype and underlying platforms are free open source
- [x] Defaulted to open
- [x] Work in the open

As open source software advocates; it was an easy decision to default to open, select a modern technology stack, deploy in a flexible hosting environment, and automate testing and deployments.  We were completely at home using: 

* AngularJS
* jQuery
* Django
* Gulp
* Heroku
* Travis CI
* Sass
 
Our complete list of technologies (and versions) is located here: https://github.com/inqbation/visualfda/blob/master/technologies.md

To ensure cross-browser compatibility, we avoided things that we know are problematic with older browsers and beta browsers.  We also tested thoroughly against Chrome, Internet Explorer, Firefox, and Safari using matrix testing across Windows, Mac, iPhone, iPad, and Android devices.  We needed to make some small adjustments on the iPhone but, generally speaking, the prototype is fully responsive, cross-browser compliant, and accessible across most any kind of device somebody would like use.

## Quality Assurance 

- [x] Wrote unit tests for their code
- [x] Setup or used configuration management
- [x] Automated testing and deployments

We set up the continuous integration and continuous deployment part using Travis and Heroku so when somebody commits something to the master branch, it automatically tested by Travis and if all tests passes it automatically deploys the version to heroku. 
## DevOps 

- [x] Setup or used continuous monitoring
- [x] Deploy their software in a container
- [x] Provided documentation to install and run prototype machine
- [x] Deployed in a flexible hosting environment
- [x] Managed security through reusable processes
- [x] Don't slow down delivery

Requirement | Approach
----------- | --------
Continous monitoring | NewRelic, Google Analytics
Security | Set up https using wildcard SSL certificate
Container | Docker
IaaS, PaaS | We used Amazon S3 and Heroku

## About inQbation (dba Agileana)

inQbation was founded in 2007 with a mission to leverage Lean Startup and open source to help startups get started on bootstrap budgets.  Inspired by the Tech President, we relocated to the Washington DC 2009 to help government agencies do more with less.  In 2014, we rebranded the company as "Agileana: Lean, Agile, Web Development".  We have worked with GSA, OMB, NASA, DoD, DHS, State Department, Forest Service, and our teaming partners to design, develop, and deploy sites like www.Data.gov, www.USAspending.gov, www.RestoreTheGulf.gov, and www.CIES.org.  
