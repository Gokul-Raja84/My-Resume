const OutputWindow = () => {
  return (
    <div className="outputWindowContainer | flex h-full w-full items-center justify-center p-8">
      <div className="outputWindow | w-[800px] bg-white [aspect-ratio:1/1.5]">
        <div className="mainContainer | flex h-full gap-6 py-16 px-10">
          <div className="column | w-[50%]">
            <div className="fullName | whitespace-nowrap text-5xl font-semibold text-blue-500">
              <a
                href="https://gokul-raja84.github.io/My-Resume/"
                target="_blank"
              >
                {" "}
                Gokul Raja A{" "}
              </a>
            </div>
            <div className="">
              <p class="c63">
                <span class="c12 c4 c67">Software Developer</span>
              </p>
            </div>
            <br />

            <div className="educationSection | mt-9">
              <div className="sectionTitle | font-semibold text-blue-600">
                EDUCATION
              </div>
              <div className="education | mt-1">
                <div className="educationTitle">
                  <span className="font-semibold">
                    SRM Institute of Science and Technology
                  </span>
                </div>
                <div className="educationPeriod | text-xs text-gray-700">
                  2020 - 2024
                </div>
                <div className="educationDescription | pl-4">
                  <ul>
                    <li className="text-sm leading-[1.2rem] text-gray-600">
                      B.Tech <span className="c4">Information Technology</span>
                    </li>
                    <li className="500 text-xs leading-normal">
                      <a className="text-xs leading-normal text-gray-500">
                        CGPA
                      </a>{" "}
                      <a class="c4">9.45</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="education | mt-1">
                <div className="educationTitle">
                  <span className="font-semibold">
                    Srivi Lions Matric Hr Sec School
                  </span>
                </div>
                <div className="educationPeriod | text-xs text-gray-700">
                  2019 - 2020
                </div>
                <div className="educationDescription | pl-4">
                  <ul>
                    <li className="text-sm leading-[1.2rem] text-gray-600">
                      HSLC - 78.8%
                    </li>
                    {/* <li className="text-xs leading-normal text-gray-500">
                      12th - 84.8%, 10th - 82.2%
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="education | mt-1">
                <div className="educationTitle">
                  <span className="font-semibold">
                    G.S. Hindu Hr Sec School
                  </span>
                </div>
                <div className="educationPeriod | text-xs text-gray-700">
                  2017 - 2018
                </div>
                <div className="educationDescription | pl-4">
                  <ul>
                    <li className="text-sm leading-[1.2rem] text-gray-600">
                      SSLC - 92.8%
                    </li>
                    {/* <li className="text-xs leading-normal text-gray-500">
                      12th - 84.8%, 10th - 82.2%
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="workExperienceSection | mt-6">
              <div className="sectionTitle | font-semibold text-blue-600">
                EXPERIENCE
              </div>
              <div className="workExperience | mt-1">
                <div className="workTitle">
                  <span className="font-semibold">Creative Strategist </span>
                  <span class="c14 c26 c62">
                    <a
                      class="c22"
                      href="https://cosmiccrafts.netlify.app/"
                      target="_blank"
                    >
                      - Cosmic Crafts
                    </a>
                  </span>
                </div>
                <div className="workPeriod | text-xs text-gray-600">
                  July 23 - Oct 23
                </div>
                <div class="mt-1 text-sm leading-[1.2rem] text-gray-600">
                  <span class="c2">
                    Community of Students, Leading collaborative teams in
                    creative direction, concept development, and client
                    engagement for progressive design solutions.
                  </span>
                </div>
              </div>
            </div>

            <div className="skillSection | mt-5">
              <div className="sectionTitle | font-semibold text-blue-600">
                SKILLS
              </div>
              <div className="skillList">
                <div className="skill text-sm font-semibold leading-[1.2rem] text-gray-800">
                  Python - Java <br />
                  SQL - Machine Learning <br />
                  Data Analysis - UI/UX - Debugging
                  <br />
                  <br /> Attentive learner - Analytical Thinker - <br />
                  Articulate Communication
                  <br />
                  <br />
                  <span className="c4 c2"> Familiar:</span>
                  <br />
                  AWS, Excel, JavaScript, API, Firebase
                </div>
              </div>
            </div>

            <div className="socialLinkSection  | mt-8 pt-2">
              <div className="sectionTitle | font-semibold text-blue-600">
                COURSE WORK
              </div>
              <div class="mt-1 text-sm leading-[1.2rem] text-gray-600">
                <span class="c2">
                  Object Oriented Programming - Data Structures
                  <br />
                  Artificial Intelligence - DBMS - Data Science
                  <br /> Web Development - Deep Learning - AWS Cloud
                </span>
              </div>
            </div>
            <br />
            <div className="sectionTitle | mt- font-semibold text-blue-600">
              Position
            </div>
            <div class="mt-1 text-sm leading-[1.2rem] text-gray-600">
              <span class="c2">Served as one of the </span>
              <span class="c2 c4">Department Representative </span>
              <span class="c2">
                of IT Department and an active Participant of Google Student
                Developer Club SRMIST.
              </span>
            </div>
          </div>
          <div className="column | w-[50%]">
            <div className="contactSection | flex flex-col items-end text-xs font-semibold text-gray-600">
              <div className="text-gray-800">Contact Info : </div>
              <br />
              <div>+91 8248554639</div>
              <a href="mailto:ga8436@srmist.edu.in" target="_blank">
                ga8436@srmist.edu.in
              </a>
              <a href="mailto:gokulraja840@gmail.com" target="_blank">
                gokulraja840@gmail.com
              </a>
              <a href="https://gokul-raja84.github.io/" target="_blank">
                gokul-raja84.github.io
              </a>
              <div>Madurai, Tamil Nadu</div>
            </div>

            <div className="projectSection |  mt-4">
              <div className="sectionTitle |  font-semibold text-blue-600">
                PROJECTS
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">DigitGlyph </span>
                  <span class="c11 c14">
                    <a
                      class="c22"
                      href="https://gokul-raja84.github.io/DigitGlyph/"
                      target="_blank"
                    >
                      - Machine Learning App
                    </a>
                  </span>
                  <span class="c27 c52">&nbsp;</span>
                  <span class="c52 c27 c30 c70">&#11088;</span>
                  <a></a>
                </div>
                <div className="projectDescription | pl-6">
                  <ul class="mt-2 list-disc">
                    <li
                      class="mt-1 text-sm leading-[1.2rem] text-gray-600"
                      style={{ textAlign: "justify" }}
                    >
                      <span class="c2">
                        Developed a Machine Learning Application using{" "}
                      </span>
                      <span class="c2 c4">Python </span>
                      <span class="c2">and </span>
                      <span class="c2 c4">CNNs </span>
                      <span class="c2">that achieves </span>
                      <span class="c2 c4">99.15% accuracy </span>
                      <span class="c2">in recognizing handwritten digits.</span>
                    </li>
                    <li
                      class="mt-1 text-sm leading-[1.2rem] text-gray-600"
                      style={{ textAlign: "justify" }}
                    >
                      <span class="c2">
                        Created an Interactive user interface with
                      </span>
                      <span class="c2 c4">&nbsp;</span>
                      <span class="c2 c4">TensorFlow</span>
                      <span class="c2">.js and hosted the project on</span>
                      <span class="c2 c4">&nbsp;GitHub</span>
                      <span class="c2">
                        &nbsp;Pages for global accessibility.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">
                    {" "}
                    Exploratory Data Analysis & Music Recommendation{" "}
                  </span>
                  <span class="c11 c14">
                    <a
                      class="c22"
                      href="https://github.com/Gokul-Raja84/Spotify-Music-Recommendation-and-Data-Analysis"
                      target="_blank"
                    >
                      - Github
                    </a>
                  </span>
                </div>
                <div className="projectDescription | pl-6">
                  <ul class="mt-2 list-disc">
                    <li
                      class="mt-1 text-sm leading-[1.2rem] text-gray-600"
                      style={{ textAlign: "justify" }}
                    >
                      <span class="c2">Conducted Spotify EDA using</span>
                      <span class="c2 c4">&nbsp;</span>
                      <span class="c2 c4">Python</span>
                      <span class="c2 c4">, NumPy, Pandas, SQL</span>
                      <span class="c2"> and </span>
                      <span class="c2 c4">Matplotlib</span>
                      <span class="c2">&nbsp;to extract insights</span>
                      <span class="c2">, showcasing proficiency in</span>
                      <span class="c2 c4">&nbsp;Data analysis </span>
                      <span class="c2">and </span>
                      <span class="c37 c2 c4">Visualization skills.</span>
                    </li>
                    <li
                      class="mt-1 text-sm leading-[1.2rem] text-gray-600"
                      style={{ textAlign: "justify" }}
                    >
                      <span class="c2">Unveiled </span>
                      <span class="c2 c4">patterns </span>
                      <span class="c2">
                        in song popularity, audio attribute correlations,
                        tracked the evolution of music genres, leading to
                        strategic insights and resulting in a{" "}
                        <span class="c2 c4"> 15%</span> improvement in
                        personalized music recommendations.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">ImaGenX-AI </span>
                  <span class="c11 c14">
                    <a
                      class="c22"
                      href="https://github.com/Gokul-Raja84/ImaGenX-AI"
                      target="_blank"
                    >
                      -
                    </a>
                  </span>
                  <span class="c11 c14">
                    <a
                      class="c22"
                      href="https://github.com/Gokul-Raja84/ImaGenX-AI"
                      target="_blank"
                    >
                      {" "}
                      Github
                    </a>
                  </span>
                </div>
                <div className="projectDescription | pl-6">
                  <ul className="mt-2 list-disc">
                    <li
                      class="mt-1 text-sm leading-[1.2rem] text-gray-600"
                      style={{ textAlign: "justify" }}
                    >
                      <span class="c2">
                        Engineered a Text to Image generation, ImaGenX,
                        integrated advanced technologies, including Google's{" "}
                      </span>
                      <span class="c2 c4">Vertex AI </span>
                      <span class="c2">& </span>
                      <span class="c2 c4">Imagen 2 API, </span>
                      <span class="c2">
                        for efficient <span class="c2 c4">AI</span> Image
                        Generation.
                      </span>
                    </li>
                    <li
                      class="mt-1 text-sm leading-[1.2rem] text-gray-600"
                      style={{ textAlign: "justify" }}
                    >
                      <span class="c2">Designed and implemented a </span>
                      <span class="c2 c4">
                        <strong>Full-stack </strong>
                      </span>
                      <span class="c2">
                        solution for ImaGenX, combined JavaScript on front end
                        with Node.js on the back end.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">
                    Dynamic Power BI Dashboards{" "}
                  </span>
                  <span class="c11 c14">
                    <a
                      class="c22"
                      href="https://github.com/Gokul-Raja84/Power-BI-Interactive-Dashboard-Projects"
                      target="_blank"
                    >
                      - Github
                    </a>
                  </span>
                </div>
                <div className="projectDescription | pl-6">
                  <ul className="mt-2 list-disc">
                    <li class="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      <span class="c2">Created Dynamic and </span>
                      <span class="c2 c4">Interactive </span>
                      <span class="c2">Dashboards in </span>
                      <span class="c2 c4">POWER BI</span>
                      <span class="c2">&nbsp;using Data Analysis, </span>
                      <span class="c2 c4">Data Modeling</span>
                      <span class="c2">
                        {" "}
                        and Data Visualization along with{" "}
                      </span>
                      <span class="c2 c4">Forecasting</span>
                      <span class="c2">.</span>
                    </li>
                    <li class="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      <span class="c2">
                        Optimized Power BI data models, resulting in enhanced
                        dashboard performance and responsiveness, creating
                        interactive visualizations that increased{" "}
                        <span class="c2 c4">data exploration </span> efficiency
                        by <span class="c2 c4">40%</span>.
                      </span>
                      <span class="c2">
                        <strong></strong>
                      </span>
                      <span class="c2"></span>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <br />

            <div className="sectionTitle | font-semibold text-blue-600">
              RESEARCH & PUBLICATION
            </div>
            <div className="project | mt-">
              <div className="projectTitle">
                <span className="font-semibold">Network Security ACGAN | </span>
                <span className="educationPeriod | text-xs text-gray-700">
                  Jan 2024 - May 2024
                </span>
                <br />
                <span class="socialLink text-sm font-semibold leading-[1.2rem] text-gray-800">
                  HEAD UNDERGRADUATE RESEARCHER
                </span>
              </div>
              <div
                class="mt-1 text-sm leading-[1.2rem] text-gray-600"
                style={{ textAlign: "justify" }}
              >
                <span class="c2">
                  Led dynamic team developing innovative network security
                  solution using{" "}
                </span>
                <span class="c2 c4">AC-GANs, ML & AI. </span>
                <span class="c2">
                  Achieved ~90% accuracy in ML results and Demonstrated{" "}
                  <span class="c2 c4">Leadership & Technical expertise.</span>
                  <span>
                    {" "}
                    Published research findings in a prestigious academic
                    journal, contributing valuable insights to the field of
                    network security.
                  </span>
                </span>
              </div>

              {/* </ul> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputWindow;
