# Pool Three Submission

Prototype allows people to see potential reactions to drugs so they can take precautions.

GSA Holder | inQbation (dba Agileana) 
--------------------------- | --------------------------
GSA Schedule | GS-35F-395BA
Contact | Blake Newman
Email | Blake.Newman@inQbation.com 
Size | Small business, big heart
Phone | 703.999.1232
Prototype URL | [SideEffects.Agileana.com](https://sideeffects.agileana.com/#/)
Build Status | [![Build Status](https://travis-ci.org/inqbation/visualfda.svg?branch=master)](https://travis-ci.org/inqbation/visualfda)
Installation | [instructions](https://github.com/inqbation/visualfda/blob/master/install.md)

##Team

- [x] Assigned one leader held personally accountable
- [x] Assembled a multidisciplinary and collaborative team
- [x] Brought in an experienced team

Following the USDS Playbook, we brought in an experienced, multidisciplinary team and assigned a personally accountable leader (Blake Newman).  

Our agile delivery services team included:
 
1. **Product Manager**, Blake (CSM, MS Information Systems, 20 years' experience)
2. **Technical Architect**, Luis (CSM, BS Computer Science, 15 years' experience)
3. **Interaction Designer**, Jenny (BS Interactive Design, 3 years' experience)
4. **Content Strategist**, Shannon (BA, 5 years' experience)
5. **Visual Designer**, Michael (BA, 10 years' experience)
6. **Frontend Developer**, Cesar (BS 5 years'experience)
7. **Frontend Developer**, Pipe (BS 3 years' experience)
8. **Backend Developer**, Felipe (BS 15 years' experience)
9. **DevOps Engineer**, Andres (BS 10 years' experience)

## Human Centered Design

- [x] Understood what people need
- [x] Put the needs of the users first
- [x] Used at least three “human-centered design” techniques or tools
- [x] Performed usability tests with people
- [x] Addressed the whole experience from start to finish
- [x] Made it simple and intuitive

The strategy was to produce a Minimum Viable Product (MVP) based on verified demand as it related to datasets from Open.FDA.gov.  We practiced Lean Startup by first listening and understanding to needs, rapidly producing a prototype, and iterating based on feedback.

On Father’s Day weekend, everybody took this opportunity to interview mothers, fathers, and grandparents about what bothers them about drug commercials that we could glean from the OpenFDA datasets. 
 
The answer came from 62 year old Theresa Cullen, a doctor who remembers hearing concerns from her patients about the side effects of drugs, fine print on drug labels, and fast talk at the end of drug commercials.  We honed in on this idea and polled multiple people to verify demand.  Consequently, we decided to produce a clean and simple tool to discover the effects and reactions of taking particular drugs.  

**Primary user goal:** As a patient or patient advocate, I want to know the potential side effects of a drug so I can decide whether it may cause problems.  

From a usability perspective, we also wanted to help people spell drugs correctly (which are not always easy to do)

**Secondary user goal:** As a patient or patient advocate seeking to find the effects of a drug, I want to autocomplete (autocorrect) my search query so I can avoid false negative search results.
 
Incorporating Human Centered Design into the prototype development encouraged the involvement of potential end users, which led to the creation of five diverse personas to represent the needs and expectations of the different types of end users taken into consideration during the design process. This approach combined with an analysis of the information gathered against feasibility and viability led us to set the following goal for our prototype: Create a functional prototype accessible for a wide range of users (abled and disabled, expert and non-expert) to intuitively search and quickly view the top adverse drug reactions in the form of a clear and concise graph. To achieve this goal, we decided that a simple, usable, and accessible interface was essential. To ensure that all of these requirements were met, we employed the following  HCD techniques: Persona Creation, Heuristic Evaluation, Participatory Design, and Usability Testing.

[Full narrative and evidence on our UCD approach](https://github.com/inqbation/visualfda/blob/master/docs/UserCenteredDesignNarrative.pdf)

## Agile Process

- [x] Used an iterative, feedback-driven approach
- [x] Used continuous integration system and automated testing
- [x] Built prototype using agile and iterative practices
- [x] Release early, iteratively, often
- [x] Only do it if it adds value

At inQbation Labs (our R&D division), we use an agile development framework including scrum, sprints, product backlog, kanban, automated testing, continuous integration, and Lean Startup to design, develop, and deploy software as a service web apps for ourselves and our clients.  We learned these skills by reading and studying the Agile Manifesto, Scrum Guide, and the Agile Samurai.  We masted the skills by doing it, failing, performing retrospectives, and doing it again.  We also hold certificates in Project Management and Certified Scrum Master, which gave us theoretical background knowledge to apply in different situations.  As we experiment in the lab and develop best practices and standard operating procedures, we implement these with our client projects on the service side of the house (Agileana).
 
For this prototype, we held an initial kick-off meeting where we produced an inception deck and brainstormed the user stories and product backlog.  The product owner assigned a business value to each user story and the team weighed in on the cost or estimated level of effort to produce each user story.  We calculated the amount of points we thought we could produce based on past team velocity and committed to a number of User Stories.
 
Our scrum master created the kanban board using JIRA and, as a team, we broke down the user stories into tasks.  We also grouped the user stories into epic groups.  We had decided to perform daily sprints and leverage Kanban so as soon as somebody was done with a task, they could just grab whatever next task needed to be done and proceed without delay.
 
From an iterative perspective, we started out simply by designing paper prototypes and wire frames to get early feedback on the user interface design and layout.  Based on that feedback, we simplified and focused on the absolute minimum viable product.  Then, we created a skeletal prototype without design or presentation layers simply to determine if we were producing desired results from the dataset and API.  We discovered significant false positives and false negatives and troubleshooted the problems with our queries until we were confident with the results.  Then, we iteratively improved on design and usability.

[Jira screen shots](https://github.com/inqbation/visualfda/tree/master/jira)

## Design

- [x] Created or used a design style guide and/or a pattern library
- [x] Used data to drive decisions

Our design actually started with Balsamiq wireframes.  Those wireframes included layouts for desktop machines, laptops, and mobile devices.  We created a style guide that was inline with modern web design trends for government agencies.  We designed the home page and search engine results page in Photoshop and then applied those designs to the front-end code.

During our design, we were conscious of colors and color contrast to minimize accessibilty risk and remain Section 508 compliant.  We also avoided design techniques that might have caused problems with cross-browser compatibility and responsiveness.

[Style guide and designs](https://github.com/inqbation/visualfda/tree/master/design)

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
 
[Complete list of technologies used](https://github.com/inqbation/visualfda/blob/master/technologies.md)

To ensure cross-browser compatibility, we avoided things that we know are problematic with older browsers and beta browsers.  We also tested thoroughly against Chrome, Internet Explorer, Firefox, and Safari using matrix testing across Windows, Mac, iPhone, iPad, and Android devices.  We needed to make some small adjustments on the iPhone but, generally speaking, the prototype is fully responsive, cross-browser compliant, and accessible across most any kind of device somebody would like use.

## Quality Assurance 

- [x] Wrote unit tests for their code
- [x] Automated testing and deployments

We set up the continuous integration and continuous deployment part using [Travis](https://travis-ci.org/inqbation/visualfda) and Heroku so when somebody commits something to the master branch, it automatically tested by Travis and if all tests passes it automatically deploys the version to heroku. 

For Section 508 (accessibility) testing, we used the following tools to identify issues:

* [Total Validator Pro](http://www.totalvalidator.com/downloads/protool.html)
* [WAVE toolbar](https://wave.webaim.org/toolbar/)
* [JAWS 15](http://www.freedomscientific.com/downloads/jaws/jaws-downloads.asp)
* [Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastAnalyser)
* [Evidence of 508 compliance test results ](https://github.com/inqbation/visualfda/tree/master/508-compliance)
* [508 tests with screen readers](https://vimeo.com/132783015)
* [508 tests for search results](https://vimeo.com/132784220)

## DevOps 

- [x] Setup or used continuous monitoring
- [x] Deploy their software in a container
- [x] Setup or used configuration management
- [x] Provided documentation to install and run prototype machine
- [x] Deployed in a flexible hosting environment
- [x] Managed security through reusable processes
- [x] Don't slow down delivery

Requirement | Approach
----------- | --------
Continous monitoring | NewRelic, Google Analytics
Security | Set up https using wildcard SSL certificate
Container | Docker
IaaS, PaaS | We used Amazon S3 and [Heroku](http://visualfda.herokuapp.com/#/)
Configuration management | [Github frontend](https://github.com/inqbation/visualfda)
Drug names for autocorrect | [Github backend](https://github.com/inqbation/fdadrugnames)

## About inQbation (dba Agileana)

[inQbation](http://www.inqbation.com) was founded in 2007 with a mission to leverage Lean Startup and open source technologies to help startups get started on bootstrap budgets.  Inspired by the Tech President, we relocated to the Washington DC in 2009 to help government agencies do more with less.  In 2014, we rebranded the company as "[Agileana](https://www.agileana.com): Lean, Agile, Web Development".  We have worked with GSA, OMB, NASA, State Department, Forest Service, and teaming partners to design, develop, and deploy sites like [Data.gov](http://www.Data.gov), [USASpending.gov](http://www.USAspending.gov), [RestoreTheGulf.gov](http://www.RestoreTheGulf.gov), and [CIES.org](http://www.CIES.org).  
