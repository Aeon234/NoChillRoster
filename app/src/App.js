import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <meta charSet="utf-8" />
      <title>Aeon's Home</title>
      <link rel="icon" href="icon.png" type="image/x-icon" />
      <meta name="author" content="Alex Iukuridze" />
      <meta
        name="description"
        content="Evidence of me learning how to design a website from scratch."
      />
      <link rel="stylesheet" href="style.css" />
      <div id="canvas">
        <header id="header-container">
          <div id="header-title">
            <div id="logo" data-content-field="site-title">
              <div
                className="logo"
                data-shrink-original-size={26}
                style={{ letterSpacing: "0em" }}
              >
                <a href="/">
                  <img src="/NoChill_Title.png" alt="No Chill Guild" />
                </a>
              </div>
            </div>
            {/* <nav class="nav-bar">
              <ul>Classdropdown-input
                  <li><a href="/index.html">Home</a></li>
                  <li><a class="current-page" href="/nochill.html">About</a></li>
                  <li><a href="/blog.html">Blog</a></li>
                  <li><a href="/contactus.html">Contact</a></li>
              </ul>
          </nav> */}
          </div>
        </header>
        <main>
          <div className="RosterClassQuestionnaire">
            <h2 className="QuestionnaireTitle">
              No Chill - The War Within Roster
            </h2>
            <div className="PlayerName">
              <h3 className="QuestionLabel">Your name?</h3>
              <input
                id="PlayerName_Input"
                className="PlayerNameText"
                type="text"
                placeholder="e.g. Aeon"
              />
            </div>
            <div className="FirstClass">
              <div className="ClassLabel">
                <h3 className="QuestionLabel">
                  What's your top choice class/spec to play?
                </h3>
              </div>
              <div className="ClassQuestions">
                <div id="ClassChoice1" className="ClassDropdown">
                  <input
                    id="ClassChoice1-input"
                    type="text"
                    placeholder="1st Choice Class"
                    className="ClassDropdown-input"
                  />
                  <i
                    id="ClassChoice1-icon"
                    className="icon iconfont icon-arrow"
                  />
                  <ul id="ClassChoice1-ul" className="ClassDropdown-ul" />
                </div>
                <div id="SpecChoice1" className="ClassDropdown">
                  <input
                    id="SpecChoice1-input"
                    type="text"
                    placeholder="1st Choice Spec"
                    className="SpecDropdown-input"
                  />
                  <i
                    id="SpecChoice1-icon"
                    className="icon iconfont icon-arrow"
                  />
                  <ul id="SpecChoice1-ul" className="SpecDropdown-ul" />
                </div>
                <input
                  id="Choice1Text"
                  className="ChoiceText"
                  type="text"
                  placeholder="Anything you want to add?"
                />
              </div>
            </div>
            <div className="SecondClass">
              <div className="ClassLabel">
                <h3 className="QuestionLabel">2nd choice class/spec?</h3>
              </div>
              <div className="ClassQuestions">
                <div id="ClassChoice2" className="ClassDropdown">
                  <input
                    id="ClassChoice2-input"
                    type="text"
                    placeholder="2nd Choice Class"
                    className="ClassDropdown-input"
                  />
                  <i
                    id="ClassChoice2-icon"
                    className="icon iconfont icon-arrow"
                  />
                  <ul id="ClassChoice2-ul" className="ClassDropdown-ul" />
                </div>
                <div id="SpecChoice2" className="ClassDropdown">
                  <input
                    id="SpecChoice2-input"
                    type="text"
                    placeholder="2nd Choice Spec"
                    className="SpecDropdown-input"
                  />
                  <i
                    id="SpecChoice2-icon"
                    className="icon iconfont icon-arrow"
                  />
                  <ul id="SpecChoice2-ul" className="SpecDropdown-ul" />
                </div>
                <input
                  id="Choice2Text"
                  className="ChoiceText"
                  type="text"
                  placeholder="Anything you want to add?"
                />
              </div>
            </div>
            <div className="ThirdClass">
              <div className="ClassLabel">
                <h3 className="QuestionLabel">3rd choice class spec?</h3>
              </div>
              <div className="ClassQuestions">
                <div id="ClassChoice3" className="ClassDropdown">
                  <input
                    id="ClassChoice3-input"
                    type="text"
                    placeholder="3rd Choice Class"
                    className="ClassDropdown-input"
                  />
                  <i
                    id="ClassChoice3-icon"
                    className="icon iconfont icon-arrow"
                  />
                  <ul id="ClassChoice3-ul" className="ClassDropdown-ul" />
                </div>
                <div id="SpecChoice3" className="ClassDropdown">
                  <input
                    id="SpecChoice3-input"
                    type="text"
                    placeholder="3rd Choice Spec"
                    className="SpecDropdown-input"
                  />
                  <i
                    id="SpecChoice3-icon"
                    className="icon iconfont icon-arrow"
                  />
                  <ul id="SpecChoice3-ul" className="SpecDropdown-ul" />
                </div>
                <input
                  id="Choice3Text"
                  className="ChoiceText"
                  type="text"
                  placeholder="Anything you want to add?"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <footer class="footer">Started on 3/10/2024</footer> */}
    </>
  );
}

export default App;
