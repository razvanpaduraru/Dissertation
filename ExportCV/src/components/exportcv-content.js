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
              <mark>Contact Information</mark>
            </h2>
            <address>
              <ul>
                <li>Str. Veteranilor</li>
                <li>Phone: <a href="tel:+40728221297">Phone Number</a></li>
                <li>
                  Email:
                  <a href="mailto:razvanstefanpaduraru@gmail.com"
                    >Email Address</a
                  >
                </li>
                <li>
                  Website:
                  <a href="https://github.com/razvanpaduraru">Github</a>
                </li>
              </ul>
            </address>
          </section>

          <section>
            <h2>
              <mark>Working experience</mark>
            </h2>
            <details>
              <summary>
                <strong
                  >Undergradueted Teaching Assistent @ Politehnica Univeristy of
                  Bucharest</strong
                >
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
            </h2>

            <details>
              <summary>
                <strong
                  >Bachelor of Computer Science and Engineering @ Faculty of
                  Automatic Control and Computers</strong
                >
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
            </h2>

            <details>
              <summary>
                <strong>IoT Platform using Microservices</strong>
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
            </h2>

            <details>
              <summary>
                <strong>Spring up your app</strong>
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
              </summary>
              <ul>
                <li>Faculty's league of students</li>
                <li>Organized prom for first year students</li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>3DPUB Summer School</strong>
              </summary>
              <ul>
                <li>Workshop organized by ACS</li>
                <li>Learned to implement a basic Unity application</li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>Erasmus+</strong>
              </summary>
              <ul>
                <li>Trainer in the "Learning Romanian" activity</li>
              </ul>
            </details>
          </section>

          <section>
            <h2>
              <mark>Skills</mark>
            </h2>

            <details>
              <summary>
                <strong>Programming Languages</strong>
              </summary>
              <ul>
                <li>Intermediate: C/C++, Java, Python</li>
                <li>Basic: Bash, Matlab, Assembly, Hasqell, Databases</li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>Technologies</strong>
              </summary>
              <ul>
                <li>Unity, Maya, Docker</li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>Language</strong>
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

          <section>
            <h2>
              <mark>Other Skills</mark>
            </h2>

            <details>
              <summary>
                <strong>Sportive dance</strong>
              </summary>
              <ul>
                <li>Practiced sportive dance for eleven years</li>
                <li>
                  Titles: Region Champion (2012, 2013, 2014), Dance Classes
                  Champion (2013)
                </li>
              </ul>
            </details>

            <details>
              <summary>
                <strong>Acting</strong>
              </summary>
              <ul>
                <li>Practiced acting for eight years</li>
                <li>Titles: Best Junior Actor Award (2014, 2015)</li>
              </ul>
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
