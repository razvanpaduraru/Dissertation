import { LitElement, html, css } from "lit-element";

export class ExportCVLogin extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 2rem;
        height: 5rem;
      }
      .form-log {
        margin: auto;
        width: 30%;
        padding: 10px;
      }
      input[type="text"],
      input[type="email"],
      input[type="password"] {
        width: 100%;
        padding: 10px 20px;
        margin: 8px 0;
        font-size: 15px;
        background-color: white;
        box-sizing: border-box;
        border: 3px solid #000080;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
        font-family: "Comic Sans MS", cursive, sans-serif;
      }

      ::placeholder {
        color: #000080;
      }

      h1 {
        font-size: 30px;
        padding-bottom: 20px;
        color: white;
        margin: 0 20%;
      }

      h4 {
        font-size: 20px;
        padding-bottom: 20px;
        color: red;
        margin: 0 2%;
      }

      input[type="text"]:focus {
        border: 3px solid #555;
      }

      div {
        margin: 10% auto;
        border-radius: 5px;
        background: #7f7f7f;
        background: rgba(0, 0, 0, 0.8);
        padding: 20px;
        width: 50%;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      label {
        color: #000080;
        font-size: 22px;
        padding: 8px;
        font-family: "Comic Sans MS", cursive, sans-serif;
      }

      button {
        background-color: white;
        color: #000080;
        padding: 12px 22px;
        border: 2px solid #000080;
        font-family: "Comic Sans MS", cursive, sans-serif;
        margin: 0 32%;
      }
      button:hover {
        background-color: #000080;
        color: white;
      }

      .clearfix2 {
        margin: 0 100%;
      }
    `;
  }

  static get properties() {
    return {
      error: { type: String },
    };
  }

  constructor() {
    super();
    this.error = "";
  }

  render() {
    return html`
      <div class="center">
        <form class="form-log" @submit=${this._onSubmit}>
          <h1>Export CV</h1>
          <p class="clearfix">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              required
            />
          </p>
          <p class="clearfix">
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              required
            />
          </p>
          <p class="clearfix">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </p>
          <p class="clearfix">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </p>
          <p class="clearfix">
            <button type="submit" name="submit">Login</button>
          </p>
          ${this.error}
        </form>
      </div>
    `;
  }

  async _onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const user = Object.fromEntries(data);
    const loginInfo = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
    };

    var date = {
      personalInfo: {
        firstname: "Razvan",
        lastname: "Paduraru",
        email: "razvanstefanpaduraru@gmail.com",
        linkedind:
          "https://www.linkedin.com/in/razvan-stefan-paduraru-b63973180/",
        github: "https://github.com/razvanpaduraru",
        actualJob: "Junior Java Developer @ Cognyte Romania",
      },
      experience: [
        {
          employerName: "Emp 1",
          period: "2019-2020",
          title: "Title 1",
        },
        {
          employerName: "Emp 2",
          period: "2020-2021",
          title: "Title 2",
        },
      ],
      skills: [{ skill1: "skill1" }, { skill2: "skill2" }],
      studiesInfo: [
        {
          institutionName: "Facultatea de Automatica si Calulcatoare, UPB",
          Degree: "Bachelor's degree",
          Period: "2016 - 2020",
        },
        {
          institutionName: "Facultatea de Automatica si Calulcatoare, UPB",
          Degree: "Master's degree",
          Period: "2020 - 2022",
        },
      ],
      publications: [
        {
          publicationName: "I.R.U.S. - navigation application",
          publishedIn: "Place of the publication",
          publicationType: "License",
          date: "22.06.2020",
        },
        {
          publicationName: "ExportCV - frontend approach",
          publishedIn: "Place of the publication",
          publicationType: "Dissertation",
          date: "22.06.2022",
        },
      ],
      projects: [
        {
          projectName: "ING DevSchool 2020",
          period: "02.02.2020 - 15.05.2020",
          description: "Short Description about the project",
        },
        {
          projectName: "ING DevSchool 2020 - 2",
          period: "02.02.2020 - 15.05.2020",
          description: "Short Description about the project",
        },
        {
          projectName: "ING DevSchool 2020 - 3",
          period: "02.02.2020 - 15.05.2020",
          description: "Short Description about the project",
        },
      ],
      patentes: [
        {
          patentName: "Brevet 1",
          dateObtained: "02.05.2020",
        },
        {
          patentName: "Brevet 2",
          dateObtained: "02.05.2020",
        },
      ],
    };

    this.dispatchEvent(new CustomEvent("login-pressed", { detail: date }));

    // const response = await fetch("http://0.0.0.0:82/sunrise", {
    //   method: "POST",
    //   body: loginInfo,
    //   redirect: "follow",
    // });

    // if (response.ok) {
    //   const date = await response.json();
    //   this.error = "";
    //   this.dispatchEvent(new CustomEvent("login-pressed", { detail: date }));
    // } else {
    //   this.error = html`<h4>Wrong credentials, try again!</h4>`;
    // }
  }
}

window.customElements.define("exportcv-login", ExportCVLogin);
