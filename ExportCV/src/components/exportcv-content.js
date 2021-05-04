import { LitElement, html, css } from "lit-element";

class ExportCVContent extends LitElement {
  static get styles() {
    return css`
      header {
        color: white;
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        margin: 0 20%;
        font-size: 30px;
      }

      main {
        color: white;
        padding: 2rem;
        margin: 0 10%;
      }

      button {
        background-color: white;
        color: black;
        padding: 12px 22px;
        border: 2px solid black;
        font-family: "Comic Sans MS", cursive, sans-serif;
      }
      button:hover {
        background-color: black;
        color: white;
      }

      table,
      th,
      td {
        border: 1px solid white;
      }

      header {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
      }

      body {
        display: flex;
        flex-direction: column;
        height: fit-content;
        margin: 0;
        width: fit-content;
      }

      main {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      input[type="checkbox"] {
        height: 20px;
        width: 20px;
        background-color: #eee;
      }

      input[type="checkbox"]:checked {
        background-color: #ccc;
      }
    `;
  }

  static get properties() {
    return {
      page: { type: String },
      date: { type: String },
    };
  }

  constructor() {
    super();
    this.page = "tables";
  }

  render() {
    console.log(JSON.parse(this.date));
    return html`
      <head>
        <title>Personal CV</title>
        <meta charset="utf-8" />
      </head>

      <body>
        <header>
          <h1>Paduraru Razvan-Stefan</h1>
          <h2><em>Personal CV</em></h2>
        </header>

        <main>
          <section>
            <h2>
              <mark>Personal Information</mark>
              <input
                type="checkbox"
                id="personal"
                name="personal"
                value="personal"
              />
            </h2>
            <address>
              <ul>
                <li>Str. Veteranilor</li>
                <li>
                  Phone: <a href="tel:+40728221297">Phone Number</a>
                  <input
                    type="checkbox"
                    id="personal1"
                    name="personal1"
                    value="personal1"
                  />
                </li>
                <li>
                  Email:
                  <a href="mailto:razvanstefanpaduraru@gmail.com"
                    >Email Address</a
                  >
                  <input
                    type="checkbox"
                    id="personal2"
                    name="personal2"
                    value="personal2"
                  />
                </li>
                <li>
                  Website:
                  <a href="https://github.com/razvanpaduraru">Github</a>
                  <input
                    type="checkbox"
                    id="personal3"
                    name="personal3"
                    value="personal3"
                  />
                </li>
              </ul>
            </address>
          </section>

          <section>
            <h2>
              <mark>Working experience</mark>
              <input type="checkbox" id="work" name="work" value="work" />
            </h2>
            <details>
              <summary>
                <strong
                  >Undergradueted Teaching Assistent @ Politehnica Univeristy of
                  Bucharest</strong
                >
                <input type="checkbox" id="work1" name="work1" value="work1" />
              </summary>
              <ul>
                <li>Algorithm Analysis Course C/C++/JAVA</li>
                <li>Creating subjects for tests and exams</li>
                <li>Updating seminars and proposing the semestrial project</li>
              </ul>
            </details>

            <details>
              <summary>
                <strong
                  >Autonomuos Driving vs Robotic Control Driving Intern @ EXPLEO
                  GROUP ROMANIA</strong
                >
                <input type="checkbox" id="work2" name="work2" value="work2" />
              </summary>
              <ul>
                <li>Implemented a self driving car</li>
                <li>Detecting street signs, pedestrians and other cars</li>
              </ul>
            </details>
          </section>

          <section>
            <h2>
              <mark>Education</mark>
              <input
                type="checkbox"
                id="education"
                name="education"
                value="education"
              />
            </h2>

            <details>
              <summary>
                <strong
                  >Bachelor of Computer Science and Engineering @ Faculty of
                  Automatic Control and Computers</strong
                >
                <input
                  type="checkbox"
                  id="education1"
                  name="education1"
                  value="education1"
                />
              </summary>
              <ul>
                <li><strong>GPA: 3.67/4</strong></li>
              </ul>
            </details>

            <details>
              <summary>
                <strong
                  >Cisco Certified Network Associate @ Cisco's UPB
                  Academy</strong
                >
                <input
                  type="checkbox"
                  id="education2"
                  name="education2"
                  value="education2"
                />
              </summary>
              <ul>
                <li>
                  finished the <strong>CCNA 1-4 Routing and Switching</strong>
                </li>
              </ul>
            </details>
          </section>

          <section>
            <h2>
              <mark>Projects</mark>
              <input
                type="checkbox"
                id="projects"
                name="projects"
                value="projects"
              />
            </h2>

            <details>
              <summary>
                <strong>IoT Platform using Microservices</strong>
                <input
                  type="checkbox"
                  id="projects1"
                  name="projects1"
                  value="projects1"
                />
              </summary>
              <ul>
                <li>University Project</li>
                <li>
                  <b>Python</b> application for collecting, storing and viewing
                  numerical data
                </li>
                <li>
                  The structure of the application:
                  <ul>
                    <li>The devices connected to Internet</li>
                    <li>MQTT broker</li>
                    <li>InfluxDB</li>
                    <li>
                      Adapter for parsing the recieved messages from IoT devices
                    </li>
                    <li>Grafana viewing interface</li>
                  </ul>
                </li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>Symbols Solving and Type Verification</strong>
                <input
                  type="checkbox"
                  id="projects2"
                  name="projects2"
                  value="projects2"
                />
              </summary>
              <ul>
                <li>University Project</li>
                <li><b>Java + ANTLR4</b> application</li>
                <li>
                  After generating the Abtract Sintax Tree, the program will be
                  able to detect semantic errors
                </li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>XML-parser and CAN code generator</strong>
                <input
                  type="checkbox"
                  id="projects3"
                  name="projects3"
                  value="projects3"
                />
              </summary>
              <ul>
                <li>Internship Project</li>
                <li><b>Python</b> application</li>
                <li>
                  Parses the XML file with initialization parameters and then
                  generates its coresponding CAN code
                </li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>Crowdsensing</strong>
                <input
                  type="checkbox"
                  id="projects4"
                  name="projects4"
                  value="projects4"
                />
              </summary>
              <ul>
                <li>University Project</li>
                <li><b>Python</b> application</li>
                <li>
                  System that implements simulation of a crowdsensing system for
                  noise mapping
                </li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>MiniCAD</strong>
                <input
                  type="checkbox"
                  id="projects5"
                  name="projects5"
                  value="projects5"
                />
              </summary>
              <ul>
                <li>University Project</li>
                <li><b>Java</b> application</li>
                <li>
                  Program that enables the creation of an image realised from
                  basic geometric shapes
                </li>
              </ul>
            </details>
          </section>

          <section>
            <h2>
              <mark>Extracurricular Activities</mark>
              <input
                type="checkbox"
                id="activities"
                name="activities"
                value="activities"
              />
            </h2>

            <details>
              <summary>
                <strong>Spring up your app</strong>
                <input
                  type="checkbox"
                  id="activities1"
                  name="activities1"
                  value="activities1"
                />
              </summary>
              <ul>
                <li>Workshop organized by Orange</li>
                <li>
                  Learned to implement a Movie Database using Java, Maven, Git,
                  MongoDB
                </li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>Volutneering at LSAC</strong>
                <input
                  type="checkbox"
                  id="activities2"
                  name="activities2"
                  value="activities2"
                />
              </summary>
              <ul>
                <li>Faculty's league of students</li>
                <li>Organized prom for first year students</li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>3DPUB Summer School</strong>
                <input
                  type="checkbox"
                  id="activities3"
                  name="activities3"
                  value="activities3"
                />
              </summary>
              <ul>
                <li>Workshop organized by ACS</li>
                <li>Learned to implement a basic Unity application</li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>Erasmus+</strong>
                <input
                  type="checkbox"
                  id="activities4"
                  name="activities4"
                  value="activities4"
                />
              </summary>
              <ul>
                <li>Trainer in the "Learning Romanian" activity</li>
              </ul>
            </details>
          </section>

          <section>
            <h2>
              <mark>Skills</mark>
              <input type="checkbox" id="skills" name="skills" value="skills" />
            </h2>

            <details>
              <summary>
                <strong>Programming Languages</strong>
                <input
                  type="checkbox"
                  id="prlanguages"
                  name="prlanguages"
                  value="prlanguages"
                />
              </summary>
              <ul>
                <li>Intermediate: C/C++, Java, Python</li>
                <li>Basic: Bash, Matlab, Assembly, Hasqell, Databases</li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>Technologies</strong>
                <input
                  type="checkbox"
                  id="technologies"
                  name="technologies"
                  value="technologies"
                />
              </summary>
              <ul>
                <li>Unity, Maya, Docker</li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>Language</strong>
                <input
                  type="checkbox"
                  id="languages"
                  name="languages"
                  value="languages"
                />
              </summary>
              <table style="width:100%">
                <tr>
                  <th>Language</th>
                  <th>Understanding</th>
                  <th>Speaking</th>
                  <th>Writing</th>
                </tr>
                <tr>
                  <td>English</td>
                  <td>B2</td>
                  <td>B2</td>
                  <td>B2</td>
                </tr>
                <tr>
                  <td>Romanian</td>
                  <td>C2(native)</td>
                  <td>C2(native)</td>
                  <td>C2(native)</td>
                </tr>
              </table>
            </details>
          </section>
        </main>

        <footer>
          <button onclick="myFunction()">Print this page</button>
          <script>
            function myFunction() {
              window.print();
            }
          </script>
        </footer>
      </body>
      <button @click=${this._onLogout}>Logout</button>
      <button @click=${this._onCreateCV}>Create CV</button>
    `;
  }

  _onLogout(event) {
    event.preventDefault();
    window.location.href = "http://localhost:5050/#";
  }

  _onCreateCV(event) {
    event.preventDefault();
    window.location.href = "http://localhost:5050/#";
  }
}

window.customElements.define("exportcv-content", ExportCVContent);
