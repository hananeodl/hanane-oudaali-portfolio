const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const progress = $("#progress");
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${h ? (scrollY / h) * 100 : 0}%`;
});

const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
$$(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const themeBtn = $("#themeBtn");
const savedTheme = localStorage.getItem("ho-theme");
if (savedTheme === "dark") document.body.classList.add("dark");
themeBtn.textContent = document.body.classList.contains("dark") ? "☼" : "◐";
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("ho-theme", dark ? "dark" : "light");
  themeBtn.textContent = dark ? "☼" : "◐";
});

const filters = $$("#filters button");
const cards = $$(".project-card");
filters.forEach(btn => btn.addEventListener("click", () => {
  filters.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const f = btn.dataset.filter;
  cards.forEach(card => card.style.display = f === "all" || card.dataset.cat === f ? "" : "none");
}));

const projectData = {
  book: {
    kicker:"FULL-STACK MOBILE · INDIVIDUAL ACADEMIC PROJECT · 2024–2025", title:"BookBorrow",
    text:"A full-stack mobile application for managing book borrowing, allowing users to securely authenticate, browse and borrow books, track borrowed books, and manage their borrowing history.",
    bullets:["Developed the complete application individually, from backend services to the mobile interface.","Built RESTful APIs with Spring Boot and connected the React Native application to the backend.","Implemented JWT-based authentication for secure user access.","Integrated MySQL with Hibernate/JPA for persistent data management.","Implemented book borrowing, returns, borrowing tracking, and user profile functionality."],
    stack:["React Native","Expo","Spring Boot","REST API","MySQL","JWT","Hibernate/JPA"],
    links:[["View on GitHub","https://github.com/hananeodl/book_borrow"]],
    gallery:[
      ["Implementation Screenshot","assets/projects/bookborrow/screen1.png"],
      ["Implementation Screenshot","assets/projects/bookborrow/screen2.png"],
      ["Implementation Screenshot","assets/projects/bookborrow/screen3.png"],
      ["Implementation Screenshot","assets/projects/bookborrow/screen4.png"],
      ["Implementation Screenshot","assets/projects/bookborrow/screen5.png"],
      ["Implementation Screenshot","assets/projects/bookborrow/screen6.png"],
      ["Implementation Screenshot","assets/projects/bookborrow/screen7.png"]
    ]
  },
  chatbot: {
    kicker:"NLP · SEMANTIC SEARCH · INFORMATION RETRIEVAL · ACADEMIC TEAM PROJECT", title:"Scientific Research Chatbot",
    text:"An intelligent scientific chatbot designed to help users search and explore ArXiv publications using natural-language queries and semantic similarity. The project combines data extraction, structured storage, transformer embeddings, FAISS indexing, intent detection, and interactive Streamlit visualizations.",
    role:"NLP / AI Developer — Streamlit Interface",
    bullets:[
      "Developed the interactive Streamlit interface and integrated the semantic-search components into the chatbot experience as part of a collaborative team.",
      "Integrated Sentence Transformer embeddings and the FAISS vector index into the search interaction, loading the model and index for semantic retrieval.",
      "Implemented natural-language search interaction with conversation history and filters by year, author, and domain.",
      "Connected the interface to the NLP intent-detection module built with spaCy for requests such as publication trends, author statistics, domain statistics, and keyword analysis.",
      "Integrated interactive Plotly visualizations including publications by year, top authors, domain distribution, keyword frequency, and keyword trends over time.",
      "The data workflow extracted ArXiv metadata with Python/feedparser, cleaned and normalized records with Pandas, and stored structured article information in MySQL.",
      "The project explored a very large Kaggle ArXiv JSON dataset of approximately 4 million articles, but final processing was limited to data extracted through the ArXiv API because of hardware, storage, and RAM constraints.",
      "A sample of 100,000 articles was vectorized with SentenceTransformer('all-MiniLM-L6-v2') and indexed with FAISS for semantic similarity search.",
      "Two data-access approaches were explored — CSV + FAISS and MySQL + FAISS — with CSV + FAISS providing significantly faster retrieval in the project experiments.",
      "The Streamlit interface was demonstrated from Google Colab using ngrok; this is an AI/NLP academic team project rather than a conventional software project with a public GitHub repository."
    ],
    stack:["Python","Google Colab","Sentence Transformers","FAISS","MySQL","Pandas","spaCy","Streamlit","Plotly","ArXiv API"],
    architecture:"ArXiv API → Data Extraction → Cleaning / Preprocessing → MySQL + CSV → Sentence Transformer Embeddings → FAISS Vector Index → Semantic Search → Intent Detection → Plotly Visualization → Streamlit Chatbot",
    highlights:["100,000 indexed articles","all-MiniLM-L6-v2 embeddings","FAISS semantic retrieval","spaCy intent detection","Interactive Plotly analytics"],
    links:[["View Notebook (Google Colab)","https://colab.research.google.com/drive/1fd_3OfGAkYBhqsy9BJxeF6rEF1TqazcU?usp=sharing"]],
    gallery:[
      ["System Architecture","assets/projects/chatbot/architecture.png"]
    ]

  },
  microservices: {
    kicker:"MICROSERVICES · BACKEND · SECURITY · ACADEMIC TEAM PROJECT", title:"Employee Management System",
    text:"A microservices-based employee management platform built with Spring Boot and Spring Cloud, featuring service discovery, centralized configuration, API Gateway routing, and secure inter-service communication.",
    role:"Backend Developer — Security & Inter-Service Communication",
    bullets:[
      "Focused on securing communications and inter-service calls across the microservices architecture.",
      "Worked on the Config Server and API Gateway to support centralized configuration and controlled service routing.",
      "Configured Eureka Discovery Server for service registration and discovery between microservices.",
      "Worked on HTTPS/SSL configuration and secure communication between components.",
      "Configured CORS to support secure communication between the backend services and the React frontend.",
      "Contributed to the Payroll Service and Absence Management Service within the distributed backend architecture.",
      "Worked on communication and REST calls between microservices and the overall service-to-service integration.",
      "Collaborated on the team-based implementation of the employee management platform."
    ],
    stack:["Spring Boot","Spring Cloud","Spring Security","Eureka","API Gateway","MySQL","REST"],
    links:[["Backend","https://github.com/hananeodl/employee_system"],["Frontend","https://github.com/hananeodl/employee_frontend"]],
    gallery:[
      ["Implementation Screenshot","assets/projects/microservices/architecture.png"]]
  },
  smartauto: {
    kicker:"IOT · EMBEDDED SYSTEMS · ACADEMIC TEAM PROJECT · IOT + AI", title:"SmartAutoCare",
    text:"An IoT and AI-based predictive-maintenance prototype designed to detect potential mechanical anomalies from vibration and sound signals. The project combines physical sensing, ESP32 data acquisition, signal processing, machine learning, and MATLAB/Simulink simulation.",
    role:"IoT & Embedded Systems Developer — focused on ESP32 integration, sensor connection, physical prototype development, and integration between the IoT layer and the AI-based predictive-maintenance workflow.",
    bullets:[
      "Connected vibration and sound sensors to an ESP32 as the embedded acquisition/controller layer.",
      "Contributed to the physical IoT prototype and the integration of sensor data with the predictive-maintenance workflow.",
      "Worked on the embedded/interface side of the prototype while collaborating with the team on the overall system.",
      "The project workflow combines sensor acquisition, signal processing, machine learning, anomaly detection, and predictive maintenance.",
      "Machine-learning model training and experimentation were performed collaboratively using Python and Google Colab.",
      "MATLAB/Simulink was used collaboratively for system modeling, simulation, and signal-analysis work; this was not solely developed by one team member.",
      "The project explores early detection of abnormal mechanical behavior using sound and vibration as indicators rather than waiting for a mechanical failure."
    ],
    stack:["ESP32","Vibration Sensor","Sound Sensor","Python","Google Colab","Machine Learning","Signal Processing","MATLAB","Simulink","IoT"],
    links:[["Model Training (Google Colab)","https://colab.research.google.com/drive/1elcyootV1_E9bx411GcFKIIpl-aWVTJy?usp=sharing"]],
    gallery:[
      ["MATLAB/Simulink Simulation","assets/projects/smartauto/simulation.png"]
    ]
  },
  dialect: {
    kicker:"NLP · DEEP LEARNING · ACADEMIC TEAM PROJECT · KAGGLE · JANUARY 2026", title:"Arabic Dialect Identification",
    text:"A model-training and experimentation project for automatic Arabic dialect identification using the MADAR Corpus-6. The team compared multiple deep learning and transformer-based approaches before selecting a final CAMeLBERT-Mix + LoRA + pseudo-labeling approach.",
    role:"Deep Learning / NLP Team Member — focused on training models and evaluating different approaches to find the best-performing model.",
    bullets:[
      "Classified short Arabic text samples into six categories: MSA, Beirut, Cairo, Doha, Rabat, and Tunis.",
      "Worked with the MADAR Corpus-6 dataset: 54,000 labeled training samples balanced across six dialect classes, plus approximately 6,000 unlabeled test samples.",
      "Experimented with BiLSTM + Multi-Head Attention, FastText + CNN + BiLSTM + Attention, CNN + BiGRU + Attention, AraBERT, QARiB, MARBERT, and MARBERT + AraBERT.",
      "Compared models using evaluation metrics including Macro F1, Jaccard, and Accuracy to identify the strongest approach.",
      "Used CAMeLBERT-Mix as the pretrained Arabic transformer for the final approach.",
      "Applied LoRA for parameter-efficient fine-tuning by freezing the base model and training low-rank adaptation matrices; approximately 594K parameters were trainable out of about 109M base parameters.",
      "Applied pseudo-labeling to leverage unlabeled data: train an initial model, generate predictions, retain high-confidence predictions, and retrain with the expanded dataset.",
      "The project's reported evaluation/competition performance exceeded 97%, with very stable cross-validation results and less than 0.1% variance between folds.",
      "Developed primarily in Google Colab for model training and experimentation as part of a Kaggle competition; this is not a web or mobile application project."
    ],
    stack:["Python","Google Colab","Transformers","MARBERT","AraBERT","CAMeLBERT-Mix","LoRA","Pseudo-Labeling","NLP"],
    highlights:["54,000 training samples","6 dialect classes",">97% competition F1 score","109M → 594K trainable params (LoRA)","<0.1% cross-validation variance"],
    gallery:[
      ["Training / Validation Loss Curves","assets/projects/dialect/screen1.png"],
      ["Pseudo-Label Confidence Distribution","assets/projects/dialect/screen2.png"],
      ["Predicted Dialect Distribution (Test Set)","assets/projects/dialect/screen3.png"]
    ]
  },
  bigdata: {
    kicker:"BIG DATA · DATA ENGINEERING · ACADEMIC TEAM PROJECT · 2024–2025", title:"Big Data Traffic Accident Analysis",
    text:"An academic team project focused on processing, analyzing, and visualizing large-scale US-Accidents data with Apache Spark. The workflow combined data cleaning, distributed batch processing, simulated streaming, HDFS storage, Hive integration, and Tableau visualization.",
    bullets:[
      "Cleaned and prepared the US-Accidents dataset, including missing-value handling, outlier treatment, data-type correction, and postal-code standardization.",
      "Exported the cleaned dataset to Parquet and worked with Spark DataFrames in a local standalone environment with HDFS storage.",
      "Performed batch analysis by state, severity, month, day, accident duration, city, and weather conditions.",
      "Simulated a continuous accident-data stream from CSV files using Apache Spark Streaming.",
      "Applied windowing and watermarking to calculate dynamic indicators such as accidents per hour.",
      "Implemented real-time filtering of severe accidents in the streaming pipeline.",
      "Created interactive Tableau visualizations covering geographical, temporal, severity, and weather-related patterns.",
      "Worked as part of a four-person academic team; the original source code is no longer available, so the project is documented through the presentation and implementation screenshots."
    ],
    stack:["Apache Spark","Spark DataFrames","Spark Streaming","HDFS","Hive","Tableau","Linux","Batch Processing","Windowing","Watermarking"],
    architecture:"Data Loading → Transformations (filters, joins) → Actions (calculations, aggregations) → Export (results)",
    gallery:[
      ["Implementation Screenshot","assets/projects/bigdata/screen1.png"],
      ["Implementation Screenshot","assets/projects/bigdata/screen2.png"],
      ["Implementation Screenshot","assets/projects/bigdata/screen3.png"],
      ["Implementation Screenshot","assets/projects/bigdata/screen4.png"]
    ]
  },
  ordodesk: {
    kicker:"WEB DEVELOPMENT · BUSINESS APPLICATIONS · ACADEMIC TEAM PROJECT · 2024–2025",
    title:"OrdoDesk",
    text:"A web application designed to digitize and automate administrative correspondence management, helping organizations track incoming and outgoing mail, assign correspondence to departments, archive documents, search records, and generate statistics and reports.",
    role:"Full-Stack Developer — Team Contributor",
    bullets:[
      "Contributed to the development and integration of the web application, working with the team on the administrative correspondence management workflow and application functionality.",
      "The platform centralizes incoming and outgoing mail management to improve processing, traceability, and follow-up.",
      "Supports assignment of correspondence to departments, digital document storage, and document archiving.",
      "Provides search and tracking capabilities for administrative correspondence.",
      "Includes user management with role-based access for Administrator, Administrative Agent, Department Manager, and Management / General Secretariat.",
      "Provides dashboards, statistics, automated reporting, PDF report generation, and Excel export.",
      "Uses Next.js for the web application layer, Prisma ORM for database access, MySQL for persistence, and JWT-based authentication.",
      "The project was developed by a four-person academic team at Université Chouaib Doukkali, Faculté des Sciences d'El Jadida, during the 2024–2025 academic year."
    ],
    stack:["Next.js","MySQL","Prisma ORM","JWT","PDFKit","JsExcel","Vercel"],
    architecture:"Vercel → Next.js UI + API → Prisma ORM → MySQL",
    highlights:["Incoming & outgoing mail management","Digital document archiving","Department assignment","User roles & authentication","PDF & Excel reporting","Statistics & dashboards"],
    gallery:[
      ["Technical Architecture","assets/projects/ordodesk/architecture.jpg"]
    ],
    links:[["View on GitHub","https://github.com/GitAmina/Gestion-bureau-dordre"]]
  },
  blockchain: {
    kicker:"BLOCKCHAIN · DISTRIBUTED SYSTEMS · ACADEMIC PROJECT", title:"Real Estate Transaction Traceability",
    text:"A permissioned blockchain escrow system for secure and traceable real estate transactions, migrated from an Ethereum-based architecture to Hyperledger Fabric while preserving the original escrow business logic.",
    role:"Blockchain Developer — Hyperledger Fabric & Smart Contracts",
    bullets:[
      "Implemented and migrated the real estate escrow business logic from Ethereum-style smart contracts to Hyperledger Fabric chaincode written in Go.",
      "Implemented the core escrow workflow: Create Escrow → Deposit Funds → Deliver Property → Confirm Delivery → Release Funds → Close Escrow.",
      "Worked with a permissioned Fabric network using endorsing peers, a Raft ordering service, Fabric CA, MSP-based identities, and certificate-based access control.",
      "Used CouchDB as the Fabric state database and Docker to support the blockchain infrastructure.",
      "Implemented chaincode operations including CreateEscrow, DepositFunds, ConfirmDelivery, ReleaseFunds, CancelEscrow, QueryEscrow, and GetEscrowHistory.",
      "Supported transaction traceability through escrow queries and transaction-history retrieval.",
      "Applied TLS-secured peer communication and endorsement policies requiring organizational approval.",
      "Implemented and worked with Go and Node.js client applications through the Fabric SDK.",
      "Demonstrated the migration from Ethereum concepts to Fabric: Smart Contract → Chaincode, Account → MSP/X.509 Identity, PoA Clique → Endorsement + Ordering, msg.sender → GetCreator / ClientIdentity, mapping → PutState / GetState, emit → SetEvent, and Web3.js → Fabric SDK."
    ],
    stack:["Hyperledger Fabric 2.5","Go","Docker","Fabric CA","CouchDB","Node.js","Fabric SDK"],
    architecture:"Organizations → Endorsing Peers → Raft Orderer → Channel → Go Chaincode → Real Estate Escrow",
    highlights:["Ethereum → Hyperledger Fabric migration","Go chaincode development","Permissioned blockchain network","Real estate escrow workflow","MSP / X.509 identities","Raft ordering service","Dockerized Fabric infrastructure","CouchDB state database","Go & Node.js clients"],
    gallery:[
      ["Fabric Network Architecture","assets/projects/blockchain/Network_Architecture.jpg"]
    ],
    links:[["View on GitHub","https://github.com/hananeodl/Real-Estate-Traceability"]]
  },
  cnn: {
    kicker:"APRIL 2024 · DEEP LEARNING · COMPUTER VISION", title:"Breast Cancer Image Classification",
    text:"My first highlighted AI/computer-vision project: a complete image-classification workflow built around a well-known Kaggle breast-cancer dataset. The data was downloaded, cleaned and prepared for model training, then used to build a CNN classifier that distinguishes Malignant (M) from Benign (B) breast images.",
    bullets:[
      "Downloaded and cleaned the Kaggle breast-cancer image dataset.",
      "Prepared the mammogram images for deep-learning model training.",
      "Trained a Convolutional Neural Network (CNN) to classify images as Malignant (M) or Benign (B).",
      "Built a user-facing platform where a user uploads a mammogram and receives the model's classification result.",
      "Connected the application interface to the trained model so the prediction is returned after image submission.",
      "Documented the experimentation and model workflow in Google Colab."
    ],
    stack:["TensorFlow","CNN","Python","Google Colab","Image Classification","Kaggle Dataset"],
    links:[
      ["GitHub — application source","https://github.com/hananeodl/cancer_detection"],
      ["Google Colab — model / experimentation","https://colab.research.google.com/drive/115-6lvOaZYR_op1wiAajL5IrvoS8aiq4?usp=sharing"]
    ]
  }
};

const modal = $("#projectModal"), modalContent = $("#modalContent");
cards.forEach(card => card.addEventListener("click", e => {
  if (e.target.closest("a")) return;
  const d = projectData[card.dataset.project];
  if (!d) return;
  const linksHtml = d.links ? `<div class="modal-links">${d.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>`).join("")}</div>` : "";
  const galleryHtml = d.gallery ? `<div class="project-gallery"><div class="gallery-label">PROJECT SCREENS</div><div class="gallery-grid">${d.gallery.map(([label,src])=>`<figure><a href="${src}" target="_blank" rel="noreferrer"><img src="${src}" alt="${d.title} ${label}" loading="lazy"></a><figcaption>${label}</figcaption></figure>`).join("")}</div></div>` : "";
  const roleHtml = d.role ? `<p class="modal-role"><strong>My Role:</strong> ${d.role}</p>` : "";
  const architectureHtml = d.architecture ? `<div class="project-architecture"><div class="gallery-label">SYSTEM ARCHITECTURE</div><div class="architecture-flow">${d.architecture.split(" → ").map((x,i)=>`<span>${x}</span>${i<d.architecture.split(" → ").length-1?"<b>↓</b>":""}`).join("")}</div></div>` : "";
  const highlightsHtml = d.highlights ? `<div class="project-highlights"><div class="gallery-label">PROJECT HIGHLIGHTS</div><div class="highlight-grid">${d.highlights.map(x=>`<span>${x}</span>`).join("")}</div></div>` : "";
  modalContent.innerHTML = `<div class="modal-inner"><div class="modal-kicker">${d.kicker}</div><h3>${d.title}</h3><p>${d.text}</p>${roleHtml}<ul>${d.bullets.map(x=>`<li>${x}</li>`).join("")}</ul><div class="modal-stack">${d.stack.map(x=>`<span>${x}</span>`).join("")}</div>${architectureHtml}${highlightsHtml}${galleryHtml}${linksHtml}</div>`;
  modal.showModal();
}));
$("#modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

$("#copyEmail").addEventListener("click", async () => {
  const email = "hanane.oudaali.15@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    $("#copyEmail").textContent = "Copied ✓";
    setTimeout(() => $("#copyEmail").textContent = "Copy email", 1800);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
