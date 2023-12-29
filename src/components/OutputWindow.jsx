const OutputWindow = () => {
  return (
    <div className="outputWindowContainer | flex h-full w-full items-center justify-center p-8">
      <div className="outputWindow | w-[700px] bg-white [aspect-ratio:1/1.414]">
        <div className="mainContainer | flex h-full gap-6 py-16 px-10">
          <div className="column | w-[50%]">
            <div className="fullName | whitespace-nowrap text-5xl font-semibold text-blue-600">
              Gokul Raja A
            </div>
            <div className="">
              <p class="c63">
                <span class="c12 c4 c67">
                  Data Analyst and Backend Developer
                </span>
              </p>
            </div>

            <div className="workExperienceSection | mt-10">
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
                <div className="workPeriod | text-xs text-gray-700">
                  JUly 23 - Dec 23
                </div>
                <div className="workDescription | pl-6">
                  <ul className="list-disc">
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      Community of Students, Leading collaborative teams in
                      creative direction, concept development, and client
                      engagement for progressive design solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="skillSection  | mt-10">
              <div className="sectionTitle | font-semibold text-blue-600">
                SKILLS
              </div>
              <div className="skillList">
                <div className="skill text-sm font-semibold leading-[1.2rem] text-gray-800">
                  Machine Learning, Data Analysis, AWS, Power BI, UI/UX, Quick
                  Learner, Adaptive Problem-Solver, Efficient communication
                </div>
              </div>
            </div>

            <div className="languageSection  | mt-10">
              <div className="sectionTitle | font-semibold text-blue-600">
                LANGUAGES
              </div>
              <div className="languageList">
                <div className="language text-sm font-semibold leading-[1.2rem] text-gray-800">
                  Python, SQL, Javascript, Node.js
                </div>
              </div>
            </div>

            <div className="educationSection | mt-10">
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
                      B.Tech Information Technology
                    </li>
                    <li className="500 text-xs leading-normal">
                      <a className="text-xs leading-normal text-gray-500">
                        CGPA
                      </a>{" "}
                      <a class="c4">9.39</a> - 6th Semester
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
            <div className="socialLinkSection  | mt-10 pt-2">
              <div className="sectionTitle | font-semibold text-blue-600">
                SOCIAL LINKS
              </div>
              <div className="socialLinkList | mt-1 pl-4">
                <div className="socialLink text-sm font-semibold leading-[1.2rem] text-gray-800">
                  Linkedin{" "}
                  <a href="#" className="link | text-blue-500 underline">
                    link
                  </a>
                </div>
                <div className="socialLink text-sm font-semibold leading-[1.2rem] text-gray-800">
                  Github{" "}
                  <a
                    href="https://github.com/Gokul-Raja84"
                    target="_blank"
                    className="link | text-blue-500 underline"
                  >
                    link
                  </a>
                </div>
                <div className="socialLink text-sm font-semibold leading-[1.2rem] text-gray-800">
                  Portfolio{" "}
                  <a
                    href="https://gokulraja.rocks/"
                    target="_blank"
                    className="link | text-blue-500 underline"
                  >
                    link
                  </a>
                </div>
                <div className="socialLink text-sm font-semibold leading-[1.2rem] text-gray-800">
                  HackerRank{" "}
                  <a href="#" className="link | text-blue-500 underline">
                    link
                  </a>
                </div>
              </div>
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
              <a href="https://gokulraja.rocks/" target="_blank">
                www.gokulraja.rocks
              </a>
            </div>

            <div className="projectSection | mt-10">
              <div className="sectionTitle | font-semibold text-blue-600">
                PROJECTS
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">DigitGlyph </span>
                  <span class="c11 c14">
                    <a
                      class="c22"
                      href="https://www.google.com/url?q=https://gokul-raja84.github.io/DigitGlyph/&amp;sa=D&amp;source=editors&amp;ust=1703786697936159&amp;usg=AOvVaw2WQD1kPTyWjV-IqZYdpYVi"
                    >
                      - Web App
                    </a>
                  </span>
                  <span class="c27 c52">&nbsp;</span>
                  <span class="c52 c27 c30 c70">&#11088;</span>
                  <a></a>
                </div>
                <div className="projectDescription | pl-6">
                  <ul class="mt-2 list-disc">
                    <li class="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      <span class="c2">Developed a web application using </span>
                      <span class="c2 c4">Python </span>
                      <span class="c2">and </span>
                      <span class="c2 c4">CNNs </span>
                      <span class="c2">that achieves </span>
                      <span class="c2 c4">99.15% accuracy </span>
                      <span class="c2">in recognizing handwritten digits.</span>
                    </li>
                    <li class="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      <span class="c2">
                        Created an interactive user interface with
                      </span>
                      <span class="c2 c4">&nbsp;</span>
                      <span class="c2">TensorFlow.js </span>
                      <span class="c2">and hosted the project on</span>
                      <span class="c2 c4">&nbsp;GitHub Pages</span>
                      <span class="c2">&nbsp;for global accessibility.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">
                    {" "}
                    Exploratory Data Analysis{" "}
                  </span>
                  <span class="c11 c14">
                    <a
                      class="c22"
                      href="https://www.google.com/url?q=https://gokul-raja84.github.io/DigitGlyph/&amp;sa=D&amp;source=editors&amp;ust=1703786697936159&amp;usg=AOvVaw2WQD1kPTyWjV-IqZYdpYVi"
                    >
                      - Github
                    </a>
                  </span>
                </div>
                <div className="projectDescription | pl-6">
                  <p class="c10">
                    <span class="c33 c27 c30"></span>
                  </p>
                  <ul class="mt-2 list-disc">
                    <li class="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      <span class="c2">Conducted Spotify EDA using</span>
                      <span class="c2 c4">&nbsp;</span>
                      <span class="c2">Python</span>
                      <span class="c2 c4">, NumPy, Pandas, </span>
                      <span class="c2">and </span>
                      <span class="c2 c4">Matplotlib</span>
                      <span class="c2">&nbsp;to extract insights from a</span>
                      <span class="c2 c4">&nbsp;</span>
                      <span class="c2">Spotify music dataset</span>
                      <span class="c2 c4">.</span>
                    </li>
                    <li class="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      <span class="c2">Unveiled </span>
                      <span class="c2 c4">patterns </span>
                      <span class="c2">
                        in song popularity, identified audio attribute
                        correlations, and tracked the evolution of music genres,
                        demonstrating
                      </span>
                      <span class="c2 c4">&nbsp;Data analysis </span>
                      <span class="c2">and </span>
                      <span class="c37 c2 c4">visualization skills.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">Math Scribble </span>
                  <span class="c11 c14">
                    <a
                      class="c22"
                      href="https://math-scribble.netlify.app/"
                      target="_blank"
                    >
                      - Web |
                    </a>
                  </span>
                  <span class="c11 c14">
                    <a
                      class="c22"
                      href="https://github.com/Gokul-Raja84/MATH-SCRIBBLE"
                      target="_blank"
                    >
                      {" "}
                      Github
                    </a>
                  </span>
                </div>
                <div className="projectDescription | pl-6">
                  <ul className="mt-2 list-disc">
                    <li class="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      <span class="c2">Developed a &nbsp;</span>
                      <span class="c2 c4">Real time</span>
                      <span class="c2">&nbsp;</span>
                      <span class="c2">Handwritten </span>
                      <span class="c2 c4">Math Expressions</span>
                      <span class="c2">
                        &nbsp;Recognition &amp; Calculation System using{" "}
                      </span>
                      <span class="c2 c4">Deep Learning </span>
                      <span class="c7 c2">for Students and Educators.</span>
                    </li>
                    <li class="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      <span class="c2">
                        Engineered Deep Learning technologies,{" "}
                      </span>
                      <span class="c2 c4">
                        <strong>TensorFlow</strong>
                      </span>
                      <span class="c2">, PyTorch, and </span>
                      <span class="c2 c4">
                        <strong>Bidirectionally Trained Transformer</strong>
                      </span>
                      <span class="c2"> and </span>
                      <span class="c2 c4">
                        <strong>Node.js</strong>
                      </span>
                      <span class="c2">
                        , making math expression recognition and calculation
                        seamlessly accessible and efficient to{" "}
                      </span>
                      <span class="c2 c4">
                        <strong>Students</strong>
                      </span>
                      .
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">
                    Dynamic Power BI Dashboards{" "}
                  </span>
                  <span class="c11 c14">
                    <a
                      class="c22"
                      href="https://www.google.com/url?q=https://gokul-raja84.github.io/DigitGlyph/&amp;sa=D&amp;source=editors&amp;ust=1703786697936159&amp;usg=AOvVaw2WQD1kPTyWjV-IqZYdpYVi"
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
                      <span class="c2">
                        &nbsp;using Data Analysis, Data Modeling and Data
                        Visualization along with{" "}
                      </span>
                      <span class="c2 c4">Forecasting</span>
                      <span class="c2">.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputWindow;
