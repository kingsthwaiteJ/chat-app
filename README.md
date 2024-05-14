<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Chat Application</h3>

  <p align="center">
    A simple client-server chat application built on React, Redis and Socket.io.
    <br />
    <a href="https://github.com/kingsthwaiteJ/chat-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/kingsthwaiteJ/chat-app/issues">Request Feature</a>
  </p>

  [![Version][version-shield]][version-url]
  [![Issues][issues-shield]][issues-url]
  [![Contributors][contributors-shield]][contributors-url]
  [![Stargazers][stars-shield]][stars-url]
  [![MIT License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

I've always wanted to build a simple client-server chat application, as I'm
interested in the way that sockets work both from a technical standpoint
and from a user experience standpoint.

Additionally, I've always wanted to build an SPA using React, and haven't had
the chance to until now, so this is my first attempt at building a React app
and using Redis for storage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Javascript][Javascript.com]][Javascript-url]
* [![Socket.io][Socket.io]][Socket.io-url]
* [![Express][Express.com]][Express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these instructions to set up the application on your machine.

### Build it yourself

1. Clone the repo
   ```
   git clone https://github.com/kingsthwaiteJ/chat-app.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Run the application
   ```
   node index.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

After this extension has been added to chrome, there is no further set up required. Whenever you open a new tab and click on the extension icon from your extensions bar, the popup will appear with the JSON-LD content of the active page.

You can then browse through the content using the embedded JSON viewer, or copy the JSON-LD content and review it in another application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- Migrate to Typescript
- Add test framework + implement tests
- Implement React + UI improvements
- Implement Redis for persistent storage (sqlite as a backup)
- Add the ability to engage in multiple chat rooms concurrently
- Implement direct message functionality with another user

See the [open issues][issues-url] for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/featureName`)
3. Commit your Changes (`git commit -m 'Added a new feature'`)
4. Push to the Branch (`git push origin feature/featureName`)
5. Open a Pull Request

<br/>
<div align="center">
  <a href="https://www.buymeacoffee.com/kingsthwaiteJ" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thank you to the following package owners:

* [Socket.io](https://socket.io) for providing a fantastic socket library.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kingsthwaiteJ/chat-app?style=for-the-badge
[contributors-url]: https://github.com/kingsthwaiteJ/chat-app/graphs/contributors
[version-shield]: https://img.shields.io/github/package-json/v/kingsthwaiteJ/chat-app?style=for-the-badge
[version-url]: https://github.com/kingsthwaiteJ/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/kingsthwaiteJ/chat-app?style=for-the-badge
[stars-url]: https://github.com/kingsthwaiteJ/chat-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/kingsthwaiteJ/chat-app?style=for-the-badge
[issues-url]: https://github.com/kingsthwaiteJ/chat-app/issues
[license-shield]: https://img.shields.io/github/license/kingsthwaiteJ/chat-app?style=for-the-badge
[license-url]: https://github.com/kingsthwaiteJ/chat-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kingsthwaiteJ
[product-screenshot]: https://raw.githubusercontent.com/kingsthwaiteJ/chat-app/main/public/images/jsonld-viewer-screenshot.PNG
[Javascript.com]: https://img.shields.io/badge/Javascript-FCDC00?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://www.javascript.com/
[Socket.io]: https://img.shields.io/badge/Socket.io-25C2A0?style=for-the-badge&logo=socket.io&logoColor=white
[Socket.io-url]: https://socket.io
[Express.com]: https://img.shields.io/badge/ExpressJS-EEEEEE?style=for-the-badge&logo=express&logoColor=black
[Express-url]: https://expressjs.com