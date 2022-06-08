const projectsJSON = {
  "car-jam": {
    title: "Car-Jam",
    body: "An academic project puzzle game which involves sliding cars on a grid to get your car to the opposite side. The more famously known sliding block puzzle, but with cars!<br/><br/>  This game strictly adheres to Model-ViewController architecture and comes with a Breadth-First-Search algorithm solver to provide hints to the user on the next correct move to the final solution.",
    tools: "Java, JavaFX",
    url: "",
  },
  pettr: {
    title: "Pettr",
    body: "A twitter-like social media app which incorporates data obtained from the Petfinder API to let users view, post, and repost animals up for adoption or followed-users posts.<br/><br/> The backend consists of a Node-Express RESTful API as an interface for users on the React frontend to view and create data.<br/><br/> This project also includes secure user authentication with access and refresh tokens which cannot be accessed through browser-javascript, preventing Cross-Site-Scripting.",
    tools: "Node, Express, React, MongoDB, Git",
    url: "",
  },
  "web-checkers": {
    title: "Car-Jam",
    body: "A project carried out by a group of 4 to implement a Checkers web application, using the Java Spark framework.<br/>This project consists of the base checkers game between two signed in players, resignation, game replays, and an AI opponent mode. <br/><br/>My Role: Model design, Unit-testing, Back-end and Front-end feature development.",
    tools: "Java, Spark, Maven, Git",
    url: "",
  },
  "file-encoder": {
    title: "File Encoder-Decoder",
    body: "A tool which encodes the binary data of a file, and in the process, reduces the total size of it. It can decode encoded files back to its original state.<br/><br/> The program uses the Huffman Encoding compression algorithm to represent the most frequently occuring characters in the binary data with <8 bits, resulting in compression of the output file.",
    tools: "C, Valgrind, GDB",
    url: "",
  },
  "room-chat": {
    title: "Room Chat",
    body: "A JavaFX chat application that allows signed in users to create and join chat-rooms as they please on a local network. It also comes with customizable themes!<br/><br/>The application allows multiple clients through the use of sockets and multi-threading.",
    tools: "Java, JavaFX",
    url: "",
  },
  "music-streaming": {
    title: "Music Streaming Simulator",
    body: "This academic group project is a social streaming app which allows users to make connections, share playlists and simulate music playing. One notable feature of this application is the use of complex queries to recommend users personalized song recommendations based on play history and the users network.<br/><br/>This is a data-intensive project which required extensive data modeling. Data was modeled using an ER diagram and inserted and cleaned by Python, while the application runs on Java.<br/><br/>My Contributions: Data modeling, insertion, cleaning, and analysis. Application development.",
    tools: "Java, Python, PostgreSQL, Git",
    url: "",
  },
  "word-data": {
    title: "Word Data Plotter",
    body: "This academic project parses through word data usage throughout the centuries to generate statistics on word count, frequency, length, and letter frequency. Results are then plotted onto a graph using Matplotlib<br/><br/>Through generated plots, we can see interesting phenomenon in word data such as how average word length decreases as the internet becomes more widespread, and the occurrence of <a class='link' target='blank' href='https://en.wikipedia.org/wiki/Zipf%27s_law'/>Zipf's law<a/> in word frequency.",
    tools: "Python, Matplotlib",
    url: "",
  },
  microwave: {
    title: "Microwave",
    body: "An academic project that emulates the functions that a microwave-oven can perform through the programming of both internal and external components on a microcontroller.<br/><br/>Apart from heating, this microwave simulator performs all features found on a comparable $80 microwave. Notable features include a touch pad for input, LCD screen, potentiometers to adjust heat level, motor-powered plate spin, and safety features pertaining to door opening and locking.",
    tools: "C, Dragon12-Light Trainer microcontroller",
    url: "",
  },
};

export default projectsJSON;

// Youtube embed link format: https://www.youtube.com/embed/{VideoId}
